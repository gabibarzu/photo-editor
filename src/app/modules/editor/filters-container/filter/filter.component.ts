import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from 'src/app/shared/models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filter: Filter;
  @Input() selected: boolean = false;
  @Output() onClick: EventEmitter<Filter> = new EventEmitter<Filter>();

  selectFilter() {
    this.onClick.emit(this.filter);
  }
}
