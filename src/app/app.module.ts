import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { GamesComponent } from './component/games/games-list/games.component';
import { GameItemComponent } from './component/games/game-item/game-item.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewGameComponent } from './component/games/new-game/new-game.component';
import { SingupComponent } from './component/user/singup/singup.component';
import { EditGameComponent } from './component/games/edit-game/edit-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GamesComponent,
    GameItemComponent,
    ProfileComponent,
    ErrorPageComponent,
    LoginComponent,
    NewGameComponent,
    SingupComponent,
    EditGameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
