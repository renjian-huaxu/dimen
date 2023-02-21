import { Color } from "../core/Color";

class ColorStrokeMaterial {
  constructor(hex, opacity) {
    this.lineWidth = lineWidth || 1;
    this.color = new Color( (opacity ? (opacity * 0xff) << 24 : 0xff000000) | hex );
  }

  toString() {
    return 'DIMEN.ColorStrokeMaterial ( lineWidth: ' + this.lineWidth + ', color: ' + this.color + ' )';
  }
}

export { ColorStrokeMaterial }