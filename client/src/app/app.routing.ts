import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

export const appRouting = RouterModule.forRoot([
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: PostsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'posts' }
]);
