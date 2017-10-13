import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
		/*
		 this.fb.group({
			'provDocNum': ['', [
				 Validators.required              
			]],
			'datePayment': ['', [
					Validators.required
			]],
			'amount': ['', [
					Validators.required,               
					GeneralValidations.numeric()
			]]
	}); 
*/
	}

}
