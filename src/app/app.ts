import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  Hello {{ city }}! Welcome to {{ title() }}, {{ 1 + 1 }}!
`,
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
