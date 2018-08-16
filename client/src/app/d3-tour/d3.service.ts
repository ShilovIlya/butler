import { Injectable } from "@angular/core";
import { Node } from "./node";
import { Link } from "./link";
import { ForceDirectedGraph } from "./force-directed-graph";

@Injectable()
export class D3Service {

  constructor() {
  }

  applyZoomableBehavior() {
  }

  applyDraggableBehaviour() {
  }

  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width: number, height: number }) {
    let graph = new ForceDirectedGraph(nodes, links, options);
    return graph;
  }
}
