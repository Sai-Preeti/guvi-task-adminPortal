import { Injectable } from '@angular/core';

interface User
{
  id:number,
  name:string,
  email:string,
  phoneno:number
}
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users=[
    {
      id:1,
      name:"User 1",
      email:"user1@test.com",
      phoneno:1234567890
    },
    {
      id:2,
      name:"User 2",
      email:"user2@test.com",
      phoneno:2134567890
    },
    {
      id:3,
      name:"User 3",
      email:"user3@test.com",
      phoneno:1234568790
    }
   ]
   id:number|any;
  constructor() { }
  createBlog(user:User)
  {
    console.log("blog service ",user)
    this.users.push(user)
    alert("New user added")
  }
}
