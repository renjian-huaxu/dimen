import { Geometry } from '../../core/Geometry'
import { Vertex } from '../../core/Vertex'
import { Vector3 } from '../../core/Vector3'
import { Face4 } from '../../core/Face4'

class Plane extends Geometry {

  constructor(width, height) {
    super();

    this.width_half = width / 2,
    this.height_half = height / 2;

    this.setup();
  }

  setup() {
    this.v( -this.width_half,  this.height_half, 0 );
    this.v(  this.width_half,  this.height_half, 0 );
    this.v(  this.width_half, -this.height_half, 0 );
    this.v( -this.width_half, -this.height_half, 0 );
      
    this.f4( 0, 1, 2, 3 );
  }

  v(x, y, z) {
		this.vertices.push( new Vertex( new Vector3( x, y, z ) ) );
	}

	f4(a, b, c, d) {
	
		this.faces.push( new Face4(a, b, c, d) );
	}	
}

export { Plane }