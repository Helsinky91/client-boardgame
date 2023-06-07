import { Component , EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GamesInterface } from 'src/app/interfaces/games-interface';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {

  @Output() gameCreated = new EventEmitter<GamesInterface>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      picture: ['', Validators.required],
      minAge: ['', Validators.required],
      minPlayers: ['', Validators.required],
      maxPlayers: ['', Validators.required],
      description: ['', Validators.required]

    });
  }



  onSubmit() {
    const newGame: GamesInterface = this.form.value;
    this.gameCreated.emit(newGame);
    this.form.reset();

  }
}


