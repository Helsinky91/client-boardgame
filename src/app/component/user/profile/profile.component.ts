import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser!: UserInterface; // provide initial value or use ! operator
  user!: UserInterface;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const userId = currentUser?.id;
    // console.log("currentUser " + currentUser.username)
    if (userId) {
      this.userService.getUser(userId).subscribe((user: UserInterface) => {
         this.currentUser = user;
        // console.log("user " + user.wishlist);
      });
    }
  }

  editProfile(updatedUser: UserInterface) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.putUser(id, updatedUser).subscribe(updatedUserData => {
      this.user = updatedUserData;
    });
  }

  goToEditProfile() {
    const id = +this.route.snapshot.paramMap.get('id')!;
      this.router.navigate(['/user', id, 'edit']);
  }


  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.router.navigate(['/home'])
        },
        error: (err) => {
          console.log('Error deleting user:', err);
        }
      }
    )
  }
}
