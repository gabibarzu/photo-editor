import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  isUploaded: boolean = false;

  uploadImage(event) {
    this.isUploaded = event;
  }
}
