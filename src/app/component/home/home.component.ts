import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  game: any;
  selectedGame: any;


    constructor(private gamesService: GamesService, private router: Router){}

    getRandomGame() : void {
      this.gamesService.getRandomGame().subscribe(
        {
          next: (data) => {
            console.log(data);
            this.game = data;
          }
        }
      )
    }

    ngOnInit() : void {
      this.getRandomGame();
    }
}
