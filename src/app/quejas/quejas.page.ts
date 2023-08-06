import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.page.html',
  styleUrls: ['./quejas.page.scss'],
})
export class QuejasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enviar(){
    this.router.navigate(['/tabs/tab1'])
  }
  cancelar(){
    this.router.navigate(['/tabs/tab1'])
  }
}
