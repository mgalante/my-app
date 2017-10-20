import { Action } from "@ngrx/store";
import { Product } from "../products/models/product.model";

export const EDIT_PRODUCT = "[Product] Edit";
export const ADD_PRODUCT = "[Product] Add";

export class EditProduct implements Action {
	readonly type: string = EDIT_PRODUCT;
	constructor(public payload : Product){}
}



export class AddProduct implements Action {
	readonly type: string = ADD_PRODUCT;
	constructor(public payload : Product){}
}

export type All = EditProduct | AddProduct;