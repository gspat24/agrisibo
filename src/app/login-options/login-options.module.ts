import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { LoginOptionsPageRoutingModule } from './login-options-routing.module';

import { LoginOptionsPage } from './login-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LoginOptionsPageRoutingModule
  ],
  declarations: [LoginOptionsPage]
})
export class LoginOptionsPageModule {}
