import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paciente',
    pathMatch: 'full'
  },
  {
    path: 'paciente',
    loadChildren: () => import('./pages/paciente/paciente.module').then(m => m.PacienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
