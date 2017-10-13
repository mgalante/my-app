import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRouter } from './products.router';
import { ProductDashboardComponent } from './containers/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';
import { ProductService } from './product.service';

@NgModule({
  imports: [
		CommonModule,
		ProductsRouter,
		FormsModule,
		ReactiveFormsModule
  ],
	declarations: [ProductListComponent, ProductDashboardComponent, ProductFormComponent],
	providers: [
		ProductService
	]
})
export class ProductsModule { }
