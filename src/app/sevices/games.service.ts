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
    return this.http.get<any>(this.API_URL);
  }
}
