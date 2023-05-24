import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private baseURL = ''

  constructor(private http: HttpClient) { }

  getPrescriptions() {
    //add logic to retrieve prescriptions from the backend API
    return this.http.get(`${this.baseURL}/prescriptions`);
  }





  
}