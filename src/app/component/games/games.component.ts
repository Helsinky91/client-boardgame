import { Component } from '@angular/core';
import { GamesService } from 'src/app/sevices/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
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
}
