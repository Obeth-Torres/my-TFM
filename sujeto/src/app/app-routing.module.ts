
import { LoginComponent } from './modules/login/login.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { MediaComponent } from './modules/media/media.component';
import { CapsComponent } from './modules/caps/caps.component';
import { HomeComponent } from './modules/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: DefaultComponent,
  children: [
  {path: '', component: HomeComponent},
  {path: 'caps', component: CapsComponent},
  {path: 'media', component: MediaComponent}
  ]},
  {path: '', component: FullwidthComponent,
  children: [
    {path: 'login', component: LoginComponent}
  ]},
  {path: 'cap1', loadChildren: () => import('./modules/caps/cap1/cap1.module').then(m => m.Cap1Module) },
  {path: 'cap2', loadChildren: () => import ('./modules/caps/cap2/cap2.module').then(m => m.Cap2Module)},
  { path: 'cap3', loadChildren: () => import('./modules/caps/cap3/cap3.module').then(m => m.Cap3Module) },
  { path: 'cap4', loadChildren: () => import('./modules/caps/cap4/cap4.module').then(m => m.Cap4Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
