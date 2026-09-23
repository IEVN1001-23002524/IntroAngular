import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas{
  num1: string = ''
  num2: string = ''
  figuraSeleccionada: string = ''
  resultado: number = 0

  circulo(): void{
    this.resultado = Math.PI * Math.pow(parseFloat(this.num1), 2)
  }

  rectangulo(): void{
    this.resultado = parseFloat(this.num1) * parseFloat(this.num2)
  }

  triangulo(): void{
    this.resultado = (parseFloat(this.num1) * parseFloat(this.num2)) / 2
  }

  pentagono(): void{
    this.resultado = (5 * parseFloat(this.num1) * parseFloat(this.num2)) / 2
  }

  calcular(): void{

    switch (this.figuraSeleccionada){

      case 'circulo':
        this.circulo()
        break

      case 'rectangulo':
        this.rectangulo()
        break

      case 'triangulo':
        this.triangulo()
        break

      case 'pentagono':
        this.pentagono()
        break
    }

  }
}
