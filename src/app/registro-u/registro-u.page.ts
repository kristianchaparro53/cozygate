import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.page.html',
  styleUrls: ['./registro-u.page.scss'],
})
export class RegistroUPage {

  constructor(private router: Router,private conexion:ConexionMBDService,private alertController:AlertController) { }
 ///COnfigurar ver y ocultar pass
 showPassword = false;
 passwordToggleIcon = 'eye';

   /*Función de Cambio a Login User*/
   goToSesionU(name:any,correo:any,pass:any,cel:any,casa:any,calle:any){

    let Agregar= {Name:name.value,Correo:correo.value,Password:pass.value, Cel:cel.value, Casa:casa.value,Calle:calle.value}

  
    this.conexion.addUser(Agregar).subscribe(async data =>{
      console.log(data)
      const alert = await this.alertController.create({
        header: 'Registro de Usuario',
        message: 'Registro Exitoso!!! ',
        buttons: [
          {
            text: 'Aceptar',
            role: 'Aceptar',
            
          },
        ]
        
      });
      await alert.present();
      window.location.href = '/login';
    }) 
  }
  cancelarRU(){
    this.router.navigate(['/login'])
  }

  //Ojo Password
  togglePassword():void{
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
  }
}
