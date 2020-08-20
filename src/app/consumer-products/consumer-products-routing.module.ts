import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumerProductsPage } from './consumer-products.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumerProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumerProductsPageRoutingModule {}
