import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = "http://localhost:8080/api/user";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let body:any = {
      username: username,
      password: password
    };
    return this.http.patch<any>(`${this.API_URL}/login`, body)
  }

  
}
