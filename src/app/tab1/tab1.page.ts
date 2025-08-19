import { Component } from '@angular/core';
import { DetalleProductoModalPage } from '../pages/detalle-producto-modal/detalle-producto-modal.page';
import { ModalController } from '@ionic/angular';
import { Articulo } from '../_model/producto';

import { listaProductos, usuario1 } from 'src/app/_model/mock-data';
import { Usuario } from '../_model/usuario';
import { PerfilUsuarioModalPage } from '../pages/perfil-usuario-modal/perfil-usuario-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  ciudades: string[] = [
    'Cochabamba', 'La Paz', 'Santa Cruz', 'Oruro', 'Potosí', 'Chuquisaca', 'Tarija', 'Beni', 'Pando'
  ];


  ciudadSeleccionada: string = 'Cochabamba';
  categoriaSeleccionada = 'Todos';
  categorias = ['Todos', 'Electrónica', 'Hogar', 'Ropa', 'Vehículos', 'Otros'];
  
  searchTerm = '';


  // Lista de productos importados desde mock-data.ts
  productos : Articulo[] = listaProductos;
  //usuario desde mock-data.ts
  usuario : Usuario = usuario1;

  constructor(private modalCtrl: ModalController){
    this.listarProductos();
  }


  listarProductos() {
    return this.productos;
  }

  get filteredPosts() {
    return this.productos.filter(post => {
      const matchesCategory =
        this.categoriaSeleccionada === 'Todos' || post.categoria === this.categoriaSeleccionada;
      const matchesSearch =
        post.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.usuario.nombre.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  setCategory(cat: string) {
    this.categoriaSeleccionada = cat;
  }


  async abrirProducto(post: Articulo) {
    // Lógica para abrir el modal de detalle del producto
    console.log('Abrir producto:', post);
    const modal = await this.modalCtrl.create({
    component: DetalleProductoModalPage,
    componentProps:  {
       producto : post
    }
  });

  await modal.present();
  }


  async irAMiPerfil() {
  console.log('Ir a mi perfil', usuario1);
  const modal= await this.modalCtrl.create({
    component: PerfilUsuarioModalPage,
    componentProps: {
      usuario: usuario1
    }
  });
  await modal.present();
}

doRefresh(event: any) {
  console.log('Iniciando refresco...');

  // Aquí actualizas tu lista de posts
  this.listarProductos();

  // Simulamos un delay (ej: llamada a backend/Firebase)
  setTimeout(() => {
    console.log('Refresco terminado');
    event.target.complete(); // importante para que se cierre el spinner
  }, 1000);
}


}
