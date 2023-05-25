import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs'
import { User } from './user.model';
import { LoginRequest } from './login-request.model'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/users/register`, user);
  }

  loginUser(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/users/login`, loginRequest);
  }

  getUser(): Observable<User> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnZW5lQGdtYWlsLmNvbSIsImlhdCI6MTY4NDk3MzU4NSwiZXhwIjoxNjg1MDU5OTg1fQ.y--DgBrsOfzti4voJISJaeAJJRe1eJBuT7hGwn9KcKI';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.baseUrl}/users`, { headers });
  }

  updateCurrentUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users`, user);
  }

  deleteCurrentUser(): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users`);
  }
}
