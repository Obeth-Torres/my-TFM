import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MediaComponent } from './../../modules/media/media.component';
import { CapsComponent } from './../../modules/caps/caps.component';
import { HomeComponent } from './../../modules/home/home.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    CapsComponent,
    MediaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
    
  ]
})
export class DefaultModule { }
