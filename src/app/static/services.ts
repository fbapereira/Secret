import { MainService } from "../services/main.service";
import { XCHttpInterceptor } from "../interceptor/http-interceptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";

import { XCErrorHandler } from '../error-handler/error-handler'
import { ToastrService } from "ngx-toastr";
export const SERVICES: any = [
  MainService,
  XCHttpInterceptor,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: XCHttpInterceptor,
    multi: true
  },
  {
    provide: ErrorHandler,
    useClass: XCErrorHandler
  }
];
