import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model'
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  constructor() { }

	products : Product [];
  ngOnInit() {
		this.products = [
			{name: "Cocacola 500", price: 25.50, stock: 10 },
			{name: "Cocacola 1.5l", price: 55.13, stock: 12 }	
		]
  }

}
