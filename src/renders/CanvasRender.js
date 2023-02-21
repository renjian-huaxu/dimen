import { Renderer } from "./Renderer";
import { RenderableFace3 } from '../renders/renderables/RenderableFace3'
import { RenderableFace4 } from '../renders/renderables/RenderableFace4'
import { RenderableParticle } from '../renders/renderables/RenderableParticle'
import { ColorFillMaterial } from '../materials/ColorFillMaterial'
import { ColorStrokeMaterial } from '../materials/ColorStrokeMaterial'
import { FaceColorStrokeMaterial  } from '../materials/FaceColorStrokeMaterial'
import { FaceColorFillMaterial } from '../materials/FaceColorFillMaterial'

class CanvasRender extends Renderer {

  constructor() {
    super();

    this.viewport = document.createElement("canvas");
    this.context = this.viewport.getContext("2d");
    this.domElement = this.viewport;
  }

  setSize(width, height) {
    this.viewport.width = width;
		this.viewport.height = height;
		
		this.context.setTransform(1, 0, 0, 1, width / 2, height / 2);
  }

  render(scene, camera) {

    const pi2 = Math.PI * 2

    this.context.clearRect (-this.viewport.width / 2, -this.viewport.height / 2, this.viewport.width, this.viewport.height);

    this.project(scene, camera);

    this.renderList.map(element => {

      element.material.map(material => {
        this.context.beginPath();

        if (element instanceof RenderableFace3) {

          this.context.moveTo(element.v1.x, element.v1.y);
          this.context.lineTo(element.v2.x, element.v2.y);
          this.context.lineTo(element.v3.x, element.v3.y);
          this.context.lineTo(element.v1.x, element.v1.y);
  
        } else if (element instanceof RenderableFace4) {

          this.context.moveTo(element.v1.x, element.v1.y);
          this.context.lineTo(element.v2.x, element.v2.y);
          this.context.lineTo(element.v3.x, element.v3.y);
          this.context.lineTo(element.v4.x, element.v4.y);
          this.context.lineTo(element.v1.x, element.v1.y);
        
        } else if (element instanceof RenderableParticle) {
          this.context.arc(element.x, element.y, element.size * element.screenZ, 0, pi2, true);
        }

        if (material instanceof ColorFillMaterial) {
			
					this.context.fillStyle = material.color.styleString;
					this.context.fill();
			
				} else if (material instanceof FaceColorFillMaterial) {

					this.context.fillStyle = element.color.styleString;
					this.context.fill();

				} else if (material instanceof ColorStrokeMaterial) {
				
					this.context.lineWidth = material.lineWidth;
					this.context.lineJoin = "round";
					this.context.lineCap = "round";

					this.context.strokeStyle = material.color.styleString;
					this.context.stroke();
				
				} else if (material instanceof FaceColorStrokeMaterial) {
				
					this.context.lineWidth = material.lineWidth;
					this.context.lineJoin = "round";
					this.context.lineCap = "round";
					
					this.context.strokeStyle = element.color.styleString;					
					this.context.stroke();
				}

        this.context.closePath();

      })

    })
    
  }
  
}

export { CanvasRender };