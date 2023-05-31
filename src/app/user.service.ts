import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs'
import { User } from './user.model';
import { LoginRequest } from './login-request.model'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/users/register`, user);
  }

  loginUser(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/users/login`, loginRequest);
  }

  getUser(): Observable<User> {
    console.log("getting User")
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJieHh4QGdtYWlsLmNvbSIsImlhdCI6MTY4NTUwOTg2NCwiZXhwIjoxNjg1NTk2MjY0fQ.g-j7QT12DzGmUMrJDpxlQubbbFSedrJ2tmMlr0H9uyg';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log(headers);
    return this.http.get<User>(`${this.baseUrl}/api/users`, { headers });
  }

  updateCurrentUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users`, user);
  }

  deleteCurrentUser(): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users`);
  }
}
