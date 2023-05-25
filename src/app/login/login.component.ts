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

  user: User;
  userSubscription: Subscription;

  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userSubscription = this.userService.getUser().subscribe(
      (response: User) => {
        this.user = response;
      },
      (error) => {

      }
    );
  }

  ngOnDestroy() {
    
  }

}
