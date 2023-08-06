import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuejasPage } from './quejas.page';

const routes: Routes = [
  {
    path: '',
    component: QuejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuejasPageRoutingModule {}
