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
      this.getVisitaqr(data._id)
        console.log(data._id)
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

  /*los datos devueltos por el servidor se capturan en el parámetro data4. Luego, estos datos se asignan al objeto data3.*/ 

  getVisitaqr(Uid:String){
    this.conexion.getOneVisitaQR(Uid.toString()).subscribe(
      (data4:any[])=>{
        this.data3=data4[0]
        console.log(data4)
      },(error)=>{
        console.log(error);
      }
    )
  }
  
}
