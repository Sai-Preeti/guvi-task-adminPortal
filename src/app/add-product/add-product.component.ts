import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

interface Product{
  id:number,
  title:string,
  price:number,
  description:string
}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productData:FormGroup;
  constructor(private prodService:ProductService)
  {
    this.productData=new FormGroup({
      'id':new FormControl(),
      'title':new FormControl(),
      'price':new FormControl(),
      'description':new FormControl(),
    })
  }

  createProduct()
  {
    console.log(this.productData.value)
    this.prodService.createBlog(this.productData.value)
  }
}
