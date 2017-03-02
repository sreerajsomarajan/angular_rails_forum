import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component'

export const appRouting = RouterModule.forRoot([
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: '**', redirectTo: 'home' }
]);
