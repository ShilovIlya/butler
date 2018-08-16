import { EventEmitter } from "@angular/core";
import { Node } from "./node";
import { Link } from "./link";
import * as d3 from "d3";
const FORCES = {
  LINKS: 1 / 50,
  COLLISION: 1,
  CHARGE: -1
}

export class ForceDirectedGraph {
  public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  public simulation: d3.Simulation<any, any>;

  public nodes: Node[] = [];
  public links: Link[] = [];


  constructor(nodes: Node[], links: Link[], options: { width: number, height: number }) {
    this.nodes = nodes;
    this.links = links;

    this.initSimulation(options);
  }

  initNodes() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }
    this.simulation.nodes(this.nodes);
  }

  initLinks() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }
    this.simulation.force('links',
      d3.forceLink(this.links).strength(FORCES.LINKS));
  }

  initSimulation(options: { width: number, height: number }) {
    if (!options || !options.height || !options.width) {
      throw new Error('missing options when initializing simulation');
    }
    if (!this.simulation) {
      const ticker = this.ticker;
      this.simulation = d3.forceSimulation()
        .force("charge", d3.forceManyBody().strength(FORCES.CHARGE));
      this.initNodes();
      this.initLinks();
    }
    this.simulation.force("centers", d3.forceCenter(options.width / 2, options.height / 2));
    this.simulation.restart();
  }
}
