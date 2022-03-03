import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private UserService:UserService) { }

  usersList:any;
  errMsg:any;

  ngOnInit(): void
  {

    this.UserService.GetAllUsers().subscribe(
      usersData => {
        this.usersList=usersData;
      },
      error =>{
        this.errMsg=error;
      }

    )


  }

}
