import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
}
