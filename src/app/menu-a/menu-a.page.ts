import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-a',
  templateUrl: './menu-a.page.html',
  styleUrls: ['./menu-a.page.scss'],
})
export class MenuAPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GotoHist(){
    this.router.navigate(['/autos-r'])
  }
  GotoGenerarV(){
    this.router.navigate(['/lista-habit'])
  }
  GotoQR(){
    this.router.navigate(['/historial-admin'])
  }
  GotoQuejas(){
    this.router.navigate(['/quejas-r'])
  }
  back(){
    this.router.navigate(['/login-ad'])
  }
}
