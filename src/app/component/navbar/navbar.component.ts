import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  toggleTheme() {
    if (document.documentElement.classList.contains('dark-theme')) {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }
}
