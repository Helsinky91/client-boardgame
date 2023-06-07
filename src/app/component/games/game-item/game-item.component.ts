import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { GamesInterface } from 'src/app/interfaces/games-interface';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit{

  game!: GamesInterface;

  constructor(private route: ActivatedRoute, private router: Router, private gamesService: GamesService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.gamesService.getGameId(id).subscribe(game => {
      this.game = game;
    });
  }

  editGame(updatedGame: GamesInterface) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.gamesService.putGame(id, updatedGame).subscribe(updatedGameData => {
      this.game = updatedGameData;
    });
  }


    //edit game
    goToEditGame() {
      const id = +this.route.snapshot.paramMap.get('id')!;
        this.router.navigate(['/games', id, 'edit']);
    }

    //delete game
    //redirecciono a game page inicial


}
