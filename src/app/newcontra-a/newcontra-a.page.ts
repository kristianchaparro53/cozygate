import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcontra-a',
  templateUrl: './newcontra-a.page.html',
  styleUrls: ['./newcontra-a.page.scss'],
})
export class NewcontraAPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  //Función de Cambio a ISU
  goToLoginA(){
    this.router.navigate(['/login-ad'])
  }
}
