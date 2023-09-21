import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../products';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent {
  products: Product[] = [];
  product: Product = new Product();
  id:number = 0;

  constructor(private route: ActivatedRoute, private router:Router, private prodserv:ProductsService) {}
  //this.route.snapshot.params['email']
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.prodserv.read().subscribe((data) => {
      this.products = data;
    })

    for(let i = 0; i < this.products.length; i++) {
      if(this.id == this.products[i].id) {
        this.product = this.products[i];
      }
    }
  }

  updateProduct(event:any) {
    this.prodserv.update(this.product).subscribe({
      next:
        (res)=>{
          console.log(res);
          this.router.navigate(['/list']);
        }
    })
  }
}
