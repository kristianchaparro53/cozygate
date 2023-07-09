import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-generado',
  templateUrl: './qr-generado.page.html',
  styleUrls: ['./qr-generado.page.scss'],
})
export class QrGeneradoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Back(){
    this.router.navigate(['/tabs/tab1'])
  }

}
