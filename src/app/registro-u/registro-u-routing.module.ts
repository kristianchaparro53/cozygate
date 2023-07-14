import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUPage } from './registro-u.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUPageRoutingModule {}
