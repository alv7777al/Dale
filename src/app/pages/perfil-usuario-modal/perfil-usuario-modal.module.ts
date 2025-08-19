import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUsuarioModalPageRoutingModule } from './perfil-usuario-modal-routing.module';

import { PerfilUsuarioModalPage } from './perfil-usuario-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilUsuarioModalPageRoutingModule
  ],
  declarations: [PerfilUsuarioModalPage]
})
export class PerfilUsuarioModalPageModule {}
