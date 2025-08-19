import { Categoria } from "./categoria";
import { Ciudad } from "./ciudad";
import { Articulo } from "./producto";
import { Usuario } from "./usuario";


export const usuario1: Usuario = {
  nombre: 'Juan',
  apellido: 'Pérez',
  fotoPerfil: 'https://i.pravatar.cc/150?img=7',
  celular: '70000000',
  ciudad: 'La Paz'
};

export const usuario2: Usuario = {
  nombre: 'Ana',
  apellido: 'Gómez',
  fotoPerfil: 'https://i.pravatar.cc/150?img=5',
  celular: '60000000',
  ciudad: 'Cochabamba'
};

export const usuario3: Usuario = {
  nombre: 'Carlos',
  apellido: 'López',
  fotoPerfil: 'https://i.pravatar.cc/150?img=7',
  celular: '80000000',
  ciudad: 'Santa Cruz'
};

export const usuario4: Usuario = {
  nombre: 'Jhoseline',
  apellido: 'Martinez',
  fotoPerfil: 'https://i.pravatar.cc/150?img=9',
  celular: '60000000',
  ciudad: 'Cochabamba'
};

export const usuario5: Usuario = {
  nombre: 'Ricardo',
  apellido: 'Zambrana',
  fotoPerfil: 'https://i.pravatar.cc/150?img=3',
  celular: '80000000',
  ciudad: 'Santa Cruz'
};

//ciudades
export const cochabamba : Ciudad= {
  nombre : 'Cochabamba'
}
export const laPaz : Ciudad= {
  nombre : 'La Paz'
}
export const santacruz : Ciudad= {
  nombre : 'Santacruz'
}


// categorias
export const categorias: Categoria[] = [
  { nombre: 'Todos' },
  { nombre: 'Electrónica' },
  { nombre: 'Hogar' },
  { nombre: 'Ropa' },
  { nombre: 'Vehículos' },
  { nombre: 'Otros' }
];


export const listaProductos: Articulo[] = [
  {
    usuario: usuario1,
    fechaPublicacion: new Date(2025, 7, 12, 14, 30), // 12 de Agosto 2025 14:30
    categoria: 'Electrónica',
    descripcion: 'Celular Samsung Galaxy S21, 128GB, como nuevo. Incluye cargador y funda. Esta todo nuevo sin rayones ni golpes. Entregas en cualquier parte del departamento ofertado. El dispositivo se encuentra en condiciones optimas no tiene mucho tiempo de uso',
    precio: 1200,
    imagenesProducto: [
      'assets/images/products/celular.png',
      'assets/images/products/celular2.png'
    ],
    vendido: false,
    ciudades : [cochabamba, laPaz, santacruz]
  },
  {
    usuario: usuario2,
    fechaPublicacion: new Date(2025, 7, 16, 10, 30), // 16 de Agosto 2025 10:30
    categoria: 'Hogar',
    descripcion: 'Mesa de madera con vidrio.',
    precio: 800,
    imagenesProducto: [
      'assets/images/products/mesa.png'
    ],
    vendido: false,
    ciudades : [laPaz]
  },
  {
    usuario: usuario3,
    fechaPublicacion: new Date(2025, 6, 28, 14, 30), // 28 de Julio 2025 14:30
    categoria: 'Ropa',
    descripcion: 'Camisa de hombre, talla M, nueva con etiqueta. Ideal para ocasiones formales e informales. El color de la camisa es negro. Entregas en cualquier parte del deparmanto ofertado',
    precio: 300,
    imagenesProducto: [
      'assets/images/products/camisa.png'
    ],
    vendido: false,
    ciudades : [santacruz]
  },
  {
    usuario: usuario4,
    fechaPublicacion: new Date(2025, 7, 18, 14, 30), // 18 de Agosto 2025 14:30
    categoria: 'Electrónica',
    descripcion: 'Laptop en excelente estado.',
    precio: 2500,
    imagenesProducto: [
      'assets/images/products/laptop.png',
      'assets/images/products/laptop2.png'
    ],
    vendido: false,
    ciudades : [laPaz, cochabamba]
  },
  {
    usuario: usuario5,
    fechaPublicacion: new Date(2025, 6, 12, 14, 30), // 12 de Julio 2025 14:30
    categoria: 'Hogar',
    descripcion: 'Sofá en buen estado.',
    precio: 1500,
    imagenesProducto: [
      'assets/images/products/sillon.png'
    ],
    vendido: false,
    ciudades : [laPaz, santacruz]
  }
];