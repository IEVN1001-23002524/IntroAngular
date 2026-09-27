import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})

export class Palindromo {

  frase: string = '';
  vocales: string = '';
  consonantes: string = '';
  cantidadVocales: number = 0;
  cantidadConsonantes: number = 0;
  resultado: string = '';

  procesar(): void {

    this.vocales = '';
    this.consonantes = '';
    this.cantidadVocales = 0;
    this.cantidadConsonantes = 0;

    let fraseLimpia = '';

    for (let letra of this.frase) {

      if (letra != ' ') {

        if (letra == 'A') letra = 'a';
        if (letra == 'B') letra = 'b';
        if (letra == 'C') letra = 'c';
        if (letra == 'D') letra = 'd';
        if (letra == 'E') letra = 'e';
        if (letra == 'F') letra = 'f';
        if (letra == 'G') letra = 'g';
        if (letra == 'H') letra = 'h';
        if (letra == 'I') letra = 'i';
        if (letra == 'J') letra = 'j';
        if (letra == 'K') letra = 'k';
        if (letra == 'L') letra = 'l';
        if (letra == 'M') letra = 'm';
        if (letra == 'N') letra = 'n';
        if (letra == 'O') letra = 'o';
        if (letra == 'P') letra = 'p';
        if (letra == 'Q') letra = 'q';
        if (letra == 'R') letra = 'r';
        if (letra == 'S') letra = 's';
        if (letra == 'T') letra = 't';
        if (letra == 'U') letra = 'u';
        if (letra == 'V') letra = 'v';
        if (letra == 'W') letra = 'w';
        if (letra == 'X') letra = 'x';
        if (letra == 'Y') letra = 'y';
        if (letra == 'Z') letra = 'z';

        fraseLimpia = fraseLimpia + letra;

        if (letra == 'a' || letra == 'e' || letra == 'i' ||
            letra == 'o' || letra == 'u') {

          this.vocales = this.vocales + letra;
          this.cantidadVocales++;

        }
        else {

          this.consonantes = this.consonantes + letra;
          this.cantidadConsonantes++;

        }
      }
    }

    let invertida = '';

    for (let letra of fraseLimpia) {
      invertida = letra + invertida;
    }

    if (fraseLimpia == invertida) {
      this.resultado = 'Es palíndromo';
    }
    else {
      this.resultado = 'No es palíndromo';
    }
  }
}