import { Injectable } from "@angular/core";
import { Node } from "./model/node";
import { Link } from "./model/link";
import { ForceDirectedGraph } from "./model/force-directed-graph";

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
