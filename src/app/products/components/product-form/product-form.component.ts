import { Component, OnChanges, Input, ChangeDetectionStrategy, EventEmitter, Output, SimpleChanges, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category.model';
import { ProductValidators } from './product.validators';


@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnChanges {

	@Input()
	product: Product;

	@Input()
	categories: Category[];

	@Output()
	productChange: EventEmitter<Product> = new EventEmitter<Product>()

	productForm: FormGroup = this.fb.group({
		'name': ['', [
			Validators.required
		]],
		'price': ['', [
			Validators.required
		]],
		'stock': ['', [
			Validators.required,
			Validators.min(0),
			ProductValidators.invalidQuantity(10)
		]],
		'category': ['', Validators.required]
	}, {
			validator: ProductValidators.checkProduct
		});

	constructor(private fb: FormBuilder) { }

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.product) {
			const currentValue = changes.product.currentValue;
			this.productForm.reset();
			this.productForm.setValue({
				name: currentValue.name,
				price: currentValue.price,
				stock: currentValue.stock,
				category: currentValue.category
			});
		}
	}

	onSubmit() {
		// this.productForm.get("name").markAsDirty()
		// this.productForm.get("name").markAsTouched()

		if (!this.productForm.invalid) {
			let product: Product = this.productForm.value;
			product.id = this.product.id;
			this.productChange.emit(product);
		}

	}
}
