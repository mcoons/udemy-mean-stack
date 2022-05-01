import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   {title: '1st', content: 'aaaa aaaa'},
  //   {title: '2nd', content: 'bbbb bbbb'},
  //   {title: '3rd', content: 'cccc cccc'}
  // ];

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
