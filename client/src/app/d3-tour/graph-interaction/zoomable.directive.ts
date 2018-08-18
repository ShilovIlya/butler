import { Directive, ElementRef, Input } from "@angular/core";
import { D3Service } from "../d3.service";

@Directive({
  selector: '[zoomableOf]'
})
export class ZoomableDirective {
  @Input('zoomableOf') containerElement: ElementRef;

  constructor(private d3Service: D3Service, private _element: ElementRef) {
  }

  ngOnInit() {
    this.d3Service.applyZoomableBehavior(this.containerElement, this._element.nativeElement);
  }
}
