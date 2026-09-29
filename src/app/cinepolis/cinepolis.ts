import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  styleUrls: ['./cinepolis.css'],
  templateUrl: './cinepolis.html',
})
export class Cinepolis{
  nombre: string = ''
  cantidad: string = ''
  tarjeta: string = ''
  boletos: string = ''
  valor: number = 0

  procesar(): void{
    if (parseInt(this.boletos)> parseInt(this.cantidad) * 7){
      alert('El máximo de boletos por persona es 7. La boleta cuesta $12.00, pero puedes obtener descuento de 15% si compras más de 5 boletas, si compras de 3 a 5 obtienes descuento del 10%, si compras menos de 3 no obtienes descuento. Si la compra será pagada utilizando tarjeta CINECO, tendrán derecho a un 10% del valor a pagar, como descuento adicional a los descuentos ya obtenidos.');
      return;
    }

    this.valor = parseInt(this.boletos) * 12;

    if (parseInt(this.boletos) > 5){
      this.valor = this.valor * 0.85;
    }
    else if (parseInt(this.boletos) >= 3){
      this.valor = this.valor * 0.90;
    }

    if (this.tarjeta == 'si'){
      this.valor = this.valor * 0.90;
    }
  }

  salir(): void{
    this.nombre = '';
    this.cantidad = '';
    this.tarjeta = 'no';
    this.boletos = '';
    this.valor = 0;
  }
}
