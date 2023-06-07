import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      // add other fields as needed
    });
  }

  onSubmit() {
    const body = this.signupForm.value;
    body.id = 0;
    this.userService.createUser(body).subscribe(
      (response: any) => console.log(response), // handle the server's response
      (error: any) => console.log(error) // handle the error
    );
  }
}





