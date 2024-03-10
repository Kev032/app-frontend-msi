import { Component, OnInit } from '@angular/core';
import { Contribuyente } from '../../models/contribuyente';
import { ContribuyenteService } from '../../../services/contribuyente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-contribuyente',
  templateUrl: './actualizar-contribuyente.component.html',
  styleUrl: './actualizar-contribuyente.component.css'
})
export class ActualizarContribuyenteComponent implements OnInit{

  id:number
  contribuyente:Contribuyente = new Contribuyente();
  constructor(private contribuyenteService:ContribuyenteService, private router:Router, private route:ActivatedRoute, private snack:MatSnackBar){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contribuyenteService.obtenerContribuyentePorId(this.id).subscribe(dato =>{
      this.contribuyente = dato;
    },error => console.log(error));
  }

  redirigirListaContribuyentes(){
    this.router.navigate(['/contribuyentes']);
  }

  onSubmit() {
    this.contribuyenteService.actualizarContribuyente(this.id, this.contribuyente).subscribe(
      (dato) => {
        // Mostrar alerta de éxito con SweetAlert2
        Swal.fire({
          title: "¡Contribuyente actualizado correctamente!",
          text: "El contribuyente se ha actualizado con éxito.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Redirigir a la lista de contribuyentes
          this.redirigirListaContribuyentes();
        });
      },
      (error) => {
        // Manejar el error en caso de que la actualización falle
        console.error(error);
        this.snack.open('Error al actualizar el contribuyente', 'Aceptar', { duration: 3000 });
      }
    );
  }

}
