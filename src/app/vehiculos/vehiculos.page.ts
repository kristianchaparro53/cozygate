import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.page.html',
  styleUrls: ['./vehiculos.page.scss'],
})
export class VehiculosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Back(){
    this.router.navigate(['/tabs/tab2'])
  }

}
