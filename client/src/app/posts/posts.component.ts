import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from './posts';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  posts: Post[];

  newPost = new Post('Some post', 'Description');

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.allPosts();
    // console.log(this.fetchSinglePost(1))
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

  // getPosts(): void {
  //   this.postsService
  //       .getPosts()
  //       .then(posts => this.posts = new Post(posts));
  // }

  addPost() {
    this.postsService
        .createPost(this.newPost)
        .subscribe(
          response => { this.posts.push(this.newPost); },
          error => { console.log('Error!!!'); }
        );
  }
}
