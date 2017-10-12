import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
		{ path: 'home', component: ProductListComponent },
		{ path: 'edit', component: ProductEditComponent }
		
];
export const ProductsRouter: ModuleWithProviders = RouterModule.forChild(routes);

