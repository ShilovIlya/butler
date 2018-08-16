export class Node implements d3.SimulationNodeDatum {

  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number;
  fy?: number;

  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
