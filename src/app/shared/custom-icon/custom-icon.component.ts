import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.scss']
})
export class CustomIconComponent {
  @Input() item: any;
  @Input() size: number = 50;

  get url() {
    return "./assets/images/filters/" + this.item + ".svg";
  }
}
