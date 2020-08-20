import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumerFrontpagePageRoutingModule } from './consumer-frontpage-routing.module';

import { ConsumerFrontpagePage } from './consumer-frontpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumerFrontpagePageRoutingModule
  ],
  declarations: [ConsumerFrontpagePage]
})
export class ConsumerFrontpagePageModule {}
