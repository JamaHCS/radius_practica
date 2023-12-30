import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { GlobalService } from '../../services/global/global.service';


/**
 *  Interceptor de Angular que se encarga de mostrar un spinner mientras se realizan peticiones HTTP.
 *  Utiliza HttpInterceptor para interceptar las peticiones, y al hacerlo, muestra un spinner a través del servicio GlobalService.
 *  La función intercept se encarga de mostrar el spinner antes de que la petición salga y luego ocultarlo cuando la petición haya terminado.
 *  @@Injectable
 */
@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private globalService: GlobalService) {}

  /**
   * Intercepta las peticiones HTTP para mostrar un spinner.
   * @param req - HttpRequest<any>: La solicitud HTTP.
   * @param next - HttpHandler: Manejador para la siguiente acción.
   * @returns Observable<HttpEvent<any>>: Observable de eventos HTTP.
   */
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
