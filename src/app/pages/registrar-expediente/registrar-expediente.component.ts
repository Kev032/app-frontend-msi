import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import Swal from 'sweetalert2';
import { Expediente } from '../../models/expediente';
import { ExpedienteService } from '../../../services/expediente.service';
import { AreaService } from '../../../services/area.service';
import { ContribuyenteService } from '../../../services/contribuyente.service';
import { Area } from '../../models/area';
import { Contribuyente } from '../../models/contribuyente';


@Component({
  selector: 'app-registrar-expediente',
  templateUrl: './registrar-expediente.component.html',
  styleUrl: './registrar-expediente.component.css'
})
export class RegistrarExpedienteComponent implements OnInit {

  expediente: Expediente = new Expediente();
  areas: Area[] = [];
  contribuyentes: Contribuyente[] = [];

  constructor(private areaService: AreaService, private contribuyenteService: ContribuyenteService, private expedienteService: ExpedienteService, private router: Router){}

  ngOnInit(): void {
    this.getAreas();
  this.getContribuyentes();
  }

  guardarExpediente(){
    this.expedienteService.createExpediente(this.expediente).subscribe(dato => {
      console.log(dato);
      this.redirigirListaExpedientes();
      Swal.fire({
        title: '¡Expediente guardado!',
        text: 'El expediente se ha registrado correctamente.',
        icon: 'success'
      });
    }, error => console.log(error));
  }

  redirigirListaExpedientes(){
    this.router.navigate(["/expedientes"])
  }

  onSubmit(){
    this.guardarExpediente()
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
