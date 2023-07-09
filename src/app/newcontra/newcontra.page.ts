import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcontra',
  templateUrl: './newcontra.page.html',
  styleUrls: ['./newcontra.page.scss'],
})
export class NewcontraPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  //Función de Cambio a ISU
  goToLoginU(){
    this.router.navigate(['/login'])
  }
}
