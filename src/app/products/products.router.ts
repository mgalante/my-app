import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './containers/product-dashboard/product-dashboard.component';

const routes: Routes = [
		{ path: '', component: ProductDashboardComponent },		
];
export const ProductsRouter: ModuleWithProviders = RouterModule.forChild(routes);

