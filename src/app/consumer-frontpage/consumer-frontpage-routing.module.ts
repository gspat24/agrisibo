import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumerFrontpagePage } from './consumer-frontpage.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumerFrontpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumerFrontpagePageRoutingModule {}
