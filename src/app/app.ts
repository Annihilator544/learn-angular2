import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  Hello Universe
`,
  styles: `
  :host {
    color: #a144eb;
  }
`,
})
export class App {
  protected readonly title = signal('learn-angular2');
}
