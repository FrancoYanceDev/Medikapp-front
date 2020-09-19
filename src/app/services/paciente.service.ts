import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacienteModel } from '../models/PacienteModel';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient
              ,public globalService: GlobalService) { }

  get_all(){
    return this.http.get<PacienteModel[]>(`${this.globalService.api}/paciente/all`);
  } 

  search(nombre: string){
    return this.http.get<PacienteModel[]>(`${this.globalService.api}/paciente?nombre=${nombre}`);
  } 

  create(paciente: PacienteModel){
    paciente.id_doctor = Number((Math.random() * 1000).toString().substring(0,2));
    return this.http.post<PacienteModel>(`${this.globalService.api}/paciente`, paciente);
  }

  update(pacienteEdit: PacienteModel ,paciente: PacienteModel){
    return this.http.put<PacienteModel>(`${this.globalService.api}/paciente?id_doctor=${pacienteEdit.id_doctor}`, paciente);
  }

  delete(paciente: PacienteModel){
    return this.http.delete<PacienteModel>(`${this.globalService.api}/paciente?id_doctor=${paciente.id_doctor}`);
  }
  
}
