import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GamesInterface } from '../interfaces/games-interface';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private readonly API_URL = "http://localhost:8080/api/games";

  constructor(private http: HttpClient) { }

  getGames(): Observable<GamesInterface> {
    return this.http.get<GamesInterface>(this.API_URL)
  }

  getGameId(id: number) : Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`)
  }

  getRandomGame() : Observable<GamesInterface> {
    return this.http.get<GamesInterface>(`${this.API_URL}/random-game`)
  }

  postGame(body: any): Observable<GamesInterface> {
    return this.http.post<GamesInterface>(`${this.API_URL}/add-game`, body)
  }

  putGame(id: number, body: any): Observable<GamesInterface> {
    return this.http.put<GamesInterface>(`${this.API_URL}/${id}/edit`, body)
  }

  deleteGame(id: number): Observable<GamesInterface> {
    return this.http.delete<GamesInterface>(`${this.API_URL}/${id}/delete`)
  }



}
