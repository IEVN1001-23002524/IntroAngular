import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.html',
})
export class Usuario{
  usuario: string = ''
  contrasena: string = ''

  usuarioCorrecto: string = 'Laura'
  contrasenaCorrecta: string = 'prueba_123'

  mensaje: string = ''

  iniciarSesion(): void{

    if (this.usuario != this.usuarioCorrecto){

      this.mensaje = 'El nombre de usuario no es válido.'

    } else if (this.contrasena != this.contrasenaCorrecta){

      this.mensaje = 'La contraseña no es válida.'

    } else{

      this.mensaje = 'Bienvenido al sistema, ' + this.usuario + '.'

    }
  }
}
