import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente.component';
import { PacienteHeaderComponent } from './components/paciente-header/paciente-header.component';
import { PacienteBodyComponent } from './components/paciente-body/paciente-body.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { DialogCreateUpdateComponent } from './components/dialog-create-update/dialog-create-update.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { PacienteBodyDataStoreService } from './components/paciente-body/paciente-body-data-store.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [PacienteComponent
    , PacienteHeaderComponent,
     PacienteBodyComponent,
     DialogCreateUpdateComponent,
     DialogDeleteComponent],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedComponentsModule
  ],
  providers: [
    PacienteBodyDataStoreService
  ]
})
export class PacienteModule { }
