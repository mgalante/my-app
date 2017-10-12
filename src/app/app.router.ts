import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{ path: 'products', loadChildren: 'app/products/products.module#ProductsModule'},
//  { path: '', redirectTo: '', pathMatch: 'full' }
];

export const AppRouter = RouterModule.forRoot(routes, 
	{ useHash: true });
