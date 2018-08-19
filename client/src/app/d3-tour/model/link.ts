import { Node } from "./node";
import GRAPH_CONFIG from "../graph.config";

export class Link implements d3.SimulationLinkDatum<Node> {
  index?: number;
  source: Node;
  target: Node;

  getColor;

  constructor(source: Node, target: Node) {
    this.source = source;
    this.target = target;
    this.resetColorFunction();
  }

  get color() {
    return this.getColor();
  }

  getColorBasic() {
    return GRAPH_CONFIG.LINK_COLOR;
  };

  setColorFunction(func) {
    this.getColor = func;
  }

  resetColorFunction() {
    this.getColor = this.getColorBasic;
  }
}
