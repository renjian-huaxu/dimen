import { Geometry } from '../../core/Geometry'
import { Vertex } from '../../core/Vertex'
import { Vector3 } from '../../core/Vector3'
import { Face3 } from '../../core/Face3'
import { Vector2 } from '../../Dimen'

class Plane extends Geometry {

  constructor(width, height, segments_width, segments_height) {
    super();

    this.width_half = width / 2;
    this.height_half = height / 2;
    this.gridX = segments_width || 1;
    this.gridY = segments_height || 1;

    this.gridX1 = this.gridX + 1;
    this.gridY1 = this.gridY + 1;

    this.segment_width = width / this.gridX;
    this.segment_height = height / this.gridY;

    this.setup();
  }

  setup() {
    for(let iy = 0; iy < this.gridY1; iy++) {

      for( let ix = 0; ix < this.gridX1; ix++ ) {

        const x = ix * this.segment_width - this.width_half;
        const y = iy * this.segment_height - this.height_half;

        console.log('x: y: ', x, y)


        this.vertices.push( new Vertex( new Vector3( x, -y, 0 ) ) );
  
      }
  
    }

    for(  let iy = 0; iy < this.gridY; iy++ ) {

      for( let ix = 0; ix < this.gridX; ix++ ) {

        let a = ix + this.gridX1 * iy;
        let b = ix + this.gridX1 * ( iy + 1 );
        let c = ( ix + 1 ) + this.gridX1 * iy;

        // console.log('a b c: ', a, b, c)

        this.faces.push( new Face3( a, b, c ) );
        this.uvs.push( [
              new Vector2( ix / this.gridX, iy / this.gridY ),
              new Vector2( ix / this.gridX, ( iy + 1 ) / this.gridY ),
              new Vector2( ( ix + 1 ) / this.gridX, iy / this.gridY )
            ] );
  
        a = ( ix + 1 ) + this.gridX1 * ( iy + 1 );
        b = ( ix + 1 ) + this.gridX1 * iy;
        c = ix + this.gridX1 * ( iy + 1 );

        this.faces.push( new Face3( a, b, c ) );
        this.uvs.push( [
              new Vector2( ( ix + 1 ) / this.gridX, ( iy + 1 ) / this.gridY ),
              new Vector2( ( ix + 1 ) / this.gridX, iy / this.gridY ),
              new Vector2( ix / this.gridX, ( iy + 1 ) / this.gridY )
            ] );
  
      }
  
    }

  }

}

export { Plane }