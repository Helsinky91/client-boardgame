import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';
import { UserService } from 'src/app/services/user.service';
import { GamesInterface } from 'src/app/interfaces/games-interface';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit{

  game!: GamesInterface;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private gamesService: GamesService) { }

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

  goToEditGame() {
    const id = +this.route.snapshot.paramMap.get('id')!;
      this.router.navigate(['/games', id, 'edit']);
  }


    deleteGame(id: number): void {
      this.gamesService.deleteGame(id).subscribe(
        {
          next: (data) => {
            console.log(data);
            this.router.navigate(['/games'])
          },
          error: (err) => {
            console.log('Error deleting game:', err);
          }
        }
      )
    }
    // addGameToUser(gameId: number) {
    //   const userId = // get the user ID from somewhere (e.g. from the authentication service)
    //   this.userService.addGameToUser(userId, gameId).subscribe(
    //     (response: any) => console.log(response), // handle the server's response
    //     (error: any) => console.log(error) // handle the error
    //   );
    // }

}
