import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-serchBox',
  templateUrl: './serchBox.component.html',
  styleUrls: ['./serchBox.component.css'],
})
export class SerchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
