import { Component } from '@angular/core';
import { Filter } from 'src/app/shared/models';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  isUploaded: boolean = false;
  selectedFilter: Filter;
  filters: Filter[] = [];

  uploadImage(event: boolean) {
    this.isUploaded = event;
  }

  selectFilter(filter: Filter) {
    this.selectedFilter = filter;
  }

  changeValue(value: number) {
    this.selectedFilter.value = value;
    if (this.filters.find(filter => filter.id == this.selectedFilter.id)) {
      return;
    }
    this.filters.push(this.selectedFilter);
  }
}
