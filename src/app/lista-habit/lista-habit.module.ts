import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaHabitPageRoutingModule } from './lista-habit-routing.module';

import { ListaHabitPage } from './lista-habit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaHabitPageRoutingModule
  ],
  declarations: [ListaHabitPage]
})
export class ListaHabitPageModule {}
