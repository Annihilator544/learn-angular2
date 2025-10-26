import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
  occupation = input.required<string>();
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]
}
