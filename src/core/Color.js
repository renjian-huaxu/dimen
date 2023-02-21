class Color {
  constructor(hex) {
    this._hex = hex;
    this.styleString = null;
    this.updateRGBA();
		this.updateStyleString();
  }
  
  setRGBA(r, g, b, a) {
    this._r = r;
		this._g = g;
		this._b = b;
		this._a = a;

    this.updateHex();
		this.updateStyleString();
  }

  updateHex() {
    this._hex = this._a << 24 | this._r << 16 | this._g << 8 | this._b;
  }

  updateRGBA() {
    this._r = this._hex >> 16 & 0xff;
		this._g = this._hex >> 8 & 0xff;
		this._b = this._hex & 0xff;
		this._a = this._hex >> 24 & 0xff;		
  }

  updateStyleString() {
    this.styleString = 'rgba(' + this._r + ',' + this._g + ',' + this._b + ',' + (this._a / 255) + ')';	
  }

  toString() {
    return 'DIMEN.Color ( r: ' + this._r + ', g: ' + this._g + ', b: ' + this._b + ', a: ' + this._a + ', hex: ' + this._hex + ', style: ' + this.styleString + ' )';	
  }
} 

export { Color }