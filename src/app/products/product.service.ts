import { Injectable } from "@angular/core";
import { Product } from "./models/product.model";

@Injectable()
export class ProductService {
	getProduct(id: any) {
		return Promise.resolve<Product>({
			name: "Coca",
			price: id,
			stock: 10
		});
	}
}

