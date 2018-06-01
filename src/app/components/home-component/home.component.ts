import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Category } from "../../models/category.model";
import { Game } from "../../models/game.model";
import { MainService } from "../../services/main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent {


  constructor(private mainService: MainService,
    private router: Router) { }
  navigateTo(category: Category): void {
    this.router.navigate(['/category'], { queryParams: { category: category.slug } });
  }

}
