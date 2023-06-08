import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { GamesInterface } from 'src/app/interfaces/games-interface';
// import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gamesList: any;
  selectedGame: any;
  showForm = false;

    constructor(private gamesService: GamesService, private router: Router){}

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

    getGameId(id: number) {
      if (this.gamesList) {
        this.selectedGame = this.gamesList.find((game: GamesInterface) => game.id === id);
        if (this.selectedGame) {
          this.router.navigate(['/games', this.selectedGame.id]);
        }
      }
    }

    addGame(newGame: GamesInterface) {
      this.gamesService.postGame(newGame).subscribe(
        {
          next: (data) => {
            // console.log(data);
            this.gamesList.push(data);
            this.showForm = false;
          }
        }
      )
    }


}
