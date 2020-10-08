import { Component, Input } from '@angular/core';
import { Filter } from 'src/app/shared/models';

@Component({
  selector: 'app-applied-filters-container',
  templateUrl: './applied-filters-container.component.html',
  styleUrls: ['./applied-filters-container.component.scss']
})
export class AppliedFiltersContainerComponent {
  @Input() filters: Filter[];

  removeFilter(removedFilter: Filter) {
    removedFilter.value = removedFilter.defaultValue;
    const index: number = this.filters.indexOf(removedFilter);
    if (index !== -1) {
      this.filters.splice(index, 1);
    }
  }
}
