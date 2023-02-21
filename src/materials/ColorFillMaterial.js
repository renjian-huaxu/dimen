import { Color } from "../core/Color";

class ColorFillMaterial {
  constructor(hex, opacity) {
    this.color = new Color( (opacity ? (opacity * 0xff) << 24 : 0xff000000) | hex );
  }

  toString() {
    return 'DIMEN.ColorFillMaterial ( color: ' + this.color + ' )';	
  }
}

export { ColorFillMaterial }