import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private readonly API_URL = "http://localhost:8080/api/games";

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get<any>(this.API_URL)
  }

  getGameId(id: number) : Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`)
  }

  getRandomGame() : Observable<any> {
    return this.http.get<any>(`${this.API_URL}/random-game`)
  }

  postGame(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add-game`, body)
  }

  putGame(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${id}/edit`, body)
  }

  deleteGame(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}/delete`)
  }

}
