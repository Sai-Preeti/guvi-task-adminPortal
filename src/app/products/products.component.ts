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
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList:Product|any;
  modifiedData:Product|any;
  product:Product|any;
  isEditFormVisible = false;
  Id:number|any;
  constructor(private prodService:ProductService)
  {
    this.productList=this.prodService.products;
    this.product=this.productList.find((o:Product)=>o.id==this.Id)
  }
  deleteProduct(id:number)
  {
    this.productList = this.productList.filter((o:Product) => o.id !== id);
  }

  view(id: number)
  {
    this.prodService.id=id;
  }
  showEditForm(id: number) {
    this.isEditFormVisible = true;
    this.Id = id;
    this.product = this.productList.find((o: Product) => o.id == this.Id);
    console.log(this.product)
    this.modifiedData = new FormGroup({
      'id': new FormControl(this.product.id),
      'title': new FormControl(this.product.title),
      'price': new FormControl(this.product.price),
      'description': new FormControl(this.product.description)
    });
    
  }

  updateProduct() {
    if (this.modifiedData.invalid) {
      return;
    }

    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == this.Id) {
        this.productList[i].title = this.modifiedData.controls['title'].value;
        this.productList[i].price = this.modifiedData.controls['price'].value;
        this.productList[i].description = this.modifiedData.controls['description'].value;
        break;
      }
    }
    
    this.isEditFormVisible = false;
  }
}