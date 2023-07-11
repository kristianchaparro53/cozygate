import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-habit',
  templateUrl: './lista-habit.page.html',
  styleUrls: ['./lista-habit.page.scss'],
})
export class ListaHabitPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Agregar(){
    this.router.navigate(['/lista-hab'])
  }
  AddUser(){
    this.router.navigate(['/registro-residentes'])
  }
  Back(){
    this.router.navigate(['/principal'])
  }
}
