import { Component, inject } from '@angular/core';
import { Comments } from '../comments/comments';
import { Child } from '../child/child';
import { CarService } from '../car-service';

@Component({
  selector: 'app-home',
  imports: [Child, Comments],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  city = 'San Francisco';
  isLoggedIn = true;
  message = '';
  occupation = 'Developer';
  isServerRunning = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  isEditable = true;
  items = new Array();
  carService = inject(CarService);
  display = this.carService.getCars().join(' ⭐️ ');
  addItem(item: string) {
    this.items.push(item);
  }
  greet() {
    console.log('Hello, there 👋');
  }
  showSecretMessage() {
  this.message = 'Way to go 🚀';
}
}
