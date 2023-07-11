import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-residentes',
  templateUrl: './registro-residentes.page.html',
  styleUrls: ['./registro-residentes.page.scss'],
})
export class RegistroResidentesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  AddUser(){
    this.router.navigate(['/registro-residentes'])
  }
  Back(){
    this.router.navigate(['/lista-habit'])
  }

}
