import { Vector2 } from '../../core/Vector2'

class RenderableFace4 {
  constructor() {
    this.v1 = new Vector2();
    this.v2 = new Vector2();
    this.v3 = new Vector2();
    this.v4 = new Vector2();	
    
    this.screenZ;
    
    this.color;
    this.material;
  }
}

export { RenderableFace4 };