import 'rxjs/add/operator/map';
import { Category } from '../../models/category.model';
import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Game } from '../../models/game.model';
import { GameDetailComponent } from '../game-detail-component/game-detail.component';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-component',
  templateUrl: './games.component.html',
  styleUrls: ['games.component.scss']
})

/**
 * game list
 */
export class GamesComponent implements OnChanges {

  /**
   * category
   */
  @Input() category: Category;

  /**
   * number of games to be dislayed
   */
  @Input() maxGames: number;


  /**
   * game detail component
   */
  @ViewChild('gameDetail') gameDetail: GameDetailComponent;


  /**
   * games to be displayed
   */
  games: Game[];

  constructor(private router: Router) { }

  ngOnChanges(): void {
    if (!this.category || !this.category.games) { return; }

    // filter games
    this.games = this.category.games.filter((x) => {
      return x.background &&
        x.name &&
        x.id;
    });

    // sort games according rate
    this.games = this.games.sort((x: Game, y: Game) => {
      return y.rating - x.rating;
    });

    // slice games to be displayed
    if (this.maxGames > 0 && this.games.length > this.maxGames) {
      this.games = this.games.slice(0, this.maxGames);
    }
  }

  /**
   * show game details
   * @param game
   */
  selectGame(game: Game): void {
    this.gameDetail.viewGame(game);
  }

  /**
   * navigate to play screen
   * @param game
   */
  navigateTo(game: Game): void {
    this.router.navigate(['/play'], { queryParams: { game: game.id } });
  }
}
