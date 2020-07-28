import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';


// Import Angular plugin.
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { UsersFormComponent } from './users-form/users-form.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

import { RegistrosFormComponent } from './registros-form/registros-form.component';
import { ManageRegistrosComponent } from './manage-registros/manage-registros.component';

import { ManageContactComponent } from './manage-contact/manage-contact.component';

import { ManageWebComponent } from './manage-web/manage-web.component';
import { ManageSeoComponent } from './manage-seo/manage-seo.component';
import { ManageGraficoComponent } from './manage-grafico/manage-grafico.component';
import { ManageVideoComponent } from './manage-video/manage-video.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { GraficoFormComponent } from './grafico-form/grafico-form.component';
import { WebFormComponent } from './web-form/web-form.component';
import { SeoFormComponent } from './seo-form/seo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DashboardComponent,
    ManageContactComponent,
    UsersFormComponent,
    ManageUsersComponent,
    RegistrosFormComponent,
    ManageRegistrosComponent,
    ManageWebComponent,
    ManageSeoComponent,
    ManageGraficoComponent,
    ManageVideoComponent,
    VideoFormComponent,
    GraficoFormComponent,
    WebFormComponent,
    SeoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
