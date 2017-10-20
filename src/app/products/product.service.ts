import { Product } from "./models/product.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { AddProduct, EditProduct } from "../actions/product.actions";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";


interface StoreModel {
	products: Product[];
}

@Injectable()
export class ProductService {


	initialProducts = [{id: 1, name: "", price: 25.50, 
	stock: 10, category: 1 },
	{id: 100, name: "Cocacola 1.5l", 
	price: 55.13, stock: 12, category: 2 }];

	products$ : Observable<Product[]>;
	
	constructor(private store: Store<StoreModel>){
		this.initialProducts.forEach(product => {
			this.store.dispatch(new AddProduct(product));
		});

		this.products$ = this.store.select("products");

	}

	onProductChange(product: Product){	
		this.store.dispatch(new EditProduct(product));
	}
}

