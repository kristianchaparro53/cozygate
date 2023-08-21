import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';
@Component({
  selector: 'app-quejas-r',
  templateUrl: './quejas-r.page.html',
  styleUrls: ['./quejas-r.page.scss'],
})
export class QuejasRPage implements OnInit {


  users: any =[]
  public results = [...this.users];

  constructor(private router: Router,private conexion:ConexionMBDService) { }

  ngOnInit() {
    this.conexion.getquejas().subscribe(data =>{
      this.users = data;
      this.results = [...this.users];
      console.log(data)
    })
  }

}
