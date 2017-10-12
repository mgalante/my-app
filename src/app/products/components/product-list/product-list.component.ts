import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

	@Input()
	products : Product[]

	@Output()
	productEdit: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

	onProductEdit(product: Product){
		this.productEdit.emit(product);
	}
	
  ngOnInit() {



  }

}
