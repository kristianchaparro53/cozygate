import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Op2Page } from './op2.page';

const routes: Routes = [
  {
    path: '',
    component: Op2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Op2PageRoutingModule {}
