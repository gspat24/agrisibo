import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumerProductsPageRoutingModule } from './consumer-products-routing.module';

import { ConsumerProductsPage } from './consumer-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumerProductsPageRoutingModule
  ],
  declarations: [ConsumerProductsPage]
})
export class ConsumerProductsPageModule {}
