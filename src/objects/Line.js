import { Object3D } from "./Object3D";

class Line extends Object3D {
  constructor(geometry, material) {
    super(material);

    this.geometry = geometry;
  }
}

export { Line }