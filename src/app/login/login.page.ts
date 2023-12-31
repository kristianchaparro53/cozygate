import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ///COnfigurar ver y ocultar pass
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(private router: Router,private conexion:ConexionMBDService,private alertController:AlertController) { }

  ngOnInit() {
  }
  

   /// Validacion del inicio de sesion

    // Atra vez del metodo get verifica si lo que almacena la variable correo
    // se encuentra en la coleccion, una vez el correo encontrado, verifica si la contrasena
    // que se a introducido se encuentra en la misma coleccion
  goToTab2(correo:any,pass:any){
    this.conexion.getOne(correo.value).subscribe( async data =>{
      console.log(data)

        if(pass.value == data.Password){
          console.log("si")
        this.router.navigate(['op2',correo.value])

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

  
  goToNewContra(){
    this.router.navigate(['/newcontra'])
  }
  goRegistroU(){
    this.router.navigate(['/registro-u'])
  }

  //Visualizar la contrasena 
  togglePassword():void{
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }else{
      this.passwordToggleIcon = 'eye';
    }
  }
}
