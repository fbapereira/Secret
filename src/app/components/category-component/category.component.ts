import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Category } from "../../models/category.model";
import { Game } from "../../models/game.model";
import { MainService } from "../../services/main.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-category-component',
  templateUrl: './category.component.html',
  styleUrls: ['category.component.scss']
})

export class CategoryComponent implements OnInit {

  category: Category;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((category: any) => {
        const lstCategory: Category[] = this.mainService.lstCategory
          .filter((oCategory) => {
            return oCategory.slug === category['category'];
          });

        if (!lstCategory ||
          lstCategory.length === 0 ||
          !lstCategory[0].games ||
          lstCategory[0].games.length === 0) {
          this.router.navigate(['/']);
        }

        this.category = lstCategory[0];
      });
  }
}
