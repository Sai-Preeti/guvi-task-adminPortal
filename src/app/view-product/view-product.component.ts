import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

interface Product{
  id:number,
 title:string,
 price:number,
 description:string
}
interface Cart{
  p:Product;
  quantity:number;
 }
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  product:Product|any;
  constructor(private productService:ProductService,private cartService:CartService)
  {
    this.product=this.productService.products.find((p:Product)=>p.id==this.productService.id);

  }

  addToCart(id:number)
  {
    let newProduct=this.productService.products.filter((product:Product)=>product.id===id)[0]
    console.log(newProduct);
    let exists = false;
    for (let i = 0; i < this.cartService.cartItems.length; i++) {
      if (this.cartService.cartItems[i].p.id === id) {
        this.cartService.cartItems[i].quantity++;
        this.cartService.total+=this.cartService.cartItems[i].p.price;
        exists = true;
        break;
      }
    }
    if (!exists) {
      const cartItem: Cart = {
        p: newProduct,
        quantity: 1
      }
      this.cartService.cartItems.push(cartItem);
      alert("Song added to cart successfully")
      this.cartService.total+=cartItem.p.price;
      console.log(this.cartService.cartItems);
    }
  }
}
