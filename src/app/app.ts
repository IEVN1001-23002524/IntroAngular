import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  title = "Danae"

  duplicaNumero(n1:number):number{
    return n1*2
  }

  pelicula={
    titulo:'Spider Man',
    fechaLanzamiento: 2004,
    precio: 1234
  }
}
