// client/src/app/app.module.ts

// Modules
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './shared/auth.guard';

// Routing
import { appRouting } from './app.routing';

// Services
import {
  AuthenticationService,
  AlertService,
  PostsService,
  UserService
} from './services/index';

// Components
import {
  AppComponent,
  PostsComponent,
  NavbarComponent,
  LoginComponent,
  RegisterComponent,
  AlertComponent,
  UserComponent
} from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [
    Title,
    AuthGuard,
    AuthenticationService,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
