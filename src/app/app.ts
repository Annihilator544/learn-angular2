import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  template: `
  Hello {{ city }}! Welcome to {{ title() }}, {{ 1 + 1 }}!
  <section><app-user /></section>
`,
  imports: [User],
  styles: `
  :host {
    color: #a144eb;
  }
`,
})
export class App {
  city = 'San Francisco';
  protected readonly title = signal('learn-angular');
}
