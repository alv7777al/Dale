import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

usuario: string = '';
contrasena: string = '';

constructor(private navCtrl: NavController) {}

ngOnInit(): void {
    
}

login() {
  console.log('Usuario:', this.usuario, 'Contraseña:', this.contrasena);
  // Aquí iría tu lógica de autenticación
  this.navCtrl.navigateForward('/tabs/tab1'); // ajusta la ruta según tu proyecto
}

goToRegister() {
  this.navCtrl.navigateForward('/registro'); // ajusta la ruta según tu proyecto
}

}
