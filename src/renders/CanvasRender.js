import { Renderer } from "./Renderer";
import { RenderableFace3 } from '../renders/renderables/RenderableFace3'
import { RenderableFace4 } from '../renders/renderables/RenderableFace4'
import { RenderableParticle } from '../renders/renderables/RenderableParticle'
import { ColorFillMaterial } from '../materials/ColorFillMaterial'
import { ColorStrokeMaterial } from '../materials/ColorStrokeMaterial'
import { FaceColorStrokeMaterial  } from '../materials/FaceColorStrokeMaterial'
import { FaceColorFillMaterial } from '../materials/FaceColorFillMaterial'
import { TextureUVMappingMaterial } from "../materials/TextureUVMappingMaterial";
import { Vector2 } from "../core/Vector2";

import { Rectangle } from "../core/Rectangle";

class CanvasRender extends Renderer {

  constructor() {
    super();

    this.viewport = document.createElement("canvas");
    this.context = this.viewport.getContext("2d");
    this.domElement = this.viewport;

    this.clipRect = new Rectangle();
    this.clearRect = new Rectangle( 0, 0, 0, 0 ),
    this.bboxRect = new Rectangle();

    this.vector2 = new Vector2();
    this.uvs = null;
    this.bitmap = null;
    this.bitmap_width = null;
    this.bitmap_height = null;
    this.denom = null;
		this.m11 = null;
		this.m12 = null;
		this.m21 = null;
		this.m22 = null;
		this.dx = null;
		this.dy = null;
  }

  setSize(width, height) {
    this.viewport.width = width;
		this.viewport.height = height;
		
		this.context.setTransform(1, 0, 0, 1, width / 2, height / 2);
    this.clipRect.set( -width / 2, -height / 2, width / 2, height / 2 );
  }

  render(scene, camera) {

    const pi2 = Math.PI * 2;
    let size, v1x, v1y, v2x, v2y, v3x, v3y, v4x, v4y;
    let bitmap_width, bitmap_height;

    this.clearRect.inflate( 1 );
    this.clearRect.minSelf( this.clipRect );
    this.context.clearRect (-this.viewport.width / 2, -this.viewport.height / 2, this.viewport.width, this.viewport.height);
    this.clearRect.empty();

    this.project(scene, camera);

    this.renderList.map(element => {

      this.bboxRect.empty();
      this.context.beginPath();
      
      if (element instanceof RenderableParticle) {
        size = element.size * element.screenZ;
        this.bboxRect.set( element.x - size, element.y - size, element.x + size, element.y + size );

        if ( this.clipRect.instersects( this.bboxRect ) ) {
  
          this.context.arc( element.x, element.y, size, 0, pi2, true );
  
        }
      } else if (element instanceof RenderableFace3) {
        this.expand( element.v1, element.v2 );
				this.expand( element.v2, element.v3 );
				this.expand( element.v3, element.v1 );
        v1x = element.v1.x; v1y = element.v1.y;
				v2x = element.v2.x; v2y = element.v2.y;
				v3x = element.v3.x; v3y = element.v3.y;
        this.bboxRect.addPoint( v1x, v1y );
				this.bboxRect.addPoint( v2x, v2y );
				this.bboxRect.addPoint( v3x, v3y );
        if ( this.clipRect.instersects( this.bboxRect ) ) {

          this.clearRect.addRectangle( this.bboxRect );

          this.context.moveTo( v1x, v1y );
          this.context.lineTo( v2x, v2y );
          this.context.lineTo( v3x, v3y );
          this.context.lineTo( v1x, v1y );

				}

      } else if (element instanceof RenderableFace4) {
        this.expand( element.v1, element.v2 );
				this.expand( element.v2, element.v3 );
				this.expand( element.v3, element.v4 );
				this.expand( element.v4, element.v1 );

				v1x = element.v1.x; v1y = element.v1.y;
				v2x = element.v2.x; v2y = element.v2.y;
				v3x = element.v3.x; v3y = element.v3.y;
				v4x = element.v4.x; v4y = element.v4.y;

				this.bboxRect.addPoint( v1x, v1y );
				this.bboxRect.addPoint( v2x, v2y );
				this.bboxRect.addPoint( v3x, v3y );
				this.bboxRect.addPoint( v4x, v4y );

        if ( this.clipRect.instersects( this.bboxRect ) ) {
          this.context.moveTo( v1x, v1y );
          this.context.lineTo( v2x, v2y );
          this.context.lineTo( v3x, v3y );
          this.context.lineTo( v4x, v4y );
          this.context.lineTo( v1x, v1y );
				}
      }

      this.context.closePath();

      element.material.map(material => {

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
          this.bboxRect.inflate( this.context.lineWidth );
				
				} else if (material instanceof FaceColorStrokeMaterial) {
				
					this.context.lineWidth = material.lineWidth;
					this.context.lineJoin = "round";
					this.context.lineCap = "round";
					
					this.context.strokeStyle = element.color.styleString;					
					this.context.stroke();
          this.bboxRect.inflate( this.context.lineWidth );
				} else if (material instanceof TextureUVMappingMaterial) {

          // debugger

					this.uvs = element.uvs;
					this.bitmap = material.bitmap,
					this.bitmap_width = this.bitmap.width,
					this.bitmap_height = this.bitmap.height;

          this.drawTexturedTriangle( this.bitmap, this.bboxRect, v1x, v1y, v2x, v2y, v3x, v3y,
						this.uvs[ 0 ].x * this.bitmap_width, this.uvs[ 0 ].y * this.bitmap_height,
						this.uvs[ 1 ].x * this.bitmap_width, this.uvs[ 1 ].y * this.bitmap_height,
						this.uvs[ 2 ].x * this.bitmap_width, this.uvs[ 2 ].y * this.bitmap_height );
        }

      })

    })
    
    this.clearRect.addRectangle( this.bboxRect );
  }

  drawTexturedTriangle( texture, bbox, x0, y0, x1, y1, x2, y2, sx0, sy0, sx1, sy1, sx2, sy2 ) {

		this.context.save();
		this.context.clip();

		this.denom = sx0 * ( sy2 - sy1 ) - sx1 * sy2 + sx2 * sy1 + ( sx1 - sx2 ) * sy0;
		this.m11 = - ( sy0 * (x2 - x1 ) - sy1 * x2 + sy2 * x1 + ( sy1 - sy2 ) * x0 ) / this.denom;
		this.m12 = ( sy1 * y2 + sy0 * ( y1 - y2 ) - sy2 * y1 + ( sy2 - sy1) * y0 ) / this.denom;
		this.m21 = ( sx0 * ( x2 - x1 ) - sx1 * x2 + sx2 * x1 + ( sx1 - sx2 ) * x0 ) / this.denom;
		this.m22 = - ( sx1 * y2 + sx0 * ( y1 - y2 ) - sx2 * y1 + ( sx2 - sx1 ) * y0 ) / this.denom;
		this.dx = ( sx0 * ( sy2 * x1 - sy1 * x2 ) + sy0 * ( sx1 * x2 - sx2 * x1 ) + ( sx2 * sy1 - sx1 * sy2 ) * x0 ) / this.denom;
		this.dy = ( sx0 * ( sy2 * y1 - sy1 * y2 ) + sy0 * ( sx1 * y2 - sx2 * y1 ) + ( sx2 * sy1 - sx1 * sy2 ) * y0 ) / this.denom;

		this.context.transform( this.m11, this.m12, this.m21, this.m22, this.dx, this.dy );
		this.context.drawImage( texture, 0, 0 );

		this.context.restore();

	}

  expand(a, b) {
		this.vector2.sub( b, a );
		this.vector2.unit();

    b.addSelf( this.vector2 );
		a.subSelf( this.vector2 );
  }
  
}

export { CanvasRender };