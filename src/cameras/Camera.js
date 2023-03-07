import { Vector3 } from '../core/Vector3'
import { Matrix4 } from '../core/Matrix4'

class Camera {

  constructor(x, y, z) {
    this.position = new Vector3(x, y, z);
    this.target = {
      position: new Vector3(0, 0, 0)
    }

    this.matrix = new Matrix4();
    this.projectionMatrix = Matrix4.makePerspective(45, 1 /*SCREEN_WIDTH/SCREEN_HEIGHT*/, 0.001, 1000);
	
    this.up = new Vector3(0, 1, 0);
    this.roll = 0;
    
    // TODO: Need to remove this	
    this.zoom = 3;
    this.focus = 500;

    this.autoUpdateMatrix = true;

    this.updateMatrix();
  }

  updateMatrix() {
    this.matrix.lookAt(this.position, this.target.position, this.up);
  }

  toString() {
    return 'DIMEN.Camera ( ' + this.position + ', ' + this.target.position + ' )';
  }
}

export { Camera };