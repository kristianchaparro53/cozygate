import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-habit',
  templateUrl: './lista-habit.page.html',
  styleUrls: ['./lista-habit.page.scss'],
})
export class ListaHabitPage  {

  constructor(private router: Router) { }

  GotoHist(){
    this.router.navigate(['/historial-admin'])
  }
}
