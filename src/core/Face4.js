import { Color } from './Color'
import { Vector3 } from './Vector3'

class Face4 {
    constructor(a, b, c, d, uv, normal, color) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      
      this.normal = normal || new Vector3();
      this.screen = new Vector3();

      this.uv = uv || [ [0,0], [0,0], [0,0], [0, 0] ];
      this.color = color || new Color();
    }

    toString() {
      return 'DIMEN.Face4 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' ' + this.d + ' )';
    }
}

export { Face4 }