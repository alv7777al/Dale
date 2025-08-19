import { Component } from '@angular/core';
import { Articulo } from '../_model/producto';
import { listaProductos } from '../_model/mock-data';
import { ModalController } from '@ionic/angular';
import { EditarArticuloModalPage } from '../pages/editar-articulo-modal/editar-articulo-modal.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

    // Lista de productos importados desde mock-data.ts
    productos : Articulo[] = listaProductos;

    showInfoBar = true;

  constructor(private modalCtrl: ModalController) {}


  cambiarEstado(producto: Articulo) {
    producto.vendido = !producto.vendido;
    // Aquí llamarías al backend para actualizar el estado
  }

  ionViewWillLeave() {

    this.showInfoBar = true;
  }

  async editarArticulo(articulo: Articulo){
    const modal= await this.modalCtrl.create({
      component: EditarArticuloModalPage,
      componentProps: { 
        articulo : articulo
      } 
    });
    await modal.present();
  }

}
