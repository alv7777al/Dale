import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Categoria } from 'src/app/_model/categoria';
import { Ciudad } from 'src/app/_model/ciudad';
import { categorias } from 'src/app/_model/mock-data';
import { Articulo } from 'src/app/_model/producto';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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

  //imagenes: string[] = [];

  constructor(private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardarCambios() {
    this.modalCtrl.dismiss(this.articulo); // Devuelve el artículo editado
  }

  eliminarImagen(index: number) {
    this.articulo.imagenesProducto.splice(index, 1);
  }

   async agregarImagen() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Agregar imagen',
      buttons: [
        {
          text: 'Tomar foto',
          icon: 'camera-outline',
          handler: () => this.tomarFoto()
        },
        {
          text: 'Elegir de galería',
          icon: 'image-outline',
          handler: () => this.elegirGaleria()
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close-outline'
        }
      ]
    });
    await actionSheet.present();
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    if (image?.dataUrl) {
      this.articulo.imagenesProducto.push(image.dataUrl);
    }
  }

  async elegirGaleria() {
    const image = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });
    if (image?.dataUrl) {
      this.articulo.imagenesProducto.push(image.dataUrl);
    }
  }

}
