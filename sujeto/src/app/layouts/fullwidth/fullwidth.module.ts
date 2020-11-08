import { LoginComponent } from './../../modules/login/login.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FullwidthComponent } from './fullwidth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class FullwidthModule { }
