import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ///COnfigurar ver y ocultar pass
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(private router: Router) { }

  ngOnInit() {
  }
   ///Función de Cambio a bienvenida
  goToTab2(){
    this.router.navigate(['/tabs/tab2'])
  }
  goToNewContra(){
    this.router.navigate(['/newcontra'])
  }
  goRegistroU(){
    this.router.navigate(['/registro-u'])
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
