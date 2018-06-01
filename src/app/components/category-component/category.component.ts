import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Game } from '../../models/game.model';
import { HttpClient } from '@angular/common/http';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-category-component',
  templateUrl: './category.component.html',
  styleUrls: ['category.component.scss']
})

/**
 * category component
 */
export class CategoryComponent implements OnInit {

  // target category
  category: Category;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService) { }

  ngOnInit() {
    // get route params
    this.route.queryParams
      .subscribe((params: any) => {
        // get category id
        const categoryId = params['category'];

        // get category
        const lstCategory: Category[] = this.mainService.lstCategory
          .filter((oCategory) => {
            return oCategory.slug === categoryId;
          });

        // if there is no category, return to home
        if (!lstCategory ||
          lstCategory.length === 0 ||
          !lstCategory[0].games ||
          lstCategory[0].games.length === 0) {
          this.router.navigate(['/']);
        }

        // select category
        this.category = lstCategory[0];
      });
  }
}
