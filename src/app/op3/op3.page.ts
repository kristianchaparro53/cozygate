import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';



@Component({
  selector: 'app-op3',
  templateUrl: './op3.page.html',
  styleUrls: ['./op3.page.scss'],
})
export class Op3Page implements OnInit {

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
      console.log(this.data2.Correo)
      
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  
  data2 ={ Correo:"",Name:"", Cel:"",Casa:"",Calle:""}
  data3 ={ Name:"",_id:"",Correo:"",Calle:"",Casa:"",Cel:""} 

  getOne(data2:String){
    this.conexion.getOne(data2.toString()).subscribe(
      (data4)=>{
        this.data3=data4

      },(error)=>{
        console.log(error);
      }
      
    )
  }
  
  

  cerrarSesion(){
    this.router.navigate(['/principal'])
  }
  BackToTab1(){
    this.router.navigate(['/op1',this.data2.Correo])
  }
  BackToTab2(){
    this.router.navigate(['/op2',this.data2.Correo])
  }
  BackToTab3(){
    this.router.navigate(['/op3',this.data2.Correo])
  }

}
