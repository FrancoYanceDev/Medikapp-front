import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  api:string = "http://localhost:5000";
  
  constructor() { }

}
