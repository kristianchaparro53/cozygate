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

  ionViewDidEnter() {
    this.getUserByUID(this.getIDFromURL());
  }
  getIDFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = arr[2]
    return id    
    
  }


  getUserByUID (uid:String){
    this.conexion.getOne(uid.toString()).subscribe(
      (data)=>{
      this.data2=data;
      console.log(this.data2._id)
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  data2 ={ Correo:"",_id:""}

  enviar(name:any,tipo:any,fecha:any,model:any,placa:any){

    let wenas=this.data2._id

    let Agregar= {Name:name.value,Tipo:tipo.value,Date:fecha.value,Modelo:model.value,Placa:placa.value,Uid:wenas}

    this.conexion.addVisita(Agregar).subscribe(data =>{
      console.log(data)
      //this.router.navigate(['/principal]'])

    })


    //this.router.navigate(['/qr-generado'])
  }
}
