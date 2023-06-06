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
    this.userService.checkIfUserExists(username).subscribe(
      userExists => {
        if (userExists) {
          this.usernameExists = true;
        } else {
          // User does not exist, proceed with login
        }
      }
    );
  }
}
