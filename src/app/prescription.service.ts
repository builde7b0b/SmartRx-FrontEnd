import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private baseURL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getPrescriptions() {
    //add logic to retrieve prescriptions from the backend API
    return this.http.get(`${this.baseURL}/prescriptions`);
  }

  submitRefillRequest(refillData: any) {
    //implement logic to submit refill requests to backend API
    return this.http.post(`{this.baseURL}/refill-request`, refillData)
  }






}