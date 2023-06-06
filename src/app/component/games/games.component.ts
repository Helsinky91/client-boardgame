import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: any;

    constructor(private gamesService: GamesService){

    }

    getGames() : void {
      this.gamesService.getGames().subscribe(
        {
          next: (data) => {
            console.log(data);
            this.games = data;
          }
        }
      )
    }

    ngOnInit() : void {
      this.getGames();
    }
}
