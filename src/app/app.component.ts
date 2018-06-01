import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { Category } from './models/category.model';
import { NavbarComponent } from './components/navbar-component/navbar-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(oMainService: MainService) {
    oMainService.Run()
      .subscribe((obj: any) => {
      });

  }
}
