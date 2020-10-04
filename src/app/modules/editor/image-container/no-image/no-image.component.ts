import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-no-image',
  templateUrl: './no-image.component.html',
  styleUrls: ['./no-image.component.scss']
})
export class NoImageComponent {
  @Input() error: string;
  @Output() onSelectFile: EventEmitter<any> = new EventEmitter<any>();

  selectFile(event) {
    this.onSelectFile.emit(event);
  }
}
