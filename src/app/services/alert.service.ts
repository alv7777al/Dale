import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  // Alerta básica
  showAlert(title: string, text: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'info') {
    return Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: 'Aceptar',
      heightAuto: false
    });
  }

  // Alerta de confirmación
  confirm(
    title: string, 
    text: string, 
    confirmButtonText: string = 'Sí', 
    cancelButtonText: string = 'Cancelar'
  ): Promise<SweetAlertResult> {
    return Swal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3880ff',
      cancelButtonColor: '#92949c',
      confirmButtonText,
      cancelButtonText,
      heightAuto: false
    });
  }

  // Alerta de éxito
  success(title: string, text: string = '') {
    return this.showAlert(title, text, 'success');
  }

  // Alerta de error
  error(title: string, text: string = '') {
    return this.showAlert(title, text, 'error');
  }

  // Alerta de warning
  warning(title: string, text: string = '') {
    return this.showAlert(title, text, 'warning');
  }

  // Alerta personalizada
  custom(options: SweetAlertOptions) {
    return Swal.fire({
      heightAuto: false,
      ...options
    });
  }

}
