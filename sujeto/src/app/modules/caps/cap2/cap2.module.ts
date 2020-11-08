import { P4Component } from './cap2/p4/p4.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cap2RoutingModule } from './cap2-routing.module';
import { Cap2Component } from './cap2/cap2.component';
import { P1Component } from './cap2/p1/p1.component';
import { P2Component } from './cap2/p2/p2.component';
import { P3Component } from './cap2/p3/p3.component';
import { Portada2Component } from './cap2/portada2/portada2.component';
import { P5Component } from './cap2/p5/p5.component';
import { P6Component } from './cap2/p6/p6.component';
import { P7Component } from './cap2/p7/p7.component';
import { P8Component } from './cap2/p8/p8.component';
import { P9Component } from './cap2/p9/p9.component';
import { P10Component } from './cap2/p10/p10.component';
import { P11Component } from './cap2/p11/p11.component';
import { P12Component } from './cap2/p12/p12.component';
import { Cabecero2Component } from './cabecero2/cabecero2.component';


@NgModule({
  declarations: [Cap2Component, P1Component, P2Component, P3Component, Portada2Component, P4Component, P5Component, P6Component, P7Component, P8Component, P9Component, P10Component, P11Component, P12Component, Cabecero2Component ],
  imports: [
    CommonModule,
    Cap2RoutingModule
  ]
})
export class Cap2Module { }
