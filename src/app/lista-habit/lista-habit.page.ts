import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionMBDService } from '../services/conexion-mbd.service';

@Component({
  selector: 'app-lista-habit',
  templateUrl: './lista-habit.page.html',
  styleUrls: ['./lista-habit.page.scss'],
})
export class ListaHabitPage  {

  users: any =[]
  public results = [...this.users];

  constructor(private router: Router,private conexion:ConexionMBDService) { }

  ngOnInit(){
    this.conexion.getUsers().subscribe(data =>{
      this.users = data;
      this.results = [...this.users];
      console.log(data)
    })

  }
  getUsers(){
    this.conexion.getUsers().subscribe(data =>{
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  GotoHist(){
    this.router.navigate(['/historial-admin'])
  }
}
