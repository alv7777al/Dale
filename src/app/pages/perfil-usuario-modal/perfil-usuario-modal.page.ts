import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Usuario } from 'src/app/_model/usuario';

@Component({
  selector: 'app-perfil-usuario-modal',
  templateUrl: './perfil-usuario-modal.page.html',
  styleUrls: ['./perfil-usuario-modal.page.scss'],
  standalone: false
})
export class PerfilUsuarioModalPage  {

  @Input() usuario!: Usuario;
  camposUsuario: any[] = [];
  editando: boolean = false; // bandera para mostrar botón Guardar Cambios

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) { }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  cerrarSesion() {
    // Aquí puedes agregar la lógica de logout
    console.log('Cerrar sesión');
    this.modalCtrl.dismiss({ logout: true });
    this.navCtrl.navigateForward('/login');
  }

  activarEdicion() {
    this.editando = true; // se activa al tocar cualquier input
  }

  guardarCambios() {
    // Aquí los datos ya están ligados al objeto usuario mediante ngModel
    console.log('Usuario actualizado:', this.usuario);
    this.editando = false; // ocultamos el botón después de guardar
  }


}
