import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { COMPONENTS } from './static/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './static/routes';
import { ToastrModule } from 'ngx-toastr';
import { SERVICES } from './static/services';

import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
