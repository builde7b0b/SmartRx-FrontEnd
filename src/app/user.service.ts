import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs'
import { User } './user.model';
import { LoginRequest } from './login-request.model'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}
