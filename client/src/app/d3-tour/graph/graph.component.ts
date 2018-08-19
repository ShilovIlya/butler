import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { ForceDirectedGraph } from "../model/force-directed-graph";
import { D3Service } from "../d3.service";
import { Node } from "../model/node";
import { Link } from "../model/link";

@Component({
  selector: 'app-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input('nodes') nodes: Node[];
  @Input('links') links: Link[];
  @Input('width') width: number;
  @Input('height') height: number;

  graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    })
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return {height: this.height, width: this.width};
  }
}
