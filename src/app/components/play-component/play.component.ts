import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { Component, OnInit, Input, OnChanges, SecurityContext } from '@angular/core';
import { Game } from '../../models/game.model';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-play-component',
  templateUrl: './play.component.html',
  styleUrls: ['play.component.scss']
})

/**
 * component where the user will play the game
 */
export class PlayComponent implements OnInit {

  /**
   * target game
   */
  game: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService) { }

  ngOnInit() {

    // get route params
    this.route.queryParams
      .subscribe((params: any) => {

        // get game id
        const gameId = params['game'];

        // get game
        this.mainService.lstCategory
          .forEach((category: Category) => {
            // games with the id
            const lstGames: Game[] = category.games
              .filter((_game: Game) => {
                return _game.id === gameId;
              });

            // validate the games
            if (lstGames && lstGames.length > 0) {
              this.game = lstGames[0];
              return;
            }
          });

        // with there is no game, return to home
        if (!this.game) {
          this.router.navigate(['/']);
        }
      });
  }
}
