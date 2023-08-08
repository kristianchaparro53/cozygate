import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ad',
  templateUrl: './login-ad.page.html',
  styleUrls: ['./login-ad.page.scss'],
})
export class LoginAdPage implements OnInit {

  ///COnfigurar ver y ocultar pass
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ///Función de Cambio a bienvenida
  goToLista(){
    this.router.navigate(['/lista-habit'])
  }
  goToNContraA(){
    this.router.navigate(['/newcontra-a'])
  }
  goToRegistroA(){
    this.router.navigate(['/registro-a'])
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
