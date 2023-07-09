import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcontraPage } from './newcontra.page';

const routes: Routes = [
  {
    path: '',
    component: NewcontraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcontraPageRoutingModule {}
