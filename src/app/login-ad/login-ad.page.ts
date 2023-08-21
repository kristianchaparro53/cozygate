import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-ad',
  templateUrl: './login-ad.page.html',
  styleUrls: ['./login-ad.page.scss'],
})
export class LoginAdPage implements OnInit {

  ///COnfigurar ver y ocultar pass
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(private router: Router,private conexion:ConexionMBDService,private alertController:AlertController) { }

  ngOnInit() {
  }
  ///Función de Cambio a bienvenida
  
  goToNContraA(){
    this.router.navigate(['/newcontra-a'])
  }
  goToRegistroA(){
    this.router.navigate(['/registro-a'])
  }

  goToLista(correo:any,pass:any){
    this.conexion.getOneAdmin(correo.value).subscribe(async data =>{
      console.log(data)

        if(pass.value == data.Password){
          console.log("si")
        this.router.navigate(['menu-a'])

        }else{
          const alert = await this.alertController.create({
            header: 'Registro de Usuario',
            message: 'Correo y/o Contraseña Incorrecta ',
            buttons: [
              {
                text: 'Aceptar',
                role: 'Aceptar',
              },
            ]
          });
          await alert.present();
          console.log("NO")
        }
      //this.router.navigate(['/principal]'])

    })

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
