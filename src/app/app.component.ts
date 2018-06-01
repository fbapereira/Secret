import { Category } from './models/category.model';
import { Component } from '@angular/core';
import { MainService } from './services/main.service';
import { NavbarComponent } from './components/navbar-component/navbar-component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/**
 * Main component
 */
export class AppComponent {

  constructor(oMainService: MainService, oToastrService: ToastrService) {
    //start the application
    oMainService.Run()
      .subscribe((isOk: any) => {
        if (!isOk) {
          oToastrService.error('Unable to connect! Try again late.', 'Error');
        }
      });
  }
}
