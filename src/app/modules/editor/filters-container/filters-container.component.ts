import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filters-container',
  templateUrl: './filters-container.component.html',
  styleUrls: ['./filters-container.component.scss']
})
export class FiltersContainerComponent {
  @Input() disabled: boolean = true;
}
