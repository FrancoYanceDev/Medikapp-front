import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { PacienteModel } from 'src/app/models/PacienteModel';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  paciente: PacienteModel;
  action: string;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { 
    this.paciente = data.paciente;
    this.action = data.action;
  }

  ngOnInit(): void {
  }

}
