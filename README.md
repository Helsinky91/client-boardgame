# Boardgame - CLIENT SIDE

Boardgame Geekers is an app that contains a library of many Boardgames. A user can create an account and will be able to save the games in its `own collection`, create a `wishlist` and also a `favourite` list.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
For the Backend please check https://github.com/Helsinky91/server-boardgamer and its README to further instructions


## ROUTES AND ENDPOINTS 

| Path                      | Component                      |  Behavior                                                     |
| ------------------------- | --------------------           |  ------------------------------------------------------------ |
| `/`                       | HomeComponent                  | Home page                                        |
| `/signup`                 | SignupComponent                | Signup form that navigates to /login
| `/login`                  | LoginComponent                 | Login form that navigates to user profile after validate credentials       |
| `/logout`                 | n/a                            | Navigate to homepage after logout                             |
| `/games`                  | GamesComponent                 | Shows a list of all games              |
| `/games/:id`              | GameItemComponent              | Shows a specific game and its information.            |
| `/games/:id/edit`         | EditGameComponent              | Shows a form to edit the current game already autofilled      |
| `/user/:id`               | ProfileComponent               | Shows one recipe details and the relacionate      |
| `/user/:id/edit`          | EditProfileComponent           | Shows a form to edit the current user already autofilled      |
| `/**`         | ErrorPageComponent              | Error page in casa there is an error on the url      |


## Services and Interfaces
There are two of each:
- `GameInterface` and `UserInterface` --> this connects the Models from DB and connects them with Angular.
- `GameService` and `UserSerive` --> this brings all Endpoints from DB and connects them with Angular.


### Error Page
I had used a template from https://dev.to/stackfindover/35-html-404-page-templates-5bge

------------
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.
