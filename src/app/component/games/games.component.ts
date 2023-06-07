import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { GamesInterface } from 'src/app/interfaces/games-interface';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gamesList: any;
  selectedGame: any;

    constructor(private gamesService: GamesService){

    }

    getGames() : void {
      this.gamesService.getGames().subscribe(
        {
          next: (data) => {
            console.log(data);
            this.gamesList = data;
          }
        }
      )
    }

    ngOnInit() : void {
      this.getGames();
    }

    getGameId(id: number){
      this.selectedGame = this.gamesList.find((game: GamesInterface) => game.id === id);
    }

    //add new game: linkear el form








}
