import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAPage } from './menu-a.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAPageRoutingModule {}
