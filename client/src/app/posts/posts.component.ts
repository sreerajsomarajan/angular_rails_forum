import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from './posts';
import {
  PostsService,
  AlertService
} from '../services/index';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  currentUser: any;
  posts: Post[];

  newPost = new Post('Some post', 'Description');

  constructor(
    private postsService: PostsService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.allPosts();
  }

  allPosts() {
    this.postsService
        .getPosts()
        .subscribe(
          response => { this.posts = response.json(); },
          error => { console.log('Error!!!'); }
        );
  }

  fetchSinglePost(id) {
    this.postsService.getPost(id)
        .subscribe(
          response => { this.posts = response.json(); },
          error => { console.log('Error!!!'); }
        );
  }

  addPost() {
    this.postsService
        .createPost(this.newPost)
        .subscribe(
          response => {
            this.posts.unshift(this.newPost);
            this.newPost = new Post('', '');
          },
          error => {
            this.alertService.error(error);
          }
        );
  }
}
