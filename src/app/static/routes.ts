import { CategoryComponent } from '../components/category-component/category.component';
import { GamesComponent } from '../components/games-component/games.component';
import { HomeComponent } from '../components/home-component/home.component';
import { PlayComponent } from '../components/play-component/play.component';
import { Routes } from '@angular/router';
import { SearchComponent } from '../components/search-component/search.component';

/**
 * all routes of this application
 */
export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'category', component: CategoryComponent },
  { path: 'home', component: HomeComponent },
  { path: 'play', component: PlayComponent },
  { path: 'search', component: SearchComponent },
  { path: '*', redirectTo: '/home' },
  { path: '**', redirectTo: '/home' },
];
