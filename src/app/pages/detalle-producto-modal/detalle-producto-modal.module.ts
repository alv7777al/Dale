import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProductoModalPageRoutingModule } from './detalle-producto-modal-routing.module';

import { DetalleProductoModalPage } from './detalle-producto-modal.page';
import { TiempoPublicacionPipe } from 'src/app/pipes/tiempo-publicacion.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProductoModalPageRoutingModule,
    TiempoPublicacionPipe
  ],
  declarations: [DetalleProductoModalPage]
})
export class DetalleProductoModalPageModule {}
