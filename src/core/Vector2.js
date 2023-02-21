class Vector2 {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  copy(v) {
    this.x = v.x;
		this.y = v.y;
  }

  addSelf(v) {
    this.x += v.x;
		this.y += v.y;
  }

  add(v1, v2) {
    this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;
  }

  subSelf(v) {
    this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
  }

  multiply(s) {
    this.x *= s;
		this.y *= s;
  }

  unit() {
    this.multiply(1 / this.length());
  }

  expand(v1, v2) {
    this.unit( this.sub(v2, v1) );
		v2.addSelf(this);
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }

  negate() {
    this.x = -this.x;
		this.y = -this.y;
  }

  clone() {
    return Vector2(this.x, this.y);
  }

  toString() {
    return 'DIMEN.Vector2 (' + this.x + ', ' + this.y + ')';
  }
}

export { Vector2 }