import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  GotoGenerarV(){
    this.router.navigate(['/registro-visita'])
  }
  GotoQR(){
    this.router.navigate(['/qr-generado'])
  }
  GotoHist(){
    this.router.navigate(['/historial-residente'])
  }
  GotoQuejas(){
    this.router.navigate(['quejas'])
  }
}
