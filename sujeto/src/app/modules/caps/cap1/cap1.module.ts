import { SharedModule } from './../../../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cap1RoutingModule } from './cap1-routing.module';
import { Cap1Component } from './cap1.component';
import { Pag1Component } from './pag1/pag1.component';
import { Pag2Component } from './pag2/pag2.component';
import { Pag3Component } from './pag3/pag3.component';
import { Pag4Component } from './pag4/pag4.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PortadaComponent } from './portada/portada.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { Pag5Component } from './pag5/pag5.component';
import { Pag6Component } from './pag6/pag6.component';
import { Pag7Component } from './pag7/pag7.component';
import { Pag8Component } from './pag8/pag8.component';
import { Pag9Component } from './pag9/pag9.component';
import { Pag10Component } from './pag10/pag10.component';
import { Pag11Component } from './pag11/pag11.component';


@NgModule({
  declarations: [Cap1Component, Pag1Component, Pag2Component, Pag3Component, Pag4Component, PaginationComponent, PortadaComponent, CabeceroComponent, Pag5Component, Pag6Component, Pag7Component, Pag8Component, Pag9Component, Pag10Component, Pag11Component],
  imports: [
    CommonModule,
    Cap1RoutingModule,
  ]
})
export class Cap1Module { }
