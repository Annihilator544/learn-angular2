import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/user">User</a>
      <a routerLink="/forms">Forms</a>
      <a routerLink="/pipes">Pipes</a>
    </nav>
    <router-outlet />
`,
  imports: [RouterOutlet, RouterLink],
  styles: `
  :host {
    color: #a144eb;
  }
`,
})
export class App {
  protected readonly title = signal('learn-angular');
}
