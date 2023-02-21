import { Object3D } from "./Object3D";

class Particle extends Object3D {
  constructor(material) {
    super(material);

    this.size = 1;
  }
}

export { Particle }