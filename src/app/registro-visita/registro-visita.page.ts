import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';

@Component({
  selector: 'app-registro-visita',
  templateUrl: './registro-visita.page.html',
  styleUrls: ['./registro-visita.page.scss'],
})
export class RegistroVisitaPage implements OnInit {

  constructor(private router: Router,private conexion:ConexionMBDService) { }

  ngOnInit() {
  }
  cancelarV(){
    this.router.navigate(['/tabs/tab1'])
  }

  enviar(name:any,tipo:any,fecha:any,model:any,placa:any){
    let Agregar= {Name:name.value,Tipo:tipo.value,Date:fecha.value,Modelo:model.value,Placa:placa.value}

    this.conexion.addVisita(Agregar).subscribe(data =>{
      console.log(data)
      //this.router.navigate(['/principal]'])

    })


    //this.router.navigate(['/qr-generado'])
  }
}
