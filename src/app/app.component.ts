import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li><a routerLink="/login">login</a></li>
      <li><a routerLink="/registration">registration</a></li>
      <li><a routerLink="/add-category">+ Category</a></li>
      <li><a routerLink="/categories">Categories</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-misc';
}
