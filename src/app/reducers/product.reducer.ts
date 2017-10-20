import * as ProductActions from '../actions/product.actions'
import { Product } from '../products/models/product.model';

export type Action = ProductActions.All;
export interface StoreModel { products: Product[] };

export const defaultState: Product[] = [
	{
		"id": 1,
		"name": "qweqwe1",
		"price": 25.5,
		"stock": 10,
		"category": 2,
	},
	{
		"id": 100,
		"name": "Lays",
		"price": 55.13,
		"stock": 200,
		"category": 2,
	}
];


export function productReducer(state: Product[] = [], action: Action): Product[] {
	switch (action.type) {
		case ProductActions.ADD_PRODUCT:
			return [...state, action.payload];
		case ProductActions.EDIT_PRODUCT:
			return state.map(item => {
				if (item.id == action.payload.id) {
					return { ...item, ...action.payload }
				}
				return item;
			})
	}
	return state;
}


