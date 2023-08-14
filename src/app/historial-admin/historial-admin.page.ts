import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';

@Component({
  selector: 'app-historial-admin',
  templateUrl: './historial-admin.page.html',
  styleUrls: ['./historial-admin.page.scss'],
})
export class HistorialAdminPage implements OnInit {


  visita: any =[]
  public results = [...this.visita];
  constructor(private router: Router, private conexion: ConexionMBDService) { }

  ngOnInit() {
    this.conexion.getVisita().subscribe(data =>{
      this.visita = data;
      this.results = [...this.visita];
      console.log(data)
    })

  }
  logout(){
    this.router.navigate(['/login-ad'])
  }
  getUsers(){
    this.conexion.getVisita().subscribe(data =>{
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

}
