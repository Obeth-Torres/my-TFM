import { LoginComponent } from './../../login/login.component';
import { Page10Component } from './page10/page10.component';
import { Page9Component } from './page9/page9.component';
import { Page8Component } from './page8/page8.component';
import { Page7Component } from './page7/page7.component';
import { Page6Component } from './page6/page6.component';
import { Page5Component } from './page5/page5.component';
import { Page4Component } from './page4/page4.component';
import { Page3Component } from './page3/page3.component';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { Portada3Component } from './portada3/portada3.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cap3Component } from './cap3.component';

const routes: Routes = [
  { path: '', component: Cap3Component, 
  children: [
    {path: '', component: Portada3Component},
    {path: 'page1', component: Page1Component},
    {path: 'page2', component: Page2Component},
    {path: 'page3', component: Page3Component},
    {path: 'page4', component: Page4Component},
    {path: 'page5', component: Page5Component},
    {path: 'page6', component: Page6Component},
    {path: 'page7', component: Page7Component},
    {path: 'page8', component: Page8Component},
    {path: 'page9', component: Page9Component},
    {path: 'page10', component: Page10Component},
    {path: 'login', component: LoginComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Cap3RoutingModule { }
