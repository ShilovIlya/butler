import GRAPH_CONFIG from '../graph.config';

export class Node implements d3.SimulationNodeDatum {

  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number;
  fy?: number;

  id: number;
  linkCount: number = 0;
  stroke: string = "white";
  strokeWidth: number = 0.25;

  getColor;

  constructor(id) {
    this.id = id;
    this.resetColorFunction();
    this.resetStroke();
  }

  normal = () => {
    return Math.sqrt(this.linkCount / GRAPH_CONFIG.N);
  };

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px';
  }

  get color() {
    return this.getColor();
  }

  getColorBasic() {
    let index = Math.floor(GRAPH_CONFIG.SPECTRUM.length * this.normal());
    return GRAPH_CONFIG.SPECTRUM[index];
  };

  setColorFunction(func) {
    this.getColor = func;
  }

  resetColorFunction() {
    this.getColor = this.getColorBasic;
  }

  resetStroke() {
    this.stroke = "white";
    this.strokeWidth = 0.25;
  }
}
