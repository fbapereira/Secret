import { ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainService } from '../services/main.service';
import { ToastrService } from 'ngx-toastr';
import { XCErrorHandler } from '../error-handler/error-handler'
import { XCHttpInterceptor } from '../interceptor/http-interceptor';

export const SERVICES: any = [
  MainService,
  XCHttpInterceptor,
  // Custom Http
  {
    provide: HTTP_INTERCEPTORS,
    useClass: XCHttpInterceptor,
    multi: true
  },
  // Custom Error
  {
    provide: ErrorHandler,
    useClass: XCErrorHandler
  }
];
