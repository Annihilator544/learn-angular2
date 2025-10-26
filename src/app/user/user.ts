import { LowerCasePipe, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage, FormsModule, LowerCasePipe],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
  occupation = "hello";
  favoriteFramework = ''
  showFramework() {
    alert(this.favoriteFramework);
  }
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}]
}
