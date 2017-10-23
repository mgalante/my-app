import { Product } from "./models/product.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Store } from "@ngrx/store";
import { AddProduct, EditProduct } from "../actions/product.actions";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";


interface StoreModel {
	products: Product[];
}

@Injectable()
export class ProductService {



	products$ : Observable<Product[]>;
	
	constructor(
		private store: Store<StoreModel>,
		private http: Http
	){

		this.http.get("/api/products").subscribe((resp)=>{
			let products : Product[] = resp.json();
			products.forEach(product => {
				this.store.dispatch(new AddProduct(product));
			});
		});

		this.products$ = this.store.select("products");

	}

	onProductChange(product: Product){
		this.http.patch(`/api/products/${product.id}`,
		product).
		subscribe((resp)=>{
			this.store.dispatch(new EditProduct(resp.json()));			
		})
	}
}

