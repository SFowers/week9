import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  add(product:Product) {
    return this.http.post<any>('http://localhost:3000/api/add', product);
  }
  read() {
    return this.http.get<any>('http://localhost:3000/api/read');
  }
  update(product:Product) {
    return this.http.post<any>('http://localhost:3000/api/update', product);
  }
  remove(product:Product) {
    return this.http.post<any>('http://localhost:3000/api/remove', product);
  }
}
