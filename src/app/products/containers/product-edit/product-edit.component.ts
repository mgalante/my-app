import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
		private route: ActivatedRoute,
		private router: Router,
		private service: ProductService
	) { }

	product;

  ngOnInit() {
		this.product = this.route.paramMap
    .switchMap((params: ParamMap) =>
      this.service.getProduct(params.get('id')));
  }

}
