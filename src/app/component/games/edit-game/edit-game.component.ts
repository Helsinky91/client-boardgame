import { Component , EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesInterface } from 'src/app/interfaces/games-interface';
import { GamesService } from 'src/app/services/games.service';
@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  @Output() gameUpdated = new EventEmitter<GamesInterface>();
  form: FormGroup;
  gameId: number;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router : Router, private gamesService: GamesService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      picture: ['', Validators.required],
      minAge: ['', Validators.required],
      minPlayers: ['', Validators.required],
      maxPlayers: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.gameId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.gamesService.getGameId(this.gameId).subscribe(game => {
      this.form.setValue({
        name: game.name,
        brand: game.brand,
        picture: game.picture,
        minAge: game.minAge,
        minPlayers: game.minPlayers,
        maxPlayers: game.maxPlayers,
        description: game.description
      });
    });
  }

  onSubmit() {
    const updatedGame: GamesInterface = this.form.value;
    this.gamesService.putGame(this.gameId, updatedGame).subscribe(updatedGame => {
      this.gameUpdated.emit(updatedGame);
      this.form.reset();
      this.router.navigate(['/games', this.gameId])
    });
  }
}
