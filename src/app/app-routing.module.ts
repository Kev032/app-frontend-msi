import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContribuyenteComponent } from '../app/pages/contribuyente/contribuyente.component';
import { RegistrarContribuyenteComponent } from './pages/registrar-contribuyente/registrar-contribuyente.component';
import { ActualizarContribuyenteComponent } from './pages/actualizar-contribuyente/actualizar-contribuyente.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ExpedienteComponent } from './pages/expediente/expediente.component';
import { RegistrarExpedienteComponent } from './pages/registrar-expediente/registrar-expediente.component';
import { ActualizarExpedienteComponent } from './pages/actualizar-expediente/actualizar-expediente.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent,pathMatch:'full'},
  { path: 'signup', component: SignupComponent, pathMatch:'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'contribuyentes', component: ContribuyenteComponent },
  { path: 'registrar-contribuyente', component : RegistrarContribuyenteComponent},
  { path: 'actualizar-contribuyente/:id', component : ActualizarContribuyenteComponent},
  { path: 'expedientes', component: ExpedienteComponent},
  { path: 'registrar-expediente', component: RegistrarExpedienteComponent},
  { path: 'actualizar-expediente/:id', component: ActualizarExpedienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
