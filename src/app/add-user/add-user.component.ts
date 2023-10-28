import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
interface User{
  id:number,
  name:string,
  email:string,
  phoneno:number
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userData:FormGroup;
  constructor(private userService:UserServiceService)
  {
    this.userData=new FormGroup({
      'id':new FormControl(),
      'name':new FormControl(),
      'email':new FormControl(),
      'phoneno':new FormControl(),
    })
  }

  createUser()
  {
    console.log(this.userData.value)
    this.userService.createBlog(this.userData.value)
  }
}
