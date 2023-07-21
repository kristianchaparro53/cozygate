import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialAdminPageRoutingModule } from './historial-admin-routing.module';

import { HistorialAdminPage } from './historial-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialAdminPageRoutingModule
  ],
  declarations: [HistorialAdminPage]
})
export class HistorialAdminPageModule {}
