import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-visita',
  templateUrl: './registro-visita.page.html',
  styleUrls: ['./registro-visita.page.scss'],
})
export class RegistroVisitaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Back(){
    this.router.navigate(['/tabs/tab1'])
  }

}
