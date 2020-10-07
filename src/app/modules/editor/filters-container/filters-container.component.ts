import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DefaultFiltersService } from 'src/app/shared/services/default-options.service';
import { Filter } from 'src/app/shared/models'

@Component({
  selector: 'app-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss']
})
export class FiltersContainerComponent implements OnInit {
  @Input() disabled: boolean = true;
  @Output() onFilterSelect: EventEmitter<Filter> = new EventEmitter();

  filters: Filter[];
  selectedFilter: Filter;

  constructor(private readonly service: DefaultFiltersService) {
  }

  ngOnInit() {
    this.filters = this.service.getDefaultFilters();
  }

  isSelected(filter: Filter) {
    return filter == this.selectedFilter;
  }

  selectFilter(filter: Filter) {
    if (this.disabled) { return; }
    this.selectedFilter = filter;
    this.onFilterSelect.emit(filter);
  }
}
