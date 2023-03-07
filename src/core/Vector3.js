class Vector3 {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  copy(v) {
    this.x = v.x;
		this.y = v.y;
		this.z = v.z;
  }

  add(v1, v2) {
		this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;
		this.z = v1.z + v2.z;	
  }

  addSelf(v) {
    this.x += v.x;
		this.y += v.y;
		this.z += v.z;
  }

  addScalar(s) {
    this.x += s;
    this.y += s;
    this.z += s;
  }

  sub(v1, v2) {
		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
		this.z = v1.z - v2.z;
  }

  subSelf(v) {
    this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
  }

  crossSelf(v) {
    let tx = this.x, ty = this.y, tz = this.z;

    this.x = ty * v.z - tz * v.y;
		this.y = tz * v.x - tx * v.z;
		this.z = tx * v.y - ty * v.x;
  }

  multiplySelf(v) {
    this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;
  }

  multiplyScalar(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  distanceTo(v) {
    return Math.sqrt( this.distanceToSquared( v ) );
  }

  distanceToSquared(v) {
    let dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
		return dx * dx + dy * dy + dz * dz;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  negate() {
    this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
  }

  normalize() {
		if (this.length() > 0) {

			this.multiplyScalar(1 / this.length());

		} else {

			this.multiplyScalar(0);

		}
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  toString() {
    return 'DIMEN.Vector3 (' + this.x + ', ' + this.y + ', ' + this.z + ')';
  }
}

export { Vector3 }