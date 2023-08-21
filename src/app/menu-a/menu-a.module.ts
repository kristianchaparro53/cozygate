import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAPageRoutingModule } from './menu-a-routing.module';

import { MenuAPage } from './menu-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAPageRoutingModule
  ],
  declarations: [MenuAPage]
})
export class MenuAPageModule {}
