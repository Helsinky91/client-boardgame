import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userServiceObj: UserService;

  constructor(private userService: UserService, private router: Router){
    this.userServiceObj = userService;
  }

  toggleTheme() {
    if (document.documentElement.classList.contains('dark-theme')) {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }

  logout(){
    this.userService.userLoggedId = null;
    localStorage.removeItem("currentUserId");
    localStorage.removeItem("currentUser");

    this.router.navigate(["/"]);
  }
}
