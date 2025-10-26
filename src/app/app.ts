import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  template: `
  <div [contentEditable]="isEditable">lsjhbvgokjhbslkjgvbsfklvg</div>
  Hello {{ city }}! Welcome to {{ title() }}, {{ 1 + 1 }}!
  @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }
  @if (isLoggedIn) {
      <p>Welcome back, Friend!</p>
      <section><app-user /></section>
    }
  @if (isServerRunning) {
      <p>The server is running smoothly.</p>
    } @else {
      <p>Server is down. Please try again later.</p>
    }
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
  isLoggedIn = true;
  isServerRunning = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  isEditable = true;
  protected readonly title = signal('learn-angular');
}
