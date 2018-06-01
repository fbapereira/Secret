import { Interceptor } from "../interceptor";
import { HttpResponse } from "@angular/common/http";
import { Injector } from "@angular/core";
import { XCHttpInterceptor } from "../http-interceptor";

export class InterceptorFailHttpErrorFailed extends Interceptor.Fail {

  /**
   * Function to throw error
   */
  private fnEmitError: Function;
  private oXCHttpInterceptor: XCHttpInterceptor;
  private injector: any;

  constructor(params?: { [id: string]: any; }, injector?: Injector) {
    super();
    // get params
    this.injector = injector;
  }

  treat(err: HttpResponse<any>): HttpResponse<any> {
    this.oXCHttpInterceptor = this.injector.get(XCHttpInterceptor);
    this.oXCHttpInterceptor.emitError(err);
    return err;

  }
}
