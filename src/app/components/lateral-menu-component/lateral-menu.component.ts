import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Game } from '../../models/game.model';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../../services/main.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-lateral-menu-component',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['lateral-menu.component.scss'],
  animations: [
    trigger('animationInOut', [
      state('hide', style({
        'left': '-14.7rem'
      })),
      state('show', style({
        'left': '0px'
      })),
      transition('show <=> hide', animate('300ms ease-in')),
    ]),
  ]
})

/**
 * lateral menu
 */
export class LateralMenuComponent {

  /**
   * current status
    */
  state = 'hide';

  /**
   * categories to became menu
   */
  @Input()
  categories: Category[];

  constructor(private router: Router) { }

  /**
   * navigate to category
   * @param category target category
   */
  navigateTo(category: Category): void {
    // case menu close, and user click on it, just open the menu without navigate
    if (this.state === 'hide') {
      this.changeMenuStatus();
      return;
    }

    if (category) {
      this.router.navigate(['/category'], { queryParams: { category: category.slug } });
    } else {
      this.router.navigate(['/']);
    }

    this.changeMenuStatus();
  }

  /**
   * change menu status OPEN/CLOSE
   */
  changeMenuStatus(): void {
    this.state = (this.state === 'show' ? 'hide' : 'show');
  }
}
