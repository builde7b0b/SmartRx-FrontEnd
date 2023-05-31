import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    name: '',
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    allergies: null,
    userProfile: {
      id: 0,
      role: ''
    },
    prescriptionList: []
  };
  
  userSubscription: Subscription = new Subscription;

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    console.log("running")
    this.userSubscription = this.userService.getUser().subscribe({
      next: (response: User) => {
        this.user = response;
        console.log(response);
      },
      error: (error) => {

      }
  });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
