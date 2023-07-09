import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ad',
  templateUrl: './login-ad.page.html',
  styleUrls: ['./login-ad.page.scss'],
})
export class LoginAdPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ///Función de Cambio a bienvenida
  goToLista(){
    this.router.navigate(['/lista-habit'])
  }
  goToNContraA(){
    this.router.navigate(['/newcontra'])
  }
}
