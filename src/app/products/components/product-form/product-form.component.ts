import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit {

	@Input()
	product: Product;

	@Output()
	productChange : EventEmitter<Product> = new EventEmitter<Product>()

	constructor(private fb: FormBuilder) { }

	productForm: FormGroup;
	onSubmit(){
		let product : Product= this.productForm.value;
		product.id = this.product.id;
		this.productChange.emit(product); 
	}

	ngOnInit() {
		this.productForm = this.fb.group({
			'name': [this.product.name, [
				Validators.required
			]],
			'price': [this.product.price, [
				Validators.required
			]],
			'stock': [this.product.stock, [
				Validators.required
			]]
		});
	}

}
