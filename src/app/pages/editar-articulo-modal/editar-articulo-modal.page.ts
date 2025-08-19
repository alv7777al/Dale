import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Categoria } from 'src/app/_model/categoria';
import { Ciudad } from 'src/app/_model/ciudad';
import { categorias } from 'src/app/_model/mock-data';
import { Articulo } from 'src/app/_model/producto';

@Component({
  selector: 'app-editar-articulo-modal',
  templateUrl: './editar-articulo-modal.page.html',
  styleUrls: ['./editar-articulo-modal.page.scss'],
  standalone: false
})
export class EditarArticuloModalPage {

  @Input() articulo!: Articulo;
  
  // categorias que vienen del mock-data
  categorias : Categoria[] = categorias;
  //categorias: string[] = ['Electrónica', 'Hogar', 'Ropa', 'Vehículos', 'Servicios'];
  todasCiudades: Ciudad[] = [
    { nombre: 'La Paz' },
    { nombre: 'Cochabamba' },
    { nombre: 'Santa Cruz' },
    { nombre: 'Oruro' },
    { nombre: 'Sucre' },
  ];

  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardarCambios() {
    this.modalCtrl.dismiss(this.articulo); // Devuelve el artículo editado
  }

  eliminarImagen(index: number) {
    this.articulo.imagenesProducto.splice(index, 1);
  }

  agregarImagen() {
    // Por ahora simulamos con una imagen de ejemplo
    this.articulo.imagenesProducto.push('https://via.placeholder.com/150');
  }

}
