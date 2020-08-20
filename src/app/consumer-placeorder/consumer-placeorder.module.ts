import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumerPlaceorderPageRoutingModule } from './consumer-placeorder-routing.module';

import { ConsumerPlaceorderPage } from './consumer-placeorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumerPlaceorderPageRoutingModule
  ],
  declarations: [ConsumerPlaceorderPage]
})
export class ConsumerPlaceorderPageModule {}
