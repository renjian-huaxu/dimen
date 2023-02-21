
import { Geometry } from '../../core/Geometry'
import { Vertex } from '../../core/Vertex'
import { Vector3 } from '../../core/Vector3'
import { Face4 } from '../../core/Face4'

class Cube extends Geometry{
  constructor(width, height, depth) {
      super();

      this.width = width;
      this.height = height;
      this.depth = depth;

      this.setup();
  }

  setup() {
    var width_half = this.width / 2,
    height_half = this.height / 2,
    depth_half = this.depth / 2;

    this.v(  width_half,  height_half, -depth_half );
    this.v(  width_half, -height_half, -depth_half );
    this.v( -width_half, -height_half, -depth_half );
    this.v( -width_half,  height_half, -depth_half );
    this.v(  width_half,  height_half,  depth_half );
    this.v(  width_half, -height_half,  depth_half );
    this.v( -width_half, -height_half,  depth_half );
    this.v( -width_half,  height_half,  depth_half );

    this.f4( 0, 1, 2, 3 );
    this.f4( 4, 7, 6, 5 );
    this.f4( 0, 4, 5, 1 );
    this.f4( 1, 5, 6, 2 );
    this.f4( 2, 6, 7, 3 );
    this.f4( 4, 0, 3, 7 );
  }

  v(x, y, z) {
    this.vertices.push( new Vertex( new Vector3( x, y, z ) ) );
  }

  f4(a, b, c, d) {
    this.faces.push( new Face4( a, b, c, d ) );
  }
}

export { Cube }