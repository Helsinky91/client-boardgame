import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './component/home/home.component';
import { GamesComponent } from './component/games/games-list/games.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { LoginComponent } from './component/user/login/login.component';
import { GameItemComponent } from './component/games/game-item/game-item.component';
import { EditGameComponent } from './component/games/edit-game/edit-game.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { EditProfileComponent } from './component/user/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "games",
    component: GamesComponent
  },
  {
    path: "games/:id",
    component: GameItemComponent
  },
  {
    path: 'games/:id/edit',
    component: EditGameComponent
  },
  {
    path: "user/:id",
    component: ProfileComponent
  },
  {
    path: "user/:id/edit",
    component: EditProfileComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },

  {
    path: "**",
    component: ErrorPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  RouterModule
  ]
})
export class AppRoutingModule { }
