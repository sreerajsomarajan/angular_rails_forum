import { Routes, RouterModule } from '@angular/router';

import {
  PostsComponent,
  LoginComponent,
  RegisterComponent
} from './components/index'
import { AuthGuard } from './shared/auth.guard';

export const appRouting = RouterModule.forRoot([
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'posts' }
]);
