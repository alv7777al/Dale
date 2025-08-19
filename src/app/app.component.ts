import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    try {
      // Evita que la app se meta debajo de la barra
      await StatusBar.setOverlaysWebView({ overlay: false });

       // 👇 Cambiar el color de fondo de la status bar
      await StatusBar.setBackgroundColor({ color: '#1565c0' });

      // 👇 Ajustar el color de los iconos (blancos porque el azul es oscuro)
      await StatusBar.setStyle({ style: Style.Light });
    } catch (err) {
      console.log('StatusBar no soportado en esta plataforma', err);
    }
  }
}
