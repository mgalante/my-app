import { Product } from "./models/product.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Category } from "./models/category.model";
import { Observable } from "rxjs/Observable";

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Store } from '@ngrx/store';
import * as ProductActions from "../actions/product.actions"
import { StoreModel, defaultState } from "../reducers/product.reducer"

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { EditProduct, AddProduct } from "../actions/product.actions";


@Injectable()
export class ProductService {
	constructor(private http: Http, private store: Store<StoreModel>) {
		this.products$ = store.select("products");
		defaultState.forEach(element => {
			this.store.dispatch(new AddProduct(element));
		});
	}

	products$: Observable<Product[]>;
	//	products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
	categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([{
		"id": 1,
		"name": "Bebidas"
	},
	{
		"id": 2,
		"name": "Snacks"
	}]);

	// onProductChange(product: Product) {
	// 	let products: Product[] = this.products$.value;
	// 	let i = products.findIndex((item) => item.id == product.id);
	// 	products[i] = product;
	// 	this.products$.next(products);
	// }

	getProducts(): Observable<Product[]> {
		return this.products$;
		// return this.http
		// 	.get("/api/products")
		// 	.map((response: Response) => response.json())
		// 	.catch((error: any) => Observable.throw(error.json()));
	}

	getProduct(id: number): Observable<Product> {
		return this.http
			.get(`/api/products}/${id}`)
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json()));
	}

	updateProduct(product: Product) {
		// let headers = new Headers({
		// 	'Content-Type': 'application/json'
		// });
		// let options = new RequestOptions({
		// 	headers: headers
		// });
		// return this.http
		// 	.put(`/api/products/${product.id}`, product, options)
		// 	.map((response: Response) => response.json())
		// 	.catch((error: any) => Observable.throw(error.json()));
		this.store.dispatch(new EditProduct(product));

	}

	removeProduct(product: Product): Observable<Product> {
		return this.http
			.delete(`/api/products/${product.id}`)
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json()));
	}
}

