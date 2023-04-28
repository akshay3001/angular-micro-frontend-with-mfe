import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav style="margin-top: 100px">
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="dashboard">Dashboard</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shell App';
}
