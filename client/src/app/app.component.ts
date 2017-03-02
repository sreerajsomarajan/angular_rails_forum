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
  title = 'app works!';

  constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle || 'Forum - Home');
  }
}