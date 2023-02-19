import { Renderer } from "./Renderer";

class CanvasRender extends Renderer {

  constructor(scene) {
    super(scene);

    this.scene = scene;
    this.viewport = document.createElement("canvas");
    this.context = this.viewport.getContext("2d");
    this.domElement = this.viewport;
  }

  setSize(width, height) {
    this.viewport.width = width;
		this.viewport.height = height;
		
		this.context.setTransform(1, 0, 0, 1, width / 2, height / 2);
  }

  render() {
    this.project(this.scene);

    this.context.beginPath();
    this.context.lineWidth = 2;
    this.context.strokeStyle = "red";
    this.context.arc(0, 0, 20, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.closePath();
    
  }
  
}

export { CanvasRender };