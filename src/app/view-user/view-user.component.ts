import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

interface User{
  id:number,
 name:string,
 phoneno:number,
 email:string,
}
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  user:User|any;
  constructor(private userService:UserServiceService)
  {
    this.user=this.userService.users.find((p:User)=>p.id==this.userService.id);

  }
}
