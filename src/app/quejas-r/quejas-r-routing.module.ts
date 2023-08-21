import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuejasRPage } from './quejas-r.page';

const routes: Routes = [
  {
    path: '',
    component: QuejasRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuejasRPageRoutingModule {}
