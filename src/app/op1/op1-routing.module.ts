import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Op1Page } from './op1.page';

const routes: Routes = [
  {
    path: '',
    component: Op1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Op1PageRoutingModule {}
