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

  uploadImage(event: boolean) {
    this.isUploaded = event;
  }

  selectFilter(filter: Filter) {
    this.selectedFilter = filter;
  }
}
