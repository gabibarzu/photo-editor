import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from 'src/app/shared/models';

@Component({
  selector: 'app-applied-filter',
  templateUrl: './applied-filter.component.html',
  styleUrls: ['./applied-filter.component.scss']
})
export class AppliedFilterComponent {
  @Input() filter: Filter;
  @Output() onRemoveFilter: EventEmitter<Filter> = new EventEmitter();


  removeFilter() {
    this.onRemoveFilter.emit(this.filter);
  }
}
