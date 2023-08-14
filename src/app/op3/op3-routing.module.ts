import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Op3Page } from './op3.page';

const routes: Routes = [
  {
    path: '',
    component: Op3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Op3PageRoutingModule {}
