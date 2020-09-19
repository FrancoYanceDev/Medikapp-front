import { Component, OnDestroy } from '@angular/core';
import { PacienteModel } from 'src/app/models/PacienteModel';
import { PacienteBodyDataStoreService } from './paciente-body-data-store.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-paciente-body',
  templateUrl: './paciente-body.component.html',
  styleUrls: ['./paciente-body.component.css']
})
export class PacienteBodyComponent implements OnDestroy{
  name = new FormControl();
  constructor(public pacienteStore: PacienteBodyDataStoreService) { }

  openDialogCreateUpdate(paciente: PacienteModel, action: string) {
    this.pacienteStore.openDialogCreateUpdate(paciente, action);
  }

  openDialogDelete(paciente: PacienteModel, action: string) {
    this.pacienteStore.openDialogDelete(paciente, action);
  }

  ngOnDestroy(){
    this.pacienteStore.destroy();
  }
}
