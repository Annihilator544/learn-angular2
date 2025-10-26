import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';
import { Forms } from './forms/forms';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: Home,
    },
    {
        path: 'user',
        title: 'User Page',
        component: User,
    },
    {
        path: 'forms',
        title: 'Forms Page',
        component: Forms,
    }
];
