import { Component , EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  user!: UserInterface;
  form: FormGroup;


  @Output() userUpdated = new EventEmitter<UserInterface>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router : Router,
    private userService: UserService
  ) {
    this.user = userService.userLoggedId;
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selfDescription: [''],
      dateOfBirth: ['', Validators.required],
      profilePicUrl: [''],
      address: this.fb.group({
        street: [''],
        city: ['']
      }),
      password: [''],

    });
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
      this.form.setValue({
        username: user.username,
        email: user.email,
        selfDescription: user.selfDescription,
        dateOfBirth: user.dateOfBirth,
        profilePicUrl: user.profilePicUrl,
        password: user.password,
        address: {
          street: user.address.street,
          city: user.address.city
        },


      });
    });
  }

  onSubmit() {
    const updatedUser: UserInterface = this.form.value;
    updatedUser.id = this.user.id;

    this.userService.putUser(this.user.id, updatedUser).subscribe(updatedUserData => {
      this.user = updatedUserData;
      console.log(updatedUserData)
      this.userUpdated.emit(updatedUserData);
      this.router.navigate(['/user', this.user.id]);
    });
  }


}
