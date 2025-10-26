import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Child } from './child/child';

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
      <section><app-user [occupation]="occupation" /></section>
    }
  @if (isServerRunning) {
      <p>The server is running smoothly.</p>
    } @else {
      <p>Server is down. Please try again later.</p>
    }
    <button (click)="greet()">Greet</button>
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
`,
  imports: [User, Child],
  styles: `
  :host {
    color: #a144eb;
  }
`,
})
export class App {
  city = 'San Francisco';
  isLoggedIn = true;
  message = '';
  occupation = 'Developer';
  isServerRunning = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  isEditable = true;
  items = new Array();
  addItem(item: string) {
    this.items.push(item);
  }
  greet() {
    console.log('Hello, there 👋');
  }
  showSecretMessage() {
  this.message = 'Way to go 🚀';
}
  protected readonly title = signal('learn-angular');
}
