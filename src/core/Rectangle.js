class Rectangle {
  constructor( x1, y1, x2, y2 ) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    this.width = x2 - x1;
    this.height = y2 - y1;
    this.isEmpty = false;
  }

  resize() {
    this.width = this.x2 - this.x1;
    this.height = this.y2 - this.y1;
  }

  getX() {
    return this.x1;
  }

  getY() {
    return this.y1;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getX1() {
    return this.x1;
  }

  getY1() {
    return this.y1;
  }

  getX2() {
    return this.x2;
  }

  getY2() {
    return this.y2;
  }

  set( x1, y1, x2, y2 ) {
		this.isEmpty = false;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

		this.resize();
  }

  addPoint(x, y) {
    if (this.isEmpty) {
      this.isEmpty = false;
      this.x1 = x;
      this.y1 = y;
      this.x2 = x;
      this.y2 = y;
    } else {
      this.x1 = Math.min( this.x1, x );
			this.y1 = Math.min( this.y1, y );
			this.x2 = Math.max( this.x2, x );
			this.y2 = Math.max( this.y2, y );
    }

    this.resize()
  }

  addRectangle(r) {
    if (this.isEmpty) {
      this.isEmpty = false;
      this.x1 = r.getX1();
      this.y1 = r.getY1();
      this.x2 = r.getX2();
      this.y2 = r.getY2();
    } else {
      this.x1 = Math.min(this.x1, r.getX1());
			this.y1 = Math.min(this.y1, r.getY1());
			this.x2 = Math.max(this.x2, r.getX2());
			this.y2 = Math.max(this.y2, r.getY2());
    }
  }

  inflate(v) {
    this.x1 -= v; 
    this.y1 -= v;
		this.x2 += v; 
    this.y2 += v;

		this.resize();
  }

  minSelf(r) {
    this.x1 = Math.max( this.x1, r.getX1() );
		this.y1 = Math.max( this.y1, r.getY1() );
		this.x2 = Math.min( this.x2, r.getX2() );
		this.y2 = Math.min( this.y2, r.getY2() );

		this.resize();
  }

  instersects(r) {
    return Math.min( this.x2, r.getX2() ) - Math.max( this.x1, r.getX1() ) > 0 && Math.min( this.y2, r.getY2() ) - Math.max( this.y1, r.getY1() ) > 0;
  }

  empty() {
    this.isEmpty = true;

		this.x1 = 0; 
    this.y1 = 0;
		this.x2 = 0;
    this.y2 = 0;

		this.resize();
  }

  toString() {
    return "DIMEN.Rectangle (x1: " + this.x1 + ", y1: " + this.y2 + ", x2: " + this.x2 + ", y1: " + this.y1 + ", width: " + this.width + ", height: " + this.height + ")";
  }
}

export { Rectangle }