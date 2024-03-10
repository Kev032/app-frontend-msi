import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit {

  public user: User = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }

  constructor(private userService: UserService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    const camposVacios = this.getCamposVacios();

    if (camposVacios.length > 0) {
      this.snack.open(
        `Los siguientes campos son requeridos: ${camposVacios.join(', ')}`,
        'Aceptar',
        { duration: 3000}
      );
      return;
    }

    if (!this.validateEmail(this.user.email)) {
      this.snack.open('El formato del email es inválido', 'Aceptar', { duration: 3000 });
      return;
    }

    if (this.user.telefono.length > 9) {
      this.snack.open('El teléfono no puede tener más de 9 dígitos', 'Aceptar', { duration: 3000 });
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success')
        this.redirigirLogin();
      },(error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
          duration : 3000
        });
      }
    )
  }

  redirigirLogin(){
    this.router.navigate(['/login']);
  }

  getCamposVacios(): string[] {
    const campos = ['username', 'password', 'nombre', 'apellido', 'email', 'telefono'];
    return campos.filter(campo => !this.user[campo as keyof User]); // Type assertion here
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
