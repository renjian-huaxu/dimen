class Vector4 {
  constructor(x, y, z, w) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.w = w || 1;
  }

  set(x, y, z, w) {
    this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
  }

  copy(v) {
    this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = v.w;
  }

  add(v1, v2) {
    this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;
		this.z = v1.z + v2.z;	
		this.w = v1.w + v2.w;
  }

  addSelf(v) {
    this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;
  }

  sub(v1, v2) {
    this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
		this.z = v1.z - v2.z;	
		this.w = v1.w - v2.w;
  }

  subSelf(v) {
    this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;
  }

  clone() {
    return new Vector4(this.x, this.y, this.z, this.w);
  }

  toVector3() {
    return new Vector3(this.x / this.w, this.y / this.w, this.z / this.w);
  }

  toString() {
    return 'Vector4 (' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')';
  }
}

export { Vector4 }