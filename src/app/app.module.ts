import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { COMPONENTS } from './static/components';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './static/routes';
import { RouterModule, Routes } from '@angular/router';
import { SERVICES } from './static/services';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ToastrModule.forRoot()
  ],
  providers: [SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
