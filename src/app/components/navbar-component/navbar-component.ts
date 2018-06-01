import { Component, EventEmitter, ViewChild } from "@angular/core";
import { MainService } from "../../services/main.service";
import { LateralMenuComponent } from "../lateral-menu-component/lateral-menu.component";

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.html',
  styleUrls: ['navbar-component.scss']
})

export class NavbarComponent {
  constructor(private mainService: MainService) {

  }

  @ViewChild('lateralMenu') lateralMenu: LateralMenuComponent;

  menuChange(): void {
    this.lateralMenu.changeMenuStatus();
  }

}
