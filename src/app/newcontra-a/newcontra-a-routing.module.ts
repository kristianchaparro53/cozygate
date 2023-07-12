import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcontraAPage } from './newcontra-a.page';

const routes: Routes = [
  {
    path: '',
    component: NewcontraAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcontraAPageRoutingModule {}
