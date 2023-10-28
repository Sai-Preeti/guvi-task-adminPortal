import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormGroup,FormControl } from '@angular/forms';

interface User{
  id:number,
 name:string,
 phoneno:number,
 email:string,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  userList:User|any;
  modifiedData:User|any;
  isEditFormVisible = false;
  Id:number|any;
  constructor(private userService:UserServiceService)
  {
    this.userList=this.userService.users;
    this.modifiedData=new FormGroup({
      'id':new FormControl(),
      'name':new FormControl(),
      'email':new FormControl(),
      'phoneno':new FormControl(),
    })
  }
  deleteUser(id:number)
  {
    this.userList = this.userList.filter((o:User) => o.id !== id);
  }

  editUser(id:number)
  {
    this.Id=id;
   
  }
  view(id: number)
  {
    this.userService.id=id;
  }
  edit()
    {
      this.userList=this.userService.users.filter((o:User)=>o.id!==this.Id); 
      this.userService.createBlog(this.modifiedData.value);
      this.userList.push(this.modifiedData.value);
      this.userService.users=this.userList;
      this.isEditFormVisible = false;
    }
 
    hideEditForm(): void {
      this.isEditFormVisible = true;
    }
}
