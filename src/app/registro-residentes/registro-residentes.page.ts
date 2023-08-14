import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';

@Component({
  selector: 'app-registro-residentes',
  templateUrl: './registro-residentes.page.html',
  styleUrls: ['./registro-residentes.page.scss'],
})
export class RegistroResidentesPage implements OnInit {

  constructor(private router: Router,private conexion:ConexionMBDService) { }

  ngOnInit() {
    
  }
  AddUser(){
    this.router.navigate(['/registro-residentes'])
  }
  Back(){
    this.router.navigate(['/lista-habit'])
  }
  getUsers(){
    this.conexion.getVisita().subscribe(data =>{
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

}
