import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category.model';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent 
implements OnInit, OnChanges	 {
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
			Validators.required
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

	ngOnInit() {
		
	}

}
