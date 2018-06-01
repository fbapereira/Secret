import { Component, EventEmitter, ViewChild } from '@angular/core';
import { MainService } from '../../services/main.service';
import { LateralMenuComponent } from '../lateral-menu-component/lateral-menu.component';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.html',
  styleUrls: ['navbar-component.scss']
})

/**
 * Menu component
 */
export class NavbarComponent {

  constructor(private mainService: MainService) { }

  /**
   * lateral menu
   */
  @ViewChild('lateralMenu') lateralMenu: LateralMenuComponent;

  /**
   * change the menu's status OPEN/CLOSE
   */
  menuChange(): void {
    this.lateralMenu.changeMenuStatus();
  }
}
