import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';


@Component({
  selector: 'app-qr-generado',
  templateUrl: './qr-generado.page.html',
  styleUrls: ['./qr-generado.page.scss'],
})
export class QrGeneradoPage implements OnInit {

  constructor(private router: Router,private conexion:ConexionMBDService) { }

  ngOnInit() {
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
      this.getVisitaqr(this.data2._id)

      },
      (error)=>{
        console.log(error);
      }
    )
  }
  data2 ={ Correo:"",_id:""}
  data3 ={ Name:"",_id:"",Tipo:"",Date:"",Modelo:"",Placa:"",Uid:""} 
  Back(){
    this.router.navigate(['/op1',this.data2._id])
  }

  getVisitaqr(Uid:String){
    this.conexion.getOneVisita(Uid.toString()).subscribe(
      (data4)=>{
        this.data3=data4
      },(error)=>{
        console.log(error);
      }
    )
  }
  
}
