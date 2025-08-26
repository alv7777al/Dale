import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalle-producto-modal',
    loadChildren: () => import('./pages/detalle-producto-modal/detalle-producto-modal.module').then( m => m.DetalleProductoModalPageModule)
  },
  {
    path: 'perfil-usuario-modal',
    loadChildren: () => import('./pages/perfil-usuario-modal/perfil-usuario-modal.module').then( m => m.PerfilUsuarioModalPageModule)
  },
  {
    path: 'editar-articulo-modal',
    loadChildren: () => import('./pages/editar-articulo-modal/editar-articulo-modal.module').then( m => m.EditarArticuloModalPageModule)
  },
  //eliminar luego
  {
    path: 'alerts',
    loadChildren: () => import('./pages/alerts/alerts.module').then( m => m.AlertsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
