import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsRouter } from './products.router';

@NgModule({
  imports: [
		CommonModule,
		ProductsRouter
  ],
  declarations: [ProductListComponent, ProductEditComponent]
})
export class ProductsModule { }
