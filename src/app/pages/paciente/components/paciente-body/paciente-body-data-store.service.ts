import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { PacienteModel } from 'src/app/models/PacienteModel';
import { PacienteService } from 'src/app/services/paciente.service';
import { SnackBarComponent } from 'src/app/shared-components/components/snack-bar/snack-bar.component';
import { DialogCreateUpdateComponent } from '../dialog-create-update/dialog-create-update.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Injectable()

export class PacienteBodyDataStoreService {

  dialogCreateUpdate: Subscription;
  dialogDelete: Subscription;
  pacientes$: Subscription;
  pacientes: PacienteModel[];
  durationInSeconds = 4;
  private config = new MatDialogConfig();


  constructor(public dialog: MatDialog      
    ,private _snackBar: MatSnackBar  
    ,private pacienteService: PacienteService) { 
      this.get_all();
    }


  get_all(){
    this.pacienteService.get_all()
      .subscribe(pacientes =>{
        this.pacientes = pacientes;
      });
  }

  openDialogCreateUpdate(paciente: PacienteModel, action: string) {
    this.config = new MatDialogConfig();
    this.config.disableClose = true;
    this.config.panelClass = 'create-update';
    this.config.autoFocus = false;
    this.config.data = paciente;
    const dialogRef = this.dialog.open(DialogCreateUpdateComponent, this.config);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar(result, action, 'ok');
        this.get_all();
      }
     
    });
  }

  openDialogDelete(paciente: PacienteModel, action: string) {
    this.config = new MatDialogConfig();
    this.config.disableClose = true;
    this.config.panelClass = 'delete';
    this.config.autoFocus = false;
    this.config.data = paciente;
    const dialogRef = this.dialog.open(DialogDeleteComponent, this.config);

    this.dialogCreateUpdate =  dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.openSnackBar(result, action, 'ok');
        this.get_all();
      }
    });
  }

  search(name:string){
    this.pacienteService.search(name)
      .subscribe(pacientes => {
       
        this.pacientes = pacientes;
      });

  }

  openSnackBar(paciente: PacienteModel, action: string, style: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {
        action,
        paciente
      },
      panelClass: style
    });
  }

  destroy(){
    this.pacientes$.unsubscribe();
    this.dialogCreateUpdate.unsubscribe();
  }



}
