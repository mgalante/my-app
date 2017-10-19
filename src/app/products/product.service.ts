import { Product } from "./models/product.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Category } from "./models/category.model";


export class ProductService {
	products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([
		{ id: 1, name: "", price: 25.50, stock: 10, category: 1 },
		{ id: 100, name: "Lays", price: 55.13, stock: 12, category: 2 }]
	);

	categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([
		{ id: 1, name: "Bebidas" },
		{ id: 2, name: "Snacks" }]);

	onProductChange(product: Product) {
		let products: Product[] = this.products$.value;
		let i = products.findIndex((item) => item.id == product.id);
		products[i] = product;
		this.products$.next(products);
	}

}

