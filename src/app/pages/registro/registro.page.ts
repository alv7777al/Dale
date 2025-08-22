import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

 usuario: any = {
    nombre: '',
    apellidos: '',
    celular: '',
    ciudad: '',
    fotoPerfil: ''
  };

  constructor() {}

  ngOnInit(): void {

  }

  tomarFoto() {
    // Aquí puedes integrar Capacitor Camera
    console.log('Abrir cámara para tomar foto');
  }

  subirFoto() {
    // Aquí puedes abrir la galería
    console.log('Abrir galería para subir foto');
  }

  registrar() {
    console.log('Datos de usuario:', this.usuario);
    // Aquí procesas el registro con tu backend o Firebase
  }

}
