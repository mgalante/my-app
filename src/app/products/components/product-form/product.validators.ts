import { AbstractControl } from "@angular/forms";

export class ProductValidators {

	static invalidQuantity(quantity: number) {
		return (control: AbstractControl) => {
			if (control.value % quantity == 0) {
				return null;
			}
			return { invalidQuantity: true };
		}
	}

	static checkProduct(control: AbstractControl) {
		console.log(control.get("name").value);
		return null;
	}

}