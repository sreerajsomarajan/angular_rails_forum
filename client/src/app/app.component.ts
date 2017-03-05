import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
  viewProviders: [Title]
})
export class AppComponent {
  currentUser: any;
  title = 'app works!';

  constructor(private titleService: Title) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle || 'Forum - Home');
  }
}
