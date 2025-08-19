import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarArticuloModalPageRoutingModule } from './editar-articulo-modal-routing.module';

import { EditarArticuloModalPage } from './editar-articulo-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarArticuloModalPageRoutingModule
  ],
  declarations: [EditarArticuloModalPage]
})
export class EditarArticuloModalPageModule {}
