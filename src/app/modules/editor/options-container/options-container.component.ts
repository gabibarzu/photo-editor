import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from 'src/app/shared/models';

@Component({
  selector: 'app-options-container',
  templateUrl: './options-container.component.html',
  styleUrls: ['./options-container.component.scss']
})
export class OptionsContainerComponent {
  @Input() filter: any;
  @Output() onValueChange: EventEmitter<number> = new EventEmitter();

  formatLabel(value: number) {
    return value;
  }

  changeValue(toggle: any) {
    this.onValueChange.emit(toggle.value);
  }
}
