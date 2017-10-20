import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyModule } from './my-module/my-module.module';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './reducers/product.reducer'
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		MyModule,
		AppRouter,
		ReactiveFormsModule,
		HttpModule,
		StoreModule.forRoot({products: productReducer})
	],
	providers: [FormBuilder],
	bootstrap: [AppComponent]
})
export class AppModule { }
