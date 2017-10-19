import { Product } from "./models/product.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";


export class ProductService {
	public products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([
		{id: 1, name: "Cocacola 500", price: 25.50, stock: 10, category: 1 },
		{id: 100, name: "Cocacola 1.5l", price: 55.13, stock: 12, category: 2 }]
	);

	onProductChange(product: Product){
		let products :Product[] = this.products$.value;
		let i = products.findIndex((item) => item.id == product.id);
		products[i] = product;
		this.products$.next(products);
	}
}

