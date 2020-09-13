import { Component, AfterViewInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#2c2c54';
  }

  ngOnDestroy() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f7f1e3';
  }
}