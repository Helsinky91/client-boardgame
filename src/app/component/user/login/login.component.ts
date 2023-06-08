import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  invalidLogin: boolean = false;
  user: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login(): void {
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    this.userService.login(username, password)
      .subscribe(
        user => {
          // console.log(user);
          localStorage.setItem('currentUserId', user.id);
          localStorage.setItem('currentUser', JSON.stringify(user));

          this.userService.userLoggedId = user.id;

          this.user = user;
          this.router.navigate(['/user', this.user.id])

        },
        error => {
          this.invalidLogin = true;
          console.log(error);
        }
      );
  }
}
