import { Component, OnInit } from '@angular/core';
import { Node } from "../model/node";
import { Link } from "../model/link";
import GRAPH_CONFIG from '../graph.config';

@Component({
  selector: 'app-basic-graph',
  templateUrl: './basic-graph.component.html',
  styleUrls: ['./basic-graph.component.css']
})
export class BasicGraphComponent implements OnInit {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    for (let i = 1; i <= GRAPH_CONFIG.N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= GRAPH_CONFIG.N; i++) {
      for (let m = 2; i * m <= GRAPH_CONFIG.N; m++) {
        this.nodes[i - 1].linkCount++;
        this.nodes[i*m - 1].linkCount++;
        this.links.push(new Link(i, i*m));
      }
    }
  }

  ngOnInit() {
  }

}
