import { Component, Input } from '@angular/core';
import { Filter } from 'src/app/shared/models';

@Component({
  selector: 'app-options-container',
  templateUrl: './options-container.component.html',
  styleUrls: ['./options-container.component.scss']
})
export class OptionsContainerComponent {
  @Input() filter: any;

  formatLabel(value: number) {
    return value;
  }

}
