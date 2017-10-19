import { AbstractControl } from "@angular/forms";

export class ProductValidators {
	static cantidadMultiplo(multiplo) {
		return (control: AbstractControl) => {
			if (control.value % multiplo !== 0) {
				return { "cantidadMultiplo": true };
			}
			return null;
		}
	}



}