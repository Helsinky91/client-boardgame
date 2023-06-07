import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user-interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = "http://localhost:8080/api/user";

  constructor(private http: HttpClient) { }


  getUser(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.API_URL}/${id}`);
  }

  createUser(body: any): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/add-user`, body)
  }

  // addGameToUser(userId: number, gameId: number): Observable<any>{
  //   return this.http.post<any>(`${this.API_URL}/add-game/${userId}/${gameId}`)
  // }

  putUser(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}/edit`, body)
  }

  login(username: string, password: string): Observable<any> {
    let body:any = {
      username: username,
      password: password
    };
    return this.http.patch<any>(`${this.API_URL}/login`, body)
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}/delete`)
  }




}
