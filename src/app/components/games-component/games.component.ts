import { Component, OnInit, Input, OnChanges, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Category } from "../../models/category.model";
import { Game } from "../../models/game.model";
import { MainService } from "../../services/main.service";
import { GameDetailComponent } from "../game-detail-component/game-detail.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-games-component',
  templateUrl: './games.component.html',
  styleUrls: ['games.component.scss']
})

export class GamesComponent implements OnChanges {

  @Input() category: Category;

  @Input() maxGames: number;


  games: Game[];


  @ViewChild('gameDetail') gameDetail: GameDetailComponent;

  constructor(private router: Router) { }

  ngOnChanges(): void {
    this.games = this.category.games.filter((x) => {
      return x.background &&
        x.name &&
        x.id;
    });
    this.games = this.games.sort((x: Game, y: Game) => {
      return y.rating - x.rating;
    });

    if (this.maxGames > 0 && this.games.length > this.maxGames) {
      this.games = this.games.slice(0, this.maxGames);
    }
  }

  selectGame(game: Game): void {
    this.gameDetail.viewGame(game);
  }
  navigateTo(game: Game): void {
    this.router.navigate(['/play'], { queryParams: { game: game.id } });
  }

}
