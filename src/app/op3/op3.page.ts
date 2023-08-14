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
  data2 ={ Correo:""}
  
  

  cerrarSesion(){
    this.router.navigate(['/principal'])
  }

}
