import 'rxjs/add/operator/map';
import { Category } from '../../models/category.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Game } from '../../models/game.model';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
})

/**
 * Home component
 */
export class HomeComponent {

  constructor(
    private mainService: MainService,
    private router: Router) { }

  /**
   * navigate to category
   * @param category target category
   */
  navigateTo(category: Category): void {
    this.router.navigate(['/category'], { queryParams: { category: category.slug } });
  }
}
