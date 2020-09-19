import { Component, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PacienteBodyDataStoreService } from '../paciente-body/paciente-body-data-store.service';

@Component({
  selector: 'app-paciente-header',
  templateUrl: './paciente-header.component.html',
  styleUrls: ['./paciente-header.component.css']
})
export class PacienteHeaderComponent   {
  name = new FormControl();
  constructor(public pacienteStore: PacienteBodyDataStoreService) { }

  openDialogCreateUpdate() {
    this.pacienteStore.openDialogCreateUpdate(null, 'creado');
  }

  search(){
    this.pacienteStore.search(this.name.value);
  }
}
