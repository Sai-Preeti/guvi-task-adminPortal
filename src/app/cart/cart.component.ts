import { Component } from '@angular/core';
import { CartService } from '../cart.service';

interface Product
{
  id:number,
  title:string,
  description:string,
  price:number
}

interface Cart{
  p:Product;
  quantity:number;
 }
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems:Array<Cart>=[];
  total:number=0;
  constructor(private cartSevrvice:CartService)
  {
    this.cartItems=this.cartSevrvice.cartItems;
    this.total=this.cartSevrvice.total;
  }

  addQuantity(item:Cart)
  {
    let idx=this.cartItems.findIndex(prod=>prod.p.id=item.p.id);
    this.cartItems[idx].quantity+=1;
    this.total+=this.cartItems[idx].p.price;
  }

  reduceQuantity(item:Cart)
  {
    if(item.quantity==1)
    {
      this.removeItem(item.p.id)
    }
    else
    {
      item.quantity-=1;
      this.total=Math.round(this.total-item.p.price);
    }
  }
  removeItem(id:number){
    console.log("here")
    let itemIndex = this.cartItems.findIndex(obj => obj.p.id === id)
    this.total = Math.round(Math.round(this.total) - Math.round(this.cartItems[itemIndex].p.price*this.cartItems[itemIndex].quantity))
    this.cartItems.splice(itemIndex,1);
    console.log(this.cartItems);
    this.cartSevrvice.cartItems=this.cartItems;
  }
}

