import { Component, Input, OnInit } from '@angular/core';
import { ForceDirectedGraph } from "../model/force-directed-graph";
import { D3Service } from "../d3.service";
import { Node } from "../model/node";
import { Link } from "../model/link";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input('nodes') nodes: Node[];
  @Input('links') links: Link[];

  graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service) {
  }

  ngOnInit() {
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  private _options: { width: number, height: number } = {width: 1000, height: 800};

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
