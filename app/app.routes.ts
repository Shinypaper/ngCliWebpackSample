import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const pageRoutes: Routes = [{
    path: '',
    component: AppComponent
  }, {
    path: 'home',
    component: HomeComponent
  }
];
