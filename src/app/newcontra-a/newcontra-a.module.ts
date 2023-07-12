import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcontraAPageRoutingModule } from './newcontra-a-routing.module';

import { NewcontraAPage } from './newcontra-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcontraAPageRoutingModule
  ],
  declarations: [NewcontraAPage]
})
export class NewcontraAPageModule {}
