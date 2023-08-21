import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';
import { ModuleTeardownOptions } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  constructor(private router: Router,private conexion:ConexionMBDService,private alertController:AlertController) { }

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
  Back(){
    this.router.navigate(['/op2/:correo'])
    
  }

  RegistrarV(modelo:any,ano:any,color:any,placa:any){

    let Agregar= {Modelo:modelo.value,Correo:this.data2.Name, Placas:placa.value, Color:color.value,}

  
    this.conexion.addVehiculo(Agregar).subscribe(async data =>{
      console.log(data)
      const alert = await this.alertController.create({
        header: '',
        message: 'Vehiculo registrado !!! ',
        buttons: [
          {
            text: 'Aceptar',
            role: 'Aceptar',
            
          },
        ]
        
      });
      await alert.present();
      //window.location.href = '/';
      //this.router.navigate(['/principal]'])

    })

    modelo.value='',placa.value='',color.value='',ano.value=''
    
  }

 


}
