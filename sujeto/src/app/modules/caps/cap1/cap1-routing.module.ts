import { LoginComponent } from './../../login/login.component';
import { Pag11Component } from './pag11/pag11.component';
import { Pag10Component } from './pag10/pag10.component';
import { Pag9Component } from './pag9/pag9.component';
import { Pag8Component } from './pag8/pag8.component';
import { Pag7Component } from './pag7/pag7.component';
import { Pag6Component } from './pag6/pag6.component';
import { Pag5Component } from './pag5/pag5.component';
import { PortadaComponent } from './portada/portada.component';
import { Pag1Component } from './pag1/pag1.component';
import { Pag4Component } from './pag4/pag4.component';
import { Pag3Component } from './pag3/pag3.component';
import { Pag2Component } from './pag2/pag2.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap1Component } from './cap1.component';

const routes: Routes = [
  {path: '', component: Cap1Component,
  children: [
    {path: '', component: PortadaComponent},
    {path: 'pag1', component: Pag1Component},
    {path: 'pag2', component: Pag2Component},
    {path: 'pag3', component: Pag3Component},
    {path: 'pag4', component: Pag4Component},
    {path: 'pag5', component: Pag5Component},
    {path: 'pag6', component: Pag6Component},
    {path: 'pag7', component: Pag7Component},
    {path: 'pag8', component: Pag8Component},
    {path: 'pag9', component: Pag9Component},
    {path: 'pag10', component: Pag10Component},
    {path: 'pag11', component: Pag11Component},
    {path: 'login', component: LoginComponent}

  ]}
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cap1RoutingModule { }
