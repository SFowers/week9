import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: Product[] = [];
  constructor(private prodserv:ProductsService, private router:Router) {}

  ngOnInit() {
    this.prodserv.read().subscribe((data) => {
      this.products = data;
    })
    console.log(this.products);
  }

  updateProduct(id:number) {
    this.router.navigateByUrl('/update/' + id);
  }

  deleteProduct(product:Product) {
    if(confirm("Are you sure you want to delete this item?")) {
      this.prodserv.remove(product).subscribe((data) => {
        this.products = data;
      })
    }
  }
}
