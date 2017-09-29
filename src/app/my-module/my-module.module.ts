import { NgModule } from '@angular/core';
import { MyFirstComponent } from './my-first-component/my-first-component.component';

@NgModule({
  declarations: [
    MyFirstComponent
  ],
  exports: [
    MyFirstComponent
  ]
})
export class MyModule { }
