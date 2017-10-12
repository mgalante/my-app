import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyModule } from './my-module/my-module.module';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		MyModule,
		AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
