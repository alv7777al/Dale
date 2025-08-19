import { Ciudad } from "./ciudad";
import { Usuario } from "./usuario";

export interface Articulo {
  usuario: Usuario;
  fechaPublicacion: Date;
  categoria: string;
  descripcion: string;
  precio: number;
  imagenesProducto: string[];
  vendido: boolean;
  ciudades: Ciudad[];
}