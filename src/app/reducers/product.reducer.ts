import * as ProductActions from
	'../actions/product.actions';
import { Product } from
	'../products/models/product.model';

type Action = ProductActions.All;

export function productReducer(state: Product[] = [],
	action: Action) {

		switch(action.type){
			case ProductActions.ADD_PRODUCT:
				return [...state, action.payload];

			case ProductActions.EDIT_PRODUCT:
				return state.map((item:Product)=>{
					if(item.id == action.payload.id){
						return {...item, ...action.payload };
					}
					return item;
				});
		}
		return state;
}