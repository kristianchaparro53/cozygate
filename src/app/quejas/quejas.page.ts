import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.page.html',
  styleUrls: ['./quejas.page.scss'],
})
export class QuejasPage implements OnInit {

  constructor(private router: Router,private conexion:ConexionMBDService,private alertController:AlertController) { }

  ngOnInit() {
  }

  


  async cancelar(){
    //this.router.navigate(['/op1',this.data2._id])

    
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
  
  
enviar(asunto:any,mensaje:any){

  let Agregar= {Correo:this.data2.Correo,Asunto:asunto.value,Mensaje:mensaje.value}

  this.conexion.addquejas(Agregar).subscribe(async data =>{
    console.log(data)

    const alert = await this.alertController.create({
      header: 'Registro de Usuario',
      message:'Gracias por quejarse',
      buttons: [
        {
          text: 'Aceptar',
          role: 'Aceptar',
        },
      ]
    });
    await alert.present();

  })
  asunto.value='', mensaje.value=''
    
  }
}
