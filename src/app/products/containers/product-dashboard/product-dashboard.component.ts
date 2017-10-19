import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'

import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil"
import { ProductService } from '../../product.service';
import { Category } from '../../models/category.model';

@Component({
	selector: 'app-product-dashboard',
	templateUrl: './product-dashboard.component.html',
	styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

	constructor(private productService: ProductService) { }

	private ngUnsubscribe$: Subject<void> = new Subject<void>();

	categories$: Observable<Category[]>;

	onProductChange(event: Product) {
		//	this.productService.onProductChange(product);
		this.productService.updateProduct(event)
		
		  .subscribe((product: Product) => {
        this.products = this.products.map((product: Product) => {
          if (product.id === event.id) {
            product = Object.assign({}, product, event);
          }
          return product;
        });
      });
		this.selectedProduct = null;
	}

	onProductEdit(product: Product) {
		this.selectedProduct = product;
	}

	selectedProduct: Product;

	products: Product[];
	ngOnInit() {
		this.productService.getProducts()
			.takeUntil(this.ngUnsubscribe$)
			.subscribe((products) => {
				this.products = products;
			});

		this.categories$ = this.productService.categories$;
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe$.next();
		this.ngUnsubscribe$.complete();
	}
}
