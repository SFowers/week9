import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';

const routes: Routes = [{path: 'add', component: AddProductsComponent},
                        {path: 'update/:id', component: UpdateProductsComponent},
                        {path: 'list', component: ListProductsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
