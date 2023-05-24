import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private baseURL = ''

  constructor(private http: HttpClient) { }

  
}