import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['my-first-component.scss']
})
export class MyFirstComponent {
  @Input()
  titleText;

  @Output()
  changeText: EventEmitter<string> = new EventEmitter<string>();

  onClickBtn(e: MouseEvent) {
    console.log(e);
    this.changeText.emit('Titulo Emitido');
  }
}
