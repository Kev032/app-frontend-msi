import { Component, OnInit } from '@angular/core';
import { Expediente } from '../../models/expediente';
import { ExpedienteService } from '../../../services/expediente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { error } from 'console';
import { Area } from '../../models/area';
import { AreaService } from '../../../services/area.service';
import { ContribuyenteService } from '../../../services/contribuyente.service';
import { Contribuyente } from '../../models/contribuyente';

@Component({
  selector: 'app-actualizar-expediente',
  templateUrl: './actualizar-expediente.component.html',
  styleUrl: './actualizar-expediente.component.css'
})
export class ActualizarExpedienteComponent implements OnInit{

  id:number
  expediente:Expediente = new Expediente();
  contribuyentes: Contribuyente[] = [];
  areas: Area[] = [];

  constructor(private areaService: AreaService, private contribuyenteService: ContribuyenteService, private expedienteService:ExpedienteService, private router: Router, private route: ActivatedRoute, private snack: MatSnackBar){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.expedienteService.getExpedienteById(this.id).subscribe(dato => {
      this.expediente = dato;
    },error => console.log(error));
  }

  redirigirListaContribuyentes(){
    this.router.navigate(['/expedientes']);
  }

  onSubmit() {
    this.expedienteService.updateExpediente(this.id,this.expediente).subscribe(
      (dato) => {
        // Mostrar alerta de éxito con SweetAlert2
        Swal.fire({
          title: "Expediente actualizado correctamente!",
          text: "El expediente se ha actualizado con éxito.",
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
        this.snack.open('Error al actualizar el expediente', 'Aceptar', { duration: 3000 });
      }
    );
  }

  getAreas(): void {
    this.areaService.getAllAreas().subscribe(dato =>{
      this.areas = dato
    })
  }

  getContribuyentes(): void {
    this.contribuyenteService.obtenerListadoContribuyentes().subscribe(dato => {
      this.contribuyentes = dato
    })
  }

}
