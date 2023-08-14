import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConexionMBDService } from '../services/conexion-mbd.service';

@Component({
  selector: 'app-op2',
  templateUrl: './op2.page.html',
  styleUrls: ['./op2.page.scss'],
})
export class Op2Page implements OnInit {

  constructor(private router: Router,private conexion:ConexionMBDService) {}
  ngOnInit() {
  }


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

  VehiculoMod(){
    this.router.navigate(['/VehiculoMod'])
  }
  BackToTab1(){
    this.router.navigate(['/op1',this.data2.Correo])
  }
  BackToTab2(){
    this.router.navigate(['/tabs/tab2',this.data2.Correo])
  }
  BackToTab3(){
    this.router.navigate(['/op3',this.data2.Correo])
  }
  vehiculos(){
    this.router.navigate(['/vehiculos'])
  }

}
