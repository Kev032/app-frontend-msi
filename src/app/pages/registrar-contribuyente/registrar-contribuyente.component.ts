import { Component, OnInit } from '@angular/core';
import { Contribuyente } from '../../models/contribuyente';
import { ContribuyenteService } from '../../../services/contribuyente.service';
import { Router} from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-contribuyente',
  templateUrl: './registrar-contribuyente.component.html',
  styleUrl: './registrar-contribuyente.component.css'
})
export class RegistrarContribuyenteComponent implements OnInit {

  contribuyente: Contribuyente = new Contribuyente();

  constructor(private contribuyenteService: ContribuyenteService,private router:Router){}

  ngOnInit(): void {
  }

  guardarContribuyente(){
    this.contribuyenteService.registrarContribuyente(this.contribuyente).subscribe(dato => {
      console.log(dato);
      this.redirigirListaContribuyentes();

      // Mostrar alerta de éxito con SweetAlert
      Swal.fire({
        title: '¡Contribuyente guardado!',
        text: 'El contribuyente se ha registrado correctamente.',
        icon: 'success'
      });
    }, error => console.log(error));
  }

  redirigirListaContribuyentes(){
    this.router.navigate(['/contribuyentes']);
  }

  onSubmit(){
    this.guardarContribuyente()
  }

}
