import { Contribuyente } from './../../models/contribuyente';
import { Component, OnInit } from '@angular/core';
import { Expediente } from '../../models/expediente';
import { ExpedienteService } from '../../../services/expediente.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrl: './expediente.component.css'
})
export class ExpedienteComponent implements OnInit {
  expedientes: Expediente[] = [];
  newExpediente: Expediente = {} as Expediente; // Initialize empty object

  constructor(private expedienteService: ExpedienteService, private router:Router) { }

  ngOnInit() {
    this.getExpedientes();
  }

  actualizarExpediente(id:number){
    this.router.navigate(['actualizar-expediente',id]);
  }

  registrarExpediente(){
    this.router.navigate(['registrar-expediente'])
  }

  getExpedientes() {
    this.expedienteService.getAllExpedientes().subscribe(dato => {
      this.expedientes = dato
    })
  }

  eliminarContribuyente(id:number){
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Confirma si deseas eliminar el Expediente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: 'No, cancelar',

    }).then((result) => {
      if (result.isConfirmed) {
        this.expedienteService.deleteExpediente(id).subscribe(dato => {
          console.log(dato);
          this.getExpedientes();
        })
        Swal.fire({
          title: "Contribuyente eliminado",
          text: "El Expediente ha sido eliminado con éxito",
          icon: "success"
        });
      }
    });
  }

  exportarExcel(): void {
    const fechaActual = new Date();
    const nombreArchivo = `expediente_${fechaActual.getFullYear()}-${fechaActual.getMonth() + 1}-${fechaActual.getDate()}_${fechaActual.getHours()}-${fechaActual.getMinutes()}-${fechaActual.getSeconds()}.xlsx`;

    const data = this.expedientes.map((expediente) => ({
      'Id Expediente': expediente.idExpediente,
      'Asunto': expediente.asunto,
      'Area': expediente.area.nombreArea,
      'Contribuyente': expediente.contribuyente.nombre,
      'Costo': this.formatCurrency(expediente.costo),
    }));

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Expedientes');

    XLSX.writeFile(wb, nombreArchivo);
  }

  formatCurrency(value: number): string {
    return `S/. ${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }

}
