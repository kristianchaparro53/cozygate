import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router,private conexion:ConexionMBDService) {}


  ionViewDidEnter() {
    this.getUserByUID(this.getIDFromURL());
  }
  getIDFromURL(){
    let url = this.router.url
    let arr = url.split("/",4)
    let id = arr[3]
    return id    
    
  }


  getUserByUID (uid:String){
    this.conexion.getOne(uid.toString()).subscribe(
      (data)=>{
      this.data2=data;
      console.log(this.data2.Correo)
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  data2 ={ Correo:""}


  GotoGenerarV(){
    this.router.navigate(['/registro-visita'])
  }
  GotoQR(){
    this.router.navigate(['/qr-generado'])
  }
  GotoHist(){
    this.router.navigate(['/historial-residente'])
  }
  GotoQuejas(){
    this.router.navigate(['quejas'])
  }
}
