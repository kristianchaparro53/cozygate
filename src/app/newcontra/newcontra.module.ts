import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcontraPageRoutingModule } from './newcontra-routing.module';

import { NewcontraPage } from './newcontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcontraPageRoutingModule
  ],
  declarations: [NewcontraPage]
})
export class NewcontraPageModule {}
