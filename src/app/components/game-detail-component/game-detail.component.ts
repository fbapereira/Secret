import 'rxjs/add/operator/map';
import { Category } from '../../models/category.model';
import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { Game } from '../../models/game.model';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../../services/main.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-detail-component',
  templateUrl: './game-detail.component.html',
  styleUrls: ['game-detail.component.scss']
})

/**
 * show the details of the game
 */
export class GameDetailComponent {
  /**
   * target game
   */
  game: Game;

  /**
   * modal
   */
  @ViewChild('content') content: any;

  /**
   * reference to modal
   */
  ref: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private router: Router) { }

  /**
   * Open modal with details
   * @param game
   */
  viewGame(game: Game): void {
    this.game = game;
    this.ref = this.modalService.open(this.content)
    // .result.then((result) => {
    //   // nothing to do here
    // },
    //   (e) => {
    //     // nothing to do here Too:)
    //   });
  }

  /**
   * Get game description
   */
  getDescription(): string {
    // You know... description are despised :,()
    if (!this.game.description_long) { return 'No description'; }
    return this.game.description_long;
  }

  /**
   * Navigate to the play screen
   */
  navigateTo(): void {
    this.ref.dismiss({});
    this.router.navigate(['/play'], { queryParams: { game: this.game.id } });
  }
}
