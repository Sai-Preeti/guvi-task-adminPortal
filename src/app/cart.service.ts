import { EventEmitter, Injectable } from '@angular/core';
import { ProductService } from './product.service';

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
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:Array<Cart>=[];
  total:number=0;
  cartItemsChange: EventEmitter<void> = new EventEmitter(); 
}
