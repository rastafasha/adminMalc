import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import {LoginComponent} from './auth/login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';


import { UsersFormComponent } from './users-form/users-form.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

import { ManageRegistrosComponent } from './manage-registros/manage-registros.component';
import { RegistrosFormComponent} from './registros-form/registros-form.component';
import { WebFormComponent } from './web-form/web-form.component';
import { ManageWebComponent } from './manage-web/manage-web.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';
import { ManageGraficoComponent } from './manage-grafico/manage-grafico.component';
import { GraficoFormComponent } from './grafico-form/grafico-form.component';




const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },

  { path: 'webdesing', component: ManageWebComponent },
  { path: 'webdesing/create', component: WebFormComponent },
  { path: 'webdesing/edit/:id', component: WebFormComponent },

  { path: 'grafico', component: ManageGraficoComponent },
  { path: 'grafico/create', component: GraficoFormComponent },
  { path: 'grafico/edit/:id', component: GraficoFormComponent },

  { path: 'video', component: ManageVideoComponent },
  { path: 'video/create', component: VideoFormComponent },
  { path: 'video/edit/:id', component: VideoFormComponent },
  // Contact
  { path: 'contact', component: ManageContactComponent },
  { path: 'users', component: ManageUsersComponent },
  { path: 'users/create', component: UsersFormComponent },
  { path: 'users/edit/:id', component: UsersFormComponent },
  //
  { path: 'subcriptores', component: ManageRegistrosComponent },
  { path: 'subcriptores/create', component: RegistrosFormComponent },
  { path: 'subcriptores/edit/:id', component: RegistrosFormComponent },

  { path: '**', redirectTo: '/admin', pathMatch: 'full' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
