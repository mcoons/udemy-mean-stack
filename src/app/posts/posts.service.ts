import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from "./post.model";
// import * as internal from 'stream';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts(){
    this.http.get<{count: string, message: string, posts: Post[] }>('http://localhost:3000/api/posts')
      .subscribe((postData)=>{
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
    // return [...this.posts];  // using spread operator to create a copy
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string){
    const post: Post = {id: null, title: title, content: content};
    this.http.post<{count: string, message: string, posts: Post[] }>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
    console.log(responseData);
    this.posts.push(responseData.posts[0]);
    this.postsUpdated.next([...this.posts]);

  });


}


  constructor(private http: HttpClient) { }
}
