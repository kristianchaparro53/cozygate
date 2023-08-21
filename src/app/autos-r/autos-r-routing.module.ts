import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutosRPage } from './autos-r.page';

const routes: Routes = [
  {
    path: '',
    component: AutosRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutosRPageRoutingModule {}
