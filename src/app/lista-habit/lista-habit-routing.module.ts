import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaHabitPage } from './lista-habit.page';

const routes: Routes = [
  {
    path: '',
    component: ListaHabitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaHabitPageRoutingModule {}
