import { ErrorHandler, Inject, Injector, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';

@Injectable()
/**
 * custom error handler
 */
export class XCErrorHandler extends ErrorHandler {

  constructor(@Inject(Injector) private injector: Injector) {
    super();
  }

  /**
   * get toastr service
   */
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }

  public handleError(error: any): void {
    // Let show the problem
    this.toastrService.error(
      'An unexpected error has occurred.',
      'Error',
      {
        closeButton: true,
        timeOut: 5000,
        onActivateTick: true
      }
    );

    // Let hide our problems from our guests
    if (!environment.production) {
      console.log(error);
    }
  }
}
