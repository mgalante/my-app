import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyModule } from './my-module/my-module.module';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		MyModule,
		AppRouter,
		ReactiveFormsModule
  ],
  providers: [ FormBuilder ],
  bootstrap: [AppComponent]
})
export class AppModule { }
