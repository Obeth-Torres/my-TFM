import { Pa16Component } from './pa16/pa16.component';
import { Pa15Component } from './pa15/pa15.component';
import { Pa14Component } from './pa14/pa14.component';
import { Pa13Component } from './pa13/pa13.component';
import { Pa12Component } from './pa12/pa12.component';
import { Pa11Component } from './pa11/pa11.component';
import { Pa10Component } from './pa10/pa10.component';
import { Pa9Component } from './pa9/pa9.component';
import { Pa8Component } from './pa8/pa8.component';
import { Pa7Component } from './pa7/pa7.component';
import { Pa6Component } from './pa6/pa6.component';
import { Pa5Component } from './pa5/pa5.component';
import { Pa4Component } from './pa4/pa4.component';
import { Pa3Component } from './pa3/pa3.component';
import { Pa2Component } from './pa2/pa2.component';
import { Pa1Component } from './pa1/pa1.component';
import { Portada4Component } from './portada4/portada4.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap4Component } from './cap4.component';

const routes: Routes = [
  { path: '', component: Cap4Component,
  children: [
    {path: '', component: Portada4Component},
    {path: 'pa1', component: Pa1Component},
    {path: 'pa2', component: Pa2Component},
    {path: 'pa3', component: Pa3Component},
    {path: 'pa4', component: Pa4Component},
    {path: 'pa5', component: Pa5Component},
    {path: 'pa6', component: Pa6Component},
    {path: 'pa7', component: Pa7Component},
    {path: 'pa8', component: Pa8Component},
    {path: 'pa9', component: Pa9Component},
    {path: 'pa10', component: Pa10Component},
    {path: 'pa11', component: Pa11Component},
    {path: 'pa12', component: Pa12Component},
    {path: 'pa13', component: Pa13Component},
    {path: 'pa14', component: Pa14Component},
    {path: 'pa15', component: Pa15Component},
    {path: 'pa16', component: Pa16Component},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cap4RoutingModule { }
