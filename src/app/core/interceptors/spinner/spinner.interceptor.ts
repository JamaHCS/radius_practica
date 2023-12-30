import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { GlobalService } from '../../services/global/global.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private globalService: GlobalService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.globalService.showSpinner();
    return next
      .handle(req)
      .pipe(finalize(() => this.globalService.hideSpinner()));
  }
}
