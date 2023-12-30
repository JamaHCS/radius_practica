import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Servicio global para controlar el estado de carga.
 * @@Injectable
 */
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  /**
   * BehaviorSubject para controlar el estado de carga.
   * @type {BehaviorSubject<boolean>}
   */
  public isLoading = new BehaviorSubject(false);

  constructor() {}
  /**
   * Método para mostrar el spinner de carga.
   */
  showSpinner() {
    this.isLoading.next(true);
  }
  /**
   * Método para ocultar el spinner de carga.
   */
  hideSpinner() {
    this.isLoading.next(false);
  }
}
