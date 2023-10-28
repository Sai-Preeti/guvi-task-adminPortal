import { Injectable } from '@angular/core';

interface Product
{
  id:number,
  title:string,
  description:string,
  price:number
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products=[
    {
      id:1,
      title:"Product 1",
      price:10000,
      description:"The most affordable product available at best price"
    },
    {
      id:2,
      title:"Product 2",
      price:15000,
      description:"The most affordable product available at best price"
    },
    {
      id:3,
      title:"Product 3",
      price:20000,
      description:"The most affordable product available at best price"
    }
   ]
   id:number|any;
  constructor() { }
  createBlog(prod:Product)
  {
    console.log("blog service ",prod)
    this.products.push(prod)
    alert("New product added")
  }
}
