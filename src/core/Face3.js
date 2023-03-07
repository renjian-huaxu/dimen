import { Color } from './Color'
import { Vector3 } from './Vector3'

class Face3 {
  constructor(a, b, c, normal, color) {
    this.a = a;
    this.b = b;
    this.c = c;

    this.normal = normal || new Vector3();
    this.screen = new Vector3();

    this.color = color || new Color();
  }

  toString() {
    return 'DIMEN.Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';
  }
}

export { Face3 }