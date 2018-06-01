import { Component, OnInit, Input, OnChanges, SecurityContext } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Category } from "../../models/category.model";
import { Game } from "../../models/game.model";
import { MainService } from "../../services/main.service";
import { ActivatedRoute, Router } from "@angular/router"


@Component({
  selector: 'app-play-component',
  templateUrl: './play.component.html',
  styleUrls: ['play.component.scss']
})

export class PlayComponent implements OnInit {

  game: Game;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: any) => {

        const gameId = params['game'];

        this.mainService.lstCategory
          .forEach((category: Category) => {
            const lstGames: Game[] = category.games
              .filter((_game: Game) => {
                return _game.id === gameId;
              });

            if (lstGames && lstGames.length > 0) {
              this.game = lstGames[0];
              return;
            }
          });

        if (!this.game) {
          this.router.navigate(['/']);
        }
      });
  }
}
