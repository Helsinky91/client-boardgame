import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  usernameExists = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onLoginFormSubmit(): void {
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    this.userService.login(username, password).subscribe({
      next: (data) => {
        this.usernameExists = true;

        localStorage.setItem("loggedUserId", data.id);

        // Redirection to other page

      },
      error: (error) => {
        alert("User not exists");
      }
    }

    );
  }
}
