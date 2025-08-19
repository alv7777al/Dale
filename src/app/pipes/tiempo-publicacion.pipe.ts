import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tiempoPublicacion'
})
export class TiempoPublicacionPipe implements PipeTransform {


  transform(value: Date | string): string {
  if (!value) return '';

  const ahora = new Date();
  const fecha = new Date(value);

  // 🔹 Normalizamos para comparar solo año, mes y día
  const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
  const fechaPub = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());

  // Diferencia en días (redondeado por día, no por horas exactas)
  const diffDias = Math.floor((hoy.getTime() - fechaPub.getTime()) / (1000 * 60 * 60 * 24));
  const diffMeses = Math.floor(diffDias / 30);

  // Si fue el mismo día
  if (diffDias === 0) {
    const horas = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    return `Hoy ${horas}:${minutos}`;
  }

  // Si ya pasó al menos un día pero menos de un mes
  if (diffDias < 30) {
    return `${diffDias} ${diffDias === 1 ? 'día' : 'días'}`;
  }

  // Si ya pasó al menos un mes
  return `${diffMeses} ${diffMeses === 1 ? 'mes' : 'meses'}`;
}

  /*
 transform(value: Date | string): string {
    if (!value) return '';

    const ahora = new Date();
    const fecha = new Date(value);

    const diffMs = ahora.getTime() - fecha.getTime(); 
    const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24)); 
    const diffMeses = Math.floor(diffDias / 30); 

    // Si fue hoy
    if (diffDias === 0) {
      const horas = fecha.getHours().toString().padStart(2, '0');
      const minutos = fecha.getMinutes().toString().padStart(2, '0');
      return `Hoy ${horas}:${minutos}`;
    }

    // Si ya pasó más de un día pero menos de un mes
    if (diffDias < 30) {
      return `${diffDias} ${diffDias === 1 ? 'día' : 'días'}`;
    }

    // Si ya pasó más de un mes
    return `${diffMeses} ${diffMeses === 1 ? 'mes' : 'meses'}`;
  }*/

}
