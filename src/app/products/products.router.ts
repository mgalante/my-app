import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './containers/product-dashboard/product-dashboard.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';

const routes: Routes = [
		{ path: '', component: ProductDashboardComponent },
		{ path: '/edit/:id', component: ProductEditComponent },
		
];
export const ProductsRouter: ModuleWithProviders = RouterModule.forChild(routes);

