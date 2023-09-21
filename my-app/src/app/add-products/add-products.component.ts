import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  product: Product = new Product();

  constructor(private prodserv:ProductsService, private router:Router) {}

  addProduct(event:any) {
    console.log(this.product);
    this.prodserv.add(this.product).subscribe({
      next:
        (res)=>{
          console.log(res);
          this.router.navigate(['/list']);
        }
    })
  }
}
