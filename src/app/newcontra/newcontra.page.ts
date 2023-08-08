import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcontra',
  templateUrl: './newcontra.page.html',
  styleUrls: ['./newcontra.page.scss'],
})
export class NewcontraPage implements OnInit {

   ///COnfigurar ver y ocultar pass
   showPassword = false;
   passwordToggleIcon = 'eye';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  //Función de Cambio a ISU
  goToLoginU(){
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
