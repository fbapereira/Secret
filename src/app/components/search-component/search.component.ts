import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MainService } from '../../services/main.service';
import { Category } from '../../models/category.model';
import { Router } from '@angular/router';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html',
  // styleUrls: ['search.component.scss']
})

export class SearchComponent {

  category: any = {};
  games: Game[] = [];
  filteredGames: Game[] = [];
  sSearch: string;

  constructor(private mainService: MainService, private router: Router) {
    // concat all elements
    mainService.lstCategory
      .forEach((category: Category) => {
        this.games = this.games.concat(category.games);
      });

    // return to home if no game
    if (!this.games ||
      this.games.length === 0) {
      this.router.navigate(['/']);
    }


    this.games = this.removeDuplicates(this.games, 'id');
    this.filteredGames = this.games;
    this.category = { 'games': this.filteredGames };
  }

  search(): void {
    if (!this.sSearch ||
      this.sSearch.length === 0) {
      this.filteredGames = this.games;
      this.category = { 'games': this.filteredGames };
      return;
    }

    let sSearchUpper = this.sSearch.toUpperCase();

    this.filteredGames = this.games.filter((x: Game) => {
      if (x.id && x.id.toUpperCase().indexOf(sSearchUpper) > -1) { return true; }
      if (x.name && x.name.toUpperCase().indexOf(sSearchUpper) > -1) { return true; }
      if (x.vendor && x.vendor.toUpperCase().indexOf(sSearchUpper) > -1) { return true; }
      // if (x.description_long && x.description_long.toUpperCase().indexOf(sSearchUpper) > -1) { return true; } // Tooo SLow and is not necessary

      return false;
    });
    this.category = undefined;
    this.category = { 'games': this.filteredGames };
  }

  public removeDuplicates(arr, prop) {
    const obj = {};

    for (let i = 0, len = arr.length; i < len; i++) {
      if (!obj[arr[i][prop]]) {
        obj[arr[i][prop]] = arr[i];
      }
    }
    const newArr = [];

    // tslint:disable-next-line:forin
    for (let key in obj) {
      newArr.push(obj[key]);
    }

    return newArr;
  }


}
