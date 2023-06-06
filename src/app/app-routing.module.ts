import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './component/home/home.component';
import { GamesComponent } from './component/games/games.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { LoginComponent } from './component/login/login.component';

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
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  }

  //! insertar signup pages
  //! edit game, update game
  //! edit profile, delete profile
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
