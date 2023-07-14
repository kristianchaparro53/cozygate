import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-u',
  templateUrl: './registro-u.page.html',
  styleUrls: ['./registro-u.page.scss'],
})
export class RegistroUPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
   /*Función de Cambio a Login User*/
   goToSesionA(){
    this.router.navigate(['/login-ad'])
  }
  cancelarRA(){
    this.router.navigate(['/login'])
  }
}
