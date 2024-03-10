import { NavbarComponent } from './../../components/navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SesionService } from '../../../services/sesion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  };


  constructor(private sesionService: SesionService,private snack: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if (!this.loginData.username.trim() || !this.loginData.password.trim()) {
      this.snack.open('El nombre de usuario y la contraseña son requeridos', 'Aceptar', { duration: 3000 });
      return;
    }

    this.loginService.iniciarSesion(this.loginData.username, this.loginData.password).subscribe(
      (response) => {
        // Manejar la respuesta del backend después de iniciar sesión correctamente
        console.log(response);
        this.sesionService.setIsLoggedIn(true);
        // Mostrar alerta de éxito con SweetAlert2
        Swal.fire({
          title: "¡Sesión iniciada correctamente!",
          text: "Bienvenido al sistema.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Redirigir a la página de dashboard u otra según tu aplicación
          this.router.navigate(['/home']);
        });
      },
      (error) => {
        // Manejar el error en caso de que el inicio de sesión falle
        console.error(error);
        this.snack.open('Credenciales inválidas', 'Aceptar', { duration: 3000 });
      }
    );
  }
}
