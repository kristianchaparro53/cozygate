import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';

@Component({
  selector: 'app-registro-a',
  templateUrl: './registro-a.page.html',
  styleUrls: ['./registro-a.page.scss'],
})
export class RegistroAPage implements OnInit {

   ///COnfigurar ver y ocultar pass
   showPassword = false;
   passwordToggleIcon = 'eye';

  constructor(private router: Router,private conexion:ConexionMBDService) { }

  ngOnInit() {
  }
   /*Función de Cambio a Login Admin*/
   goToSesionA(user:any,pass:any,Npass:any,){

    this.conexion.getOneAdmin(user.value).subscribe(data =>{
      console.log(data)

      if(pass.value == data.Password){
        console.log("si")

        this.conexion.updateAdmin(data.User,pass={Password:Npass.value}).subscribe(data =>{
          console.log(data)
        })
        
      }else{

        console.log("NO")
      }
        
      //this.router.navigate(['/principal]'])

    })
    //this.router.navigate(['/login-ad'])
  }
  cancelarRA(){
    this.router.navigate(['/login-ad'])
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
