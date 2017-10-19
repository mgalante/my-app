import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy, EventEmitter, Output, SimpleChanges } from '@angular/core';
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
export class ProductFormComponent 
implements  OnChanges	 {
	ngOnChanges(changes: SimpleChanges): void {
		if(changes.product)
		{
			const product : Product = changes.product.currentValue;
			this.productForm.reset();				
			this.productForm.setValue({
				stock: product.stock,
				price: product.price,
				name: product.name,
				category: product.category
			});	
		}
	}

	get nameInvalid(){
		return this.productForm.get('name').hasError('required')
		&& this.productForm.get('name').touched;
	}
	

	get stockInvalid(){
		return this.productForm.get('stock').hasError('cantidadMultiplo')
		&& this.productForm.get('stock').touched;
	}
	
	@Input()
	product: Product;

	@Output()
	productChange : EventEmitter<Product> = new EventEmitter<Product>()

	productForm : FormGroup = this.fb.group({
		'name': ['', [
			Validators.required
		]],
		'price': ['', [
			Validators.required
		]],
		'stock': ['', [
			Validators.min(10),
			Validators.required, 
			ProductValidators.cantidadMultiplo(10)
		]],
		'category': ['',[]]
	});
	
	categories : Category[] = [
    {
      "id": 1,
      "name": "Bebidas"
    },
    {
      "id": 2,
      "name": "Snacks"
    }
	];

	constructor(private fb: FormBuilder) { }

	onSubmit(){
		let product : Product= this.productForm.value;
		product.id = this.product.id;
		this.productChange.emit(product); 
	}

}
