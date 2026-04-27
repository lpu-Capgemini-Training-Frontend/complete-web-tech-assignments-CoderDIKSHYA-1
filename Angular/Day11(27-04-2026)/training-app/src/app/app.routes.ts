import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Add } from './components/add/add';
import { List } from './components/list/list';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'list', component: List },
  { path: 'add', component: Add }
];