import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-residente',
  templateUrl: './historial-residente.page.html',
  styleUrls: ['./historial-residente.page.scss'],
})
export class HistorialResidentePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Back(){
    this.router.navigate(['/tabs/tab1'])
  }
}
