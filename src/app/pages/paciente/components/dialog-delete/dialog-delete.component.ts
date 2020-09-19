import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PacienteModel } from 'src/app/models/PacienteModel';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent {
  
  paciente: PacienteModel;

  constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PacienteModel
    ,private pacienteService: PacienteService) { 
      this.paciente = data;
    }

  close(paciente: PacienteModel){
    this.dialogRef.close(paciente);
  }

  delete(){
    this.pacienteService.delete(this.paciente)
      .subscribe(paciente => {
        this.close(paciente);
      });
  }

}
