import { Directive, ElementRef, Input } from "@angular/core";
import { ForceDirectedGraph } from "../model/force-directed-graph";
import { D3Service } from "../d3.service";
import { Node } from "../model/node";

@Directive({
  selector: '[draggableNode]'
})
export class DraggableDirective {
  @Input('draggableNode') node: Node;
  @Input('draggableInGraph') graph: ForceDirectedGraph;


  constructor(private d3Service: D3Service, private _element: ElementRef) {
  }

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.node, this.graph);
  }
}
