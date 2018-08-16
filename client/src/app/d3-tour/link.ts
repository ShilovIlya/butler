import { Node } from "./node";

export class Link implements d3.SimulationLinkDatum<Node> {
  index?: number;
  source: Node | string | string;
  target: Node | string | string;


  constructor(source: Node | string | string, target: Node | string | string) {
    this.source = source;
    this.target = target;
  }
}
