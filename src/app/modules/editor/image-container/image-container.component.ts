import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent {
  @Input() isUploaded: boolean = false;
  @Output() onUploadImage: EventEmitter<boolean> = new EventEmitter<boolean>();

  url: any;
  errorMessage: string = "";

  selectFile(event) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.errorMessage = 'You must select an image';
      this.onUploadImage.emit(this.isUploaded);
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.errorMessage = "Only images are supported";
      this.onUploadImage.emit(this.isUploaded);
      return;
    }

    this.isUploaded = true;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.errorMessage = "";
      this.url = reader.result;
    }

    this.onUploadImage.emit(this.isUploaded);
  }

}
