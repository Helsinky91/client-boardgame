import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = "http://localhost:8080/api/user";

  constructor(private http: HttpClient) { }

  checkIfUserExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(this.API_URL + username + '/exists');
    // return this.http.get<boolean>(`${this.API_URL}${username}/exists`);
  }
}
