import { Component } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  showFormInfo = true;

   categorias = [
    { id: 1, nombre: 'Electrónica' },
    { id: 2, nombre: 'Hogar' },
    { id: 3, nombre: 'Ropa' }
  ];

  ciudades = [
    { id: 1, nombre: 'Cochabamba' },
    { id: 2, nombre: 'La Paz' },
    { id: 3, nombre: 'Santa Cruz' }
  ];

  nuevoProducto: any = {
    categoria: null,
    descripcion: '',
    precio: null,
    ciudades: []
  };

  imagenes: string[] = [];

  constructor(private actionSheetCtrl: ActionSheetController, private platform: Platform, private alertService: AlertService) {}

  ngOnInit() {}

  showSuccess(){
    this.alertService.success('Éxito', 'El producto ha sido publicado exitosamente.');
  }

    showConfirm() {
    this.alertService.confirm(
      'Confirmar acción',
      '¿Estás seguro de que quieres realizar esta acción?'
    ).then((result) => {
      if (result.isConfirmed) {
        this.alertService.success('Confirmado', 'Acción realizada');
      }
    });
  }

    showError() {
    this.alertService.error('Error', 'Algo salió mal');
  }

  showCustom() {
    this.alertService.custom({
      title: 'Personalizado',
      html: '<p>Este es un alerta personalizado</p>',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    });
  }

  async seleccionarImagen() {
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
      this.imagenes.push(image.dataUrl);
    }
  }

  async elegirGaleria() {
    const image = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });
    if (image?.dataUrl) {
      this.imagenes.push(image.dataUrl);
    }
  }

  eliminarImagen(index: number) {
    this.imagenes.splice(index, 1);
  }

  publicarProducto() {
    if (this.imagenes.length === 0) {
      console.log('Debe seleccionar al menos una imagen');
      return;
    }

    const productoFinal = {
      ...this.nuevoProducto,
      imagenes: this.imagenes
    };

    console.log('Producto a publicar:', productoFinal);
    // Aquí llamas a tu servicio para guardar el producto en backend
  }


  ionViewWillLeave() {
  this.nuevoProducto = {
    categoria: null,
    descripcion: '',
    precio: null,
    ciudades: []
  };
  this.imagenes = [];

  this.showFormInfo = true;

  }
  

}
