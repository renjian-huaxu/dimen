import { Object3D } from "./Object3D";

class Mesh extends Object3D {
  constructor(geometry, material) {
    super(material);

    this.geometry = geometry;
    this.doubleSided = false;
  }
}

export { Mesh }