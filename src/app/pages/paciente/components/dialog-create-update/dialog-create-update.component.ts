import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PacienteModel } from 'src/app/models/PacienteModel';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-dialog-create-update',
  templateUrl: './dialog-create-update.component.html',
  styleUrls: ['./dialog-create-update.component.css']
})
export class DialogCreateUpdateComponent{

  form: FormGroup;
  paciente: PacienteModel;

  constructor(public dialogRef: MatDialogRef<DialogCreateUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PacienteModel
              ,private fb: FormBuilder
              ,private pacienteService: PacienteService) {
      this.form = this.fb.group({
        id: new FormControl(),
        id_doctor: new FormControl(),
        nombre: new FormControl('', [
                    Validators.required
                  ]),
        telefono: new FormControl('',[
                        Validators.required
                      ]),
        direccion: new FormControl('',[
                        Validators.required
                      ])
      });
      
      this.paciente = data;
      this.llenar_campos();
     }


     llenar_campos(){
       if(this.paciente){
        this.form.patchValue({
          id: this.data.id,
          id_doctor : this.paciente.id_doctor,
          nombre: this.paciente.nombre,
          telefono: this.paciente.telefono,
          direccion: this.paciente.direccion
        });
       }
     }

     save(){

        this.form.patchValue({
          telefono : String(this.form.get('telefono').value)
        });

       if(this.data !== null){
        this.pacienteService.update(this.data, this.form.value)
        .subscribe(paciente => {
          this.close(paciente)
        });
        return;
      }

       this.pacienteService.create(this.form.value)
        .subscribe(paciente => {
          this.close(paciente)
        });
     }


    close(paciente: PacienteModel){
      this.dialogRef.close(paciente);
    }

}
