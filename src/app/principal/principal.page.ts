import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
   /*Función de Cambio para ISU*/
   goToUser(){
    this.router.navigate(['/login'])
  }

  /*Crear la función de Cambio ISA*/
  goToAdmin(){
    this.router.navigate(['/login-ad'])
  }
}
