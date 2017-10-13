import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'

import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil"
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
	styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

	constructor(private productService : ProductService) { }
	
  private ngUnsubscribe$: Subject<void> = new Subject<void>();

	onProductChange(product: Product){
		this.productService.onProductChange(product);
		this.selectedProduct = null;	
	}

	onProductEdit(product: Product){
		this.selectedProduct = product;
	}

	selectedProduct : Product;

	products : Product [];
  ngOnInit() {
		this.productService.products$
		.takeUntil(this.ngUnsubscribe$)
		.subscribe((products)=>{
			this.products = products;
		});
	}
	
	ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
