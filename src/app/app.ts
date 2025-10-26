import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Child } from './child/child';
import { Comments } from "./comments/comments";

@Component({
  selector: 'app-root',
  template: `
  <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
`,
  imports: [RouterOutlet],
  styles: `
  :host {
    color: #a144eb;
  }
`,
})
export class App {
  protected readonly title = signal('learn-angular');
}
