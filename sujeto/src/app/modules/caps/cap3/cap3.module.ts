import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cap3RoutingModule } from './cap3-routing.module';
import { Cap3Component } from './cap3.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';
import { PaginationCap3Component } from './pagination-cap3/pagination-cap3.component';
import { Portada3Component } from './portada3/portada3.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { PieComponent } from './pie/pie.component';


@NgModule({
  declarations: [Cap3Component, Page1Component, Page2Component, Page3Component, Page4Component, Page5Component, Page6Component, Page7Component, Page8Component, Page9Component, Page10Component, PaginationCap3Component, Portada3Component, CabeceroComponent, PieComponent],
  imports: [
    CommonModule,
    Cap3RoutingModule
  ]
})
export class Cap3Module { }
