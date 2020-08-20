import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumerPlaceorderPage } from './consumer-placeorder.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumerPlaceorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumerPlaceorderPageRoutingModule {}
