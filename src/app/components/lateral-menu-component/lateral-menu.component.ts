import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Category } from '../../models/category.model';
import { Game } from '../../models/game.model';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { MainService } from '../../services/main.service';
import { ActivatedRoute, Router } from '@angular/router';

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

export class LateralMenuComponent {
  state: string = 'hide';

  @Input()
  categories: Category[];

  constructor(private router: Router) { }

  navigateTo(category: Category): void {
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
  changeMenuStatus(): void {
    this.state = (this.state === 'show' ? 'hide' : 'show');
  }
}
