class Color {
  constructor(hex) {
    
    this.styleString = null;
    this.svgStyleString = null;

    this.setHex( hex );
  }

  setHex(hex) {
		this.hex = hex;
		this.updateRGBA();
		this.updateStyleString();
  }
  
  setRGBA(r, g, b, a) {
    this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;

    this.updateHex();
		this.updateStyleString();
  }

  updateHex() {
    this.hex = this.a << 24 | this.r << 16 | this.g << 8 | this.b;
  }

  updateRGBA() {
    this.r = this.hex >> 16 & 0xff;
		this.g = this.hex >> 8 & 0xff;
		this.b = this.hex & 0xff;
		this.a = this.hex >> 24 & 0xff;		
  }

  updateStyleString() {
    this.styleString = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + (this.a / 255) + ')';	
    this.svgStyleString = 'rgb(' + this.r + ',' + this.g + ',' + this.b + '); opacity: ' + ( this.a / 255 );
  }

  toString() {
    return 'DIMEN.Color ( r: ' + this.r + ', g: ' + this.g + ', b: ' + this.b + ', a: ' + this.a + ', hex: ' + this.hex + ', style: ' + this.styleString + ' )';	
  }
} 

export { Color }