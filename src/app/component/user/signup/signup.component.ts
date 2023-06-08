import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;
  invalidSignup: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), , Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],

    });
  }

  onSubmit() {
    const body = this.signupForm.value;
    body.id = 0;
    this.userService.createUser(body).subscribe(
      (response: any) => {
        console.log("User created");
        this.router.navigate(['/login']);
      },
      (error: any) => {
        this.invalidSignup = true;
        console.log(error)
      });
  }
}





