import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';
@Component({
  selector: 'app-autos-r',
  templateUrl: './autos-r.page.html',
  styleUrls: ['./autos-r.page.scss'],
})
export class AutosRPage implements OnInit {

  users: any =[]
  public results = [...this.users];
  constructor(private router: Router,private conexion:ConexionMBDService) { }

  ngOnInit() {
    this.conexion.getVehiculo().subscribe(data =>{
      this.users = data;
      this.results = [...this.users];
      console.log(data)
    })
  }

}
