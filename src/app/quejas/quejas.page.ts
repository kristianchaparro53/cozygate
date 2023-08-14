import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.page.html',
  styleUrls: ['./quejas.page.scss'],
})
export class QuejasPage implements OnInit {

  constructor(private router: Router,private conexion:ConexionMBDService) { }

  ngOnInit() {
  }

  enviar(){
    this.router.navigate(['/tabs/tab1'])
  }
  cancelar(){
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
}
