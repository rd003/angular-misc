import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <app-confirm-demo></app-confirm-demo>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-misc';
}
