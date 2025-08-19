import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Articulo } from 'src/app/_model/producto';

@Component({
  selector: 'app-detalle-producto-modal',
  templateUrl: './detalle-producto-modal.page.html',
  styleUrls: ['./detalle-producto-modal.page.scss'],
  standalone: false
})
export class DetalleProductoModalPage implements OnInit {

 @Input() producto: Articulo | undefined;

  productImages: string[] = [];
  
  @ViewChild('gallery', { static: false }) galleryRef!: ElementRef<HTMLDivElement>;
  activeImageIndex: number = 0;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log('Producto recibido en el modal:', this.producto);
    // Si el producto tiene un array de imágenes, lo usamos
    // Si solo tiene una imagen, lo convertimos en array
    if (Array.isArray(this.producto?.imagenesProducto)) {
      this.productImages = this.producto!.imagenesProducto;
    } else if (this.producto?.imagenesProducto) {
      this.productImages = [this.producto.imagenesProducto];
    } else {
      this.productImages = [];
    }
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  contactSeller() {
    window.open(`https://wa.me/591${this.producto?.usuario.celular}`, '_blank');
  }


onGalleryScroll(event: Event) {
  if (!this.galleryRef) return;
  const gallery = this.galleryRef.nativeElement;
  const scrollLeft = gallery.scrollLeft;
  const slideWidth = gallery.offsetWidth;
  const index = Math.round(scrollLeft / slideWidth);
  this.activeImageIndex = index;
}

}
