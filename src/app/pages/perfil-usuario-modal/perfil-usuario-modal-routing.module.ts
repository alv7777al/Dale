import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUsuarioModalPage } from './perfil-usuario-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilUsuarioModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilUsuarioModalPageRoutingModule {}
