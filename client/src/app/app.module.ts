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
  PostsService
} from './services/index';

// Components
import {
  AppComponent,
  PostsComponent,
  NavbarComponent,
  LoginComponent
} from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    LoginComponent
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
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
