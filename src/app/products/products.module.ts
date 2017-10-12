import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsRouter } from './products.router';
import { ProductDashboardComponent } from './containers/product-dashboard/product-dashboard.component';

@NgModule({
  imports: [
		CommonModule,
		ProductsRouter
  ],
  declarations: [ProductListComponent, ProductEditComponent, ProductDashboardComponent]
})
export class ProductsModule { }
