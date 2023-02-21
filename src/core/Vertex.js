import { Vector3 } from './Vector3'

class Vertex {
  constructor(position, normal) {
    this.position = position || new Vector3();
    this.normal = normal || new Vector3();
    this.screen = new Vector3();
    
    this.visible = true; // internal
  }

  toString() {
    return 'DIMEN.Vertex ( ' + this.position + ', ' + this.normal + ' )';
  }
}

export { Vertex }