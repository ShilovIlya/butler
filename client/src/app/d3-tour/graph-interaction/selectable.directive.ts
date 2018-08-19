import { Directive, ElementRef, Input } from "@angular/core";
import { ForceDirectedGraph } from "../model/force-directed-graph";
import { D3Service } from "../d3.service";
import { Node } from "../model/node";

@Directive({
  selector: '[selectableNode]'
})
export class SelectableDirective {
  @Input('selectableNode') node: Node;
  @Input('selectableInGraph') graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef) {
  }

  ngOnInit() {
    this.d3Service.applySelectableBehaviour(this._element.nativeElement, this.node, this.graph);
  }
}
