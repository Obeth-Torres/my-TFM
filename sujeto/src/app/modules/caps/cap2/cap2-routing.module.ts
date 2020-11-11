import { LoginComponent } from './../../login/login.component';
import { P12Component } from './cap2/p12/p12.component';
import { P11Component } from './cap2/p11/p11.component';
import { P10Component } from './cap2/p10/p10.component';
import { P9Component } from './cap2/p9/p9.component';
import { P8Component } from './cap2/p8/p8.component';
import { P7Component } from './cap2/p7/p7.component';
import { P6Component } from './cap2/p6/p6.component';
import { P5Component } from './cap2/p5/p5.component';
import { P4Component } from './cap2/p4/p4.component';
import { Portada2Component } from './cap2/portada2/portada2.component';
import { P3Component } from './cap2/p3/p3.component';
import { P2Component } from './cap2/p2/p2.component';
import { P1Component } from './cap2/p1/p1.component';

import { Cap2Component } from './cap2/cap2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: Cap2Component,
  children: [
    {path: '', component: Portada2Component},
    {path: 'p1', component: P1Component},
    {path: 'p2', component: P2Component},
    {path: 'p3', component: P3Component},
    {path: 'p4', component: P4Component},
    {path: 'p5', component: P5Component},
    {path: 'p6', component: P6Component},
    {path: 'p7', component: P7Component},
    {path: 'p8', component: P8Component},
    {path: 'p9', component: P9Component},
    {path: 'p10', component: P10Component},
    {path: 'p11', component: P11Component},
    {path: 'p12', component: P12Component},
    {path: 'login', component: LoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cap2RoutingModule { }
