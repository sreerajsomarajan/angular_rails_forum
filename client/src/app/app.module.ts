// client/src/app/app.module.ts

// Modules
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent }  from './app.component';
import { PostsComponent } from './posts/posts.component'

// Routing
import { appRouting } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  // providers: [AUTH_PROVIDERS, BookService],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
