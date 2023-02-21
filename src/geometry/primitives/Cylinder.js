class Cylinder {
  constructor(numSegs, topRad, botRad, height, topOffset, botOffset) {
    this.numSegs = numSegs;
    this.topRad = topRad;
    this.botRad = botRad;
    this.height = height;
    this.topOffset = topOffset;
    this.botOffset = botOffset;

    setup();  
  }

  setup() {
    new Array(this.numSegs).map(v => {
      // Top circle vertices
      v( 
        Math.sin(2 * 3.1415 * i / this.numSegs)*this.topRad,
        Math.cos(2 * 3.1415 * i / this.numSegs)*this.topRad,
        0);

      // Bottom circle vertices
      v(  
        Math.sin(2 * 3.1415 * i / this.numSegs)*this.botRad,
        Math.cos(2 * 3.1415 * i / this.numSegs)*this.botRad,
        height);
      
      // FACES
      // Body	
      f4(i, i + this.numSegs, this.numSegs + (i + 1) % this.numSegs, (i + 1) % this.numSegs, '#ff0000');
    })

    // Bottom circle
    if (this.botRad != 0) {
    
      v(0, 0, -this.topOffset);
      
      for (i = this.numSegs; i < this.numSegs + (this.numSegs / 2); i++) {
      
        f4(2 * this.numSegs,
        (2 * i - 2 * this.numSegs) % this.numSegs,
        (2 * i - 2 * this.numSegs + 1) % this.numSegs,
        (2 * i - 2 * this.numSegs + 2) % this.numSegs);
      }
    }

    // Top circle
    if (this.topRad != 0) {
    
      v(0, 0, this.height + this.topOffset);
      
      for (i = this.numSegs + (this.numSegs / 2); i < 2 * this.numSegs; i++) {
      
        f4(	(2 * i - 2 * this.numSegs + 2) % this.numSegs + this.numSegs,
          (2 * i - 2 * this.numSegs + 1) % this.numSegs + this.numSegs,
          (2 * i - 2 * this.numSegs) % this.numSegs+this.numSegs, 
          2 * this.numSegs + 1);
      }
    }
  }

  v(x, y, z) {
		vertices.push( new Vertex( new Vector3( x, y, z ) ) );
	}

  f4(a, b, c, d) {
		faces.push( new Face4(a, b, c, d) );
	}	
}

export { Cylinder }