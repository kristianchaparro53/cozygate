import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-a',
  templateUrl: './registro-a.page.html',
  styleUrls: ['./registro-a.page.scss'],
})
export class RegistroAPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
   /*Función de Cambio a Login Admin*/
   goToSesionA(){
    this.router.navigate(['/login-ad'])
  }
  cancelarRA(){
    this.router.navigate(['/login-ad'])
  }
}
