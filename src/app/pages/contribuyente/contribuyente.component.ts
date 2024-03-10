  import { Component, OnInit, ViewEncapsulation } from '@angular/core';
  import { ContribuyenteService } from '../../../services/contribuyente.service';
  import { Contribuyente } from '../../models/contribuyente';
  import { Router } from '@angular/router';
  import Swal from 'sweetalert2';
  import * as XLSX from 'xlsx';

  @Component({
    selector: 'app-contribuyente',
    templateUrl: './contribuyente.component.html',
    styleUrls: ['./contribuyente.component.css'],
    encapsulation: ViewEncapsulation.Emulated // o ShadowDom
  })
  export class ContribuyenteComponent implements OnInit {

    contribuyentes: Contribuyente[];

    constructor(private contribuyenteService:ContribuyenteService,private router:Router) {}

    ngOnInit(): void {
      this.obtenerContribuyente();
    }

    actualizarContribuyente(id:number){
      this.router.navigate(['actualizar-contribuyente',id]);
    }

    registrarContribuyente(){
      this.router.navigate(['registrar-contribuyente'])
    }

    private obtenerContribuyente(){
      this.contribuyenteService.obtenerListadoContribuyentes().subscribe(dato => {
        this.contribuyentes = dato;
      })
    }

    eliminarContribuyente(id:number){
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Confirma si deseas eliminar al Contribuyente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: 'No, cancelar',

      }).then((result) => {
        if (result.isConfirmed) {
          this.contribuyenteService.eliminarContribuyente(id).subscribe(dato => {
            console.log(dato);
            this.obtenerContribuyente();
          })
          Swal.fire({
            title: "Contribuyente eliminado",
            text: "El contribuyente ha sido eliminado con éxito",
            icon: "success"
          });
        }
      });
    }

    exportarExcel(): void {
      const fechaActual = new Date();
    const nombreArchivo = `contribuyente_${fechaActual.getFullYear()}-${fechaActual.getMonth() + 1}-${fechaActual.getDate()}_${fechaActual.getHours()}-${fechaActual.getMinutes()}-${fechaActual.getSeconds()}.xlsx`;
      const data = this.contribuyentes.map((contribuyente) => ({
        'Id Contribuyente': contribuyente.idContribuyente,
        'Nombres': contribuyente.nombre,
        'Dirección': contribuyente.direccion,
        'E-mail': contribuyente.email,
        'Teléfono': contribuyente.telefono,
      }));

      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Contribuyente');

    XLSX.writeFile(wb, nombreArchivo);
    }

  }
