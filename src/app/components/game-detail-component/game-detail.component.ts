import { Component, OnInit, Input, OnChanges, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Category } from "../../models/category.model";
import { Game } from "../../models/game.model";
import { MainService } from "../../services/main.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

@Component({
  selector: 'app-game-detail-component',
  templateUrl: './game-detail.component.html',
  styleUrls: ['game-detail.component.scss']
})

export class GameDetailComponent {
  game: Game;
  @ViewChild('content') content: any;
  closeResult: string;

  constructor(private modalService: NgbModal,
    private router: Router) { }

  viewGame(game: Game): void {
    this.game = game;
    this.modalService.open(this.content).result.then((result) => { });
  }


  getDescription(): string {
    if (!this.game.description_long) { return 'No description'; }
    return this.game.description_long;
  }

  navigateTo(): void {
    debugger;
    this.router.navigate(['/play'], { queryParams: { game: this.game.id } });
  }

}
