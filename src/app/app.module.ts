import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ContribuyenteComponent } from './pages/contribuyente/contribuyente.component';
import { RegistrarContribuyenteComponent } from './pages/registrar-contribuyente/registrar-contribuyente.component';
import { ActualizarContribuyenteComponent } from './pages/actualizar-contribuyente/actualizar-contribuyente.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ExpedienteComponent } from './pages/expediente/expediente.component';
import { RegistrarExpedienteComponent } from './pages/registrar-expediente/registrar-expediente.component';
import { ActualizarExpedienteComponent } from './pages/actualizar-expediente/actualizar-expediente.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    ContribuyenteComponent,
    RegistrarContribuyenteComponent,
    ActualizarContribuyenteComponent,
    HomeComponent,
    ExpedienteComponent,
    RegistrarExpedienteComponent,
    ActualizarExpedienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
