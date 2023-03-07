(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Dimen = {}));
})(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var Vector3$1 = /*#__PURE__*/function () {
    function Vector3(x, y, z) {
      _classCallCheck(this, Vector3);
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
    _createClass(Vector3, [{
      key: "set",
      value: function set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
      }
    }, {
      key: "copy",
      value: function copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
      }
    }, {
      key: "add",
      value: function add(v1, v2) {
        this.x = v1.x + v2.x;
        this.y = v1.y + v2.y;
        this.z = v1.z + v2.z;
      }
    }, {
      key: "addSelf",
      value: function addSelf(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
      }
    }, {
      key: "addScalar",
      value: function addScalar(s) {
        this.x += s;
        this.y += s;
        this.z += s;
      }
    }, {
      key: "sub",
      value: function sub(v1, v2) {
        this.x = v1.x - v2.x;
        this.y = v1.y - v2.y;
        this.z = v1.z - v2.z;
      }
    }, {
      key: "subSelf",
      value: function subSelf(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
      }
    }, {
      key: "crossSelf",
      value: function crossSelf(v) {
        var tx = this.x,
          ty = this.y,
          tz = this.z;
        this.x = ty * v.z - tz * v.y;
        this.y = tz * v.x - tx * v.z;
        this.z = tx * v.y - ty * v.x;
      }
    }, {
      key: "multiplySelf",
      value: function multiplySelf(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
      }
    }, {
      key: "dot",
      value: function dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
      }
    }, {
      key: "distanceTo",
      value: function distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
      }
    }, {
      key: "distanceToSquared",
      value: function distanceToSquared(v) {
        var dx = this.x - v.x,
          dy = this.y - v.y,
          dz = this.z - v.z;
        return dx * dx + dy * dy + dz * dz;
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }
    }, {
      key: "negate",
      value: function negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
      }
    }, {
      key: "normalize",
      value: function normalize() {
        if (this.length() > 0) {
          this.multiplyScalar(1 / this.length());
        } else {
          this.multiplyScalar(0);
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Vector3(this.x, this.y, this.z);
      }
    }, {
      key: "toString",
      value: function toString() {
        return 'DIMEN.Vector3 (' + this.x + ', ' + this.y + ', ' + this.z + ')';
      }
    }]);
    return Vector3;
  }();

  var Vector4 = /*#__PURE__*/function () {
    function Vector4(x, y, z, w) {
      _classCallCheck(this, Vector4);
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.w = w || 1;
    }
    _createClass(Vector4, [{
      key: "set",
      value: function set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
      }
    }, {
      key: "copy",
      value: function copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        this.w = v.w;
      }
    }, {
      key: "add",
      value: function add(v1, v2) {
        this.x = v1.x + v2.x;
        this.y = v1.y + v2.y;
        this.z = v1.z + v2.z;
        this.w = v1.w + v2.w;
      }
    }, {
      key: "addSelf",
      value: function addSelf(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;
      }
    }, {
      key: "sub",
      value: function sub(v1, v2) {
        this.x = v1.x - v2.x;
        this.y = v1.y - v2.y;
        this.z = v1.z - v2.z;
        this.w = v1.w - v2.w;
      }
    }, {
      key: "subSelf",
      value: function subSelf(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Vector4(this.x, this.y, this.z, this.w);
      }
    }, {
      key: "toVector3",
      value: function toVector3() {
        return new Vector3(this.x / this.w, this.y / this.w, this.z / this.w);
      }
    }, {
      key: "toString",
      value: function toString() {
        return 'Vector4 (' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')';
      }
    }]);
    return Vector4;
  }();

  var Matrix4 = /*#__PURE__*/function () {
    function Matrix4() {
      _classCallCheck(this, Matrix4);
      this.x = new Vector3$1();
      this.y = new Vector3$1();
      this.z = new Vector3$1();
      this.n11 = 1;
      this.n12 = 0;
      this.n13 = 0;
      this.n14 = 0;
      this.n21 = 0;
      this.n22 = 1;
      this.n23 = 0;
      this.n24 = 0;
      this.n31 = 0;
      this.n32 = 0;
      this.n33 = 1;
      this.n34 = 0;
      this.n41 = 0;
      this.n42 = 0;
      this.n43 = 0;
      this.n44 = 1;
    }
    _createClass(Matrix4, [{
      key: "identity",
      value: function identity() {
        this.n11 = 1;
        this.n12 = 0;
        this.n13 = 0;
        this.n14 = 0;
        this.n21 = 0;
        this.n22 = 1;
        this.n23 = 0;
        this.n24 = 0;
        this.n31 = 0;
        this.n32 = 0;
        this.n33 = 1;
        this.n34 = 0;
        this.n41 = 0;
        this.n42 = 0;
        this.n43 = 0;
        this.n44 = 1;
      }
    }, {
      key: "lookAt",
      value: function lookAt(eye, center, up) {
        this.z.sub(center, eye);
        this.z.normalize();
        this.x.copy(this.z);
        this.x.crossSelf(up);
        this.x.normalize();
        this.y.copy(this.x);
        this.y.crossSelf(this.z);
        this.y.normalize();
        this.y.negate(); //

        this.n11 = this.x.x;
        this.n12 = this.x.y;
        this.n13 = this.x.z;
        this.n14 = -this.x.dot(eye);
        this.n21 = this.y.x;
        this.n22 = this.y.y;
        this.n23 = this.y.z;
        this.n24 = -this.y.dot(eye);
        this.n31 = this.z.x;
        this.n32 = this.z.y;
        this.n33 = this.z.z;
        this.n34 = -this.z.dot(eye);
      }
    }, {
      key: "transform",
      value: function transform(v) {
        var vx = v.x,
          vy = v.y,
          vz = v.z,
          vw = v.w ? v.w : 1.0;
        v.x = this.n11 * vx + this.n12 * vy + this.n13 * vz + this.n14 * vw;
        v.y = this.n21 * vx + this.n22 * vy + this.n23 * vz + this.n24 * vw;
        v.z = this.n31 * vx + this.n32 * vy + this.n33 * vz + this.n34 * vw;
        vw = this.n41 * vx + this.n42 * vy + this.n43 * vz + this.n44 * vw;
        if (v.w) {
          v.w = vw;
        } else {
          v.x = v.x / vw;
          v.y = v.y / vw;
          v.z = v.z / vw;
        }
      }
    }, {
      key: "crossVector",
      value: function crossVector(a) {
        var v = new Vector4();
        v.x = this.n11 * a.x + this.n12 * a.y + this.n13 * a.z + this.n14 * a.w;
        v.y = this.n21 * a.x + this.n22 * a.y + this.n23 * a.z + this.n24 * a.w;
        v.z = this.n31 * a.x + this.n32 * a.y + this.n33 * a.z + this.n34 * a.w;
        v.w = a.w ? this.n41 * a.x + this.n42 * a.y + this.n43 * a.z + this.n44 * a.w : 1;
        return v;
      }
    }, {
      key: "multiply",
      value: function multiply(a, b) {
        this.n11 = a.n11 * b.n11 + a.n12 * b.n21 + a.n13 * b.n31 + a.n14 * b.n41;
        this.n12 = a.n11 * b.n12 + a.n12 * b.n22 + a.n13 * b.n32 + a.n14 * b.n42;
        this.n13 = a.n11 * b.n13 + a.n12 * b.n23 + a.n13 * b.n33 + a.n14 * b.n43;
        this.n14 = a.n11 * b.n14 + a.n12 * b.n24 + a.n13 * b.n34 + a.n14 * b.n44;
        this.n21 = a.n21 * b.n11 + a.n22 * b.n21 + a.n23 * b.n31 + a.n24 * b.n41;
        this.n22 = a.n21 * b.n12 + a.n22 * b.n22 + a.n23 * b.n32 + a.n24 * b.n42;
        this.n23 = a.n21 * b.n13 + a.n22 * b.n23 + a.n23 * b.n33 + a.n24 * b.n34;
        this.n24 = a.n21 * b.n14 + a.n22 * b.n24 + a.n23 * b.n34 + a.n24 * b.n44;
        this.n31 = a.n31 * b.n11 + a.n32 * b.n21 + a.n33 * b.n31 + a.n34 * b.n41;
        this.n32 = a.n31 * b.n12 + a.n32 * b.n22 + a.n33 * b.n32 + a.n34 * b.n42;
        this.n33 = a.n31 * b.n13 + a.n32 * b.n23 + a.n33 * b.n33 + a.n34 * b.n43;
        this.n34 = a.n31 * b.n14 + a.n32 * b.n24 + a.n33 * b.n34 + a.n34 * b.n44;
        this.n41 = a.n41 * b.n11 + a.n42 * b.n21 + a.n43 * b.n31 + a.n44 * b.n41;
        this.n42 = a.n41 * b.n12 + a.n42 * b.n22 + a.n43 * b.n32 + a.n44 * b.n42;
        this.n43 = a.n41 * b.n13 + a.n42 * b.n23 + a.n43 * b.n33 + a.n44 * b.n43;
        this.n44 = a.n41 * b.n14 + a.n42 * b.n24 + a.n43 * b.n34 + a.n44 * b.n44;
      }
    }, {
      key: "multiplySelf",
      value: function multiplySelf(m) {
        var n11 = this.n11,
          n12 = this.n12,
          n13 = this.n13,
          n14 = this.n14,
          n21 = this.n21,
          n22 = this.n22,
          n23 = this.n23,
          n24 = this.n24,
          n31 = this.n31,
          n32 = this.n32,
          n33 = this.n33,
          n34 = this.n34,
          n41 = this.n41,
          n42 = this.n42,
          n43 = this.n43,
          n44 = this.n44;
        this.n11 = n11 * m.n11 + n12 * m.n21 + n13 * m.n31 + n14 * m.n41;
        this.n12 = n11 * m.n12 + n12 * m.n22 + n13 * m.n32 + n14 * m.n42;
        this.n13 = n11 * m.n13 + n12 * m.n23 + n13 * m.n33 + n14 * m.n43;
        this.n14 = n11 * m.n14 + n12 * m.n24 + n13 * m.n34 + n14 * m.n44;
        this.n21 = n21 * m.n11 + n22 * m.n21 + n23 * m.n31 + n24 * m.n41;
        this.n22 = n21 * m.n12 + n22 * m.n22 + n23 * m.n32 + n24 * m.n42;
        this.n23 = n21 * m.n13 + n22 * m.n23 + n23 * m.n33 + n24 * m.n43;
        this.n24 = n21 * m.n14 + n22 * m.n24 + n23 * m.n34 + n24 * m.n44;
        this.n31 = n31 * m.n11 + n32 * m.n21 + n33 * m.n31 + n34 * m.n41;
        this.n32 = n31 * m.n12 + n32 * m.n22 + n33 * m.n32 + n34 * m.n42;
        this.n33 = n31 * m.n13 + n32 * m.n23 + n33 * m.n33 + n34 * m.n43;
        this.n34 = n31 * m.n14 + n32 * m.n24 + n33 * m.n34 + n34 * m.n44;
        this.n41 = n41 * m.n11 + n42 * m.n21 + n43 * m.n31 + n44 * m.n41;
        this.n42 = n41 * m.n12 + n42 * m.n22 + n43 * m.n32 + n44 * m.n42;
        this.n43 = n41 * m.n13 + n42 * m.n23 + n43 * m.n33 + n44 * m.n43;
        this.n44 = n41 * m.n14 + n42 * m.n24 + n43 * m.n34 + n44 * m.n44;
      }
    }, {
      key: "clone",
      value: function clone() {
        var m = new Matrix4();
        m.n11 = this.n11;
        m.n12 = this.n12;
        m.n13 = this.n13;
        m.n14 = this.n14;
        m.n21 = this.n21;
        m.n22 = this.n22;
        m.n23 = this.n23;
        m.n24 = this.n24;
        m.n31 = this.n31;
        m.n32 = this.n32;
        m.n33 = this.n33;
        m.n34 = this.n34;
        m.n41 = this.n41;
        m.n42 = this.n42;
        m.n43 = this.n43;
        m.n44 = this.n44;
        return m;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "| " + this.n11 + " " + this.n12 + " " + this.n13 + " " + this.n14 + " |\n" + "| " + this.n21 + " " + this.n22 + " " + this.n23 + " " + this.n24 + " |\n" + "| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |\n" + "| " + this.n41 + " " + this.n42 + " " + this.n43 + " " + this.n44 + " |";
      }
    }], [{
      key: "translationMatrix",
      value: function translationMatrix(x, y, z) {
        var m = new Matrix4();
        m.n14 = x;
        m.n24 = y;
        m.n34 = z;
        return m;
      }
    }, {
      key: "scaleMatrix",
      value: function scaleMatrix(x, y, z) {
        var m = new Matrix4();
        m.n11 = x;
        m.n22 = y;
        m.n33 = z;
        return m;
      }
    }, {
      key: "rotationXMatrix",
      value: function rotationXMatrix(theta) {
        var rot = new Matrix4();
        rot.n22 = rot.n33 = Math.cos(theta);
        rot.n32 = Math.sin(theta);
        rot.n23 = -rot.n32;
        return rot;
      }
    }, {
      key: "rotationYMatrix",
      value: function rotationYMatrix(theta) {
        var rot = new Matrix4();
        rot.n11 = rot.n33 = Math.cos(theta);
        rot.n13 = Math.sin(theta);
        rot.n31 = -rot.n13;
        return rot;
      }
    }, {
      key: "rotationZMatrix",
      value: function rotationZMatrix(theta) {
        var rot = new Matrix4();
        rot.n11 = rot.n22 = Math.cos(theta);
        rot.n21 = Math.sin(theta);
        rot.n12 = -rot.n21;
        return rot;
      }
    }, {
      key: "makeFrustum",
      value: function makeFrustum(left, right, bottom, top, near, far) {
        var m = new Matrix4(),
          x = 2 * near / (right - left),
          y = 2 * near / (top - bottom),
          a = (right + left) / (right - left),
          b = (top + bottom) / (top - bottom),
          c = -(far + near) / (far - near),
          d = -2 * far * near / (far - near);
        m.n11 = x;
        m.n13 = a;
        m.n22 = y;
        m.n23 = b;
        m.n33 = c;
        m.n34 = d;
        m.n43 = -1;
        m.n44 = 0;
        return m;
      }
    }, {
      key: "makePerspective",
      value: function makePerspective(fovy, aspect, near, far) {
        var ymax = near * Math.tan(fovy * 0.00872664625972),
          ymin = -ymax,
          xmin = ymin * aspect,
          xmax = ymax * aspect;
        return Matrix4.makeFrustum(xmin, xmax, ymin, ymax, near, far);
      }
    }]);
    return Matrix4;
  }();

  var Object3D = /*#__PURE__*/function () {
    function Object3D(material) {
      _classCallCheck(this, Object3D);
      this.position = new Vector3$1(0, 0, 0);
      this.rotation = new Vector3$1(0, 0, 0);
      this.scale = new Vector3$1(1, 1, 1);
      this.matrix = new Matrix4();
      this.screen = new Vector3$1(0, 0, 0);
      this.material = material instanceof Array ? material : [material];
      this.autoUpdateMatrix = true;
    }
    _createClass(Object3D, [{
      key: "updateMatrix",
      value: function updateMatrix() {
        this.matrix.identity();
        this.matrix.multiplySelf(Matrix4.translationMatrix(this.position.x, this.position.y, this.position.z));
        this.matrix.multiplySelf(Matrix4.rotationXMatrix(this.rotation.x));
        this.matrix.multiplySelf(Matrix4.rotationYMatrix(this.rotation.y));
        this.matrix.multiplySelf(Matrix4.rotationZMatrix(this.rotation.z));
        this.matrix.multiplySelf(Matrix4.scaleMatrix(this.scale.x, this.scale.y, this.scale.z));
      }
    }]);
    return Object3D;
  }();

  var Mesh = /*#__PURE__*/function (_Object3D) {
    _inherits(Mesh, _Object3D);
    var _super = _createSuper(Mesh);
    function Mesh(geometry, material) {
      var _this;
      _classCallCheck(this, Mesh);
      _this = _super.call(this, material);
      _this.geometry = geometry;
      _this.doubleSided = false;
      return _this;
    }
    return _createClass(Mesh);
  }(Object3D);

  var Color = /*#__PURE__*/function () {
    function Color(hex) {
      _classCallCheck(this, Color);
      this.styleString = null;
      this.svgStyleString = null;
      this.setHex(hex);
    }
    _createClass(Color, [{
      key: "setHex",
      value: function setHex(hex) {
        this.hex = hex;
        this.updateRGBA();
        this.updateStyleString();
      }
    }, {
      key: "setRGBA",
      value: function setRGBA(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.updateHex();
        this.updateStyleString();
      }
    }, {
      key: "updateHex",
      value: function updateHex() {
        this.hex = this.a << 24 | this.r << 16 | this.g << 8 | this.b;
      }
    }, {
      key: "updateRGBA",
      value: function updateRGBA() {
        this.r = this.hex >> 16 & 0xff;
        this.g = this.hex >> 8 & 0xff;
        this.b = this.hex & 0xff;
        this.a = this.hex >> 24 & 0xff;
      }
    }, {
      key: "updateStyleString",
      value: function updateStyleString() {
        this.styleString = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a / 255 + ')';
        this.svgStyleString = 'rgb(' + this.r + ',' + this.g + ',' + this.b + '); opacity: ' + this.a / 255;
      }
    }, {
      key: "toString",
      value: function toString() {
        return 'DIMEN.Color ( r: ' + this.r + ', g: ' + this.g + ', b: ' + this.b + ', a: ' + this.a + ', hex: ' + this.hex + ', style: ' + this.styleString + ' )';
      }
    }]);
    return Color;
  }();

  var Face3 = /*#__PURE__*/function () {
    function Face3(a, b, c, normal, color) {
      _classCallCheck(this, Face3);
      this.a = a;
      this.b = b;
      this.c = c;
      this.normal = normal || new Vector3$1();
      this.screen = new Vector3$1();
      this.color = color || new Color();
    }
    _createClass(Face3, [{
      key: "toString",
      value: function toString() {
        return 'DIMEN.Face3 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' )';
      }
    }]);
    return Face3;
  }();

  var Face4 = /*#__PURE__*/function () {
    function Face4(a, b, c, d, normal, color) {
      _classCallCheck(this, Face4);
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.normal = normal || new Vector3$1();
      this.screen = new Vector3$1();
      this.color = color || new Color();
    }
    _createClass(Face4, [{
      key: "toString",
      value: function toString() {
        return 'DIMEN.Face4 ( ' + this.a + ', ' + this.b + ', ' + this.c + ' ' + this.d + ' )';
      }
    }]);
    return Face4;
  }();

  var Particle = /*#__PURE__*/function (_Object3D) {
    _inherits(Particle, _Object3D);
    var _super = _createSuper(Particle);
    function Particle(material) {
      var _this;
      _classCallCheck(this, Particle);
      _this = _super.call(this, material);
      _this.size = 1;
      return _this;
    }
    return _createClass(Particle);
  }(Object3D);

  var Vector2 = /*#__PURE__*/function () {
    function Vector2(x, y) {
      _classCallCheck(this, Vector2);
      this.x = x || 0;
      this.y = y || 0;
    }
    _createClass(Vector2, [{
      key: "set",
      value: function set(x, y) {
        this.x = x;
        this.y = y;
      }
    }, {
      key: "copy",
      value: function copy(v) {
        this.x = v.x;
        this.y = v.y;
      }
    }, {
      key: "addSelf",
      value: function addSelf(v) {
        this.x += v.x;
        this.y += v.y;
      }
    }, {
      key: "add",
      value: function add(v1, v2) {
        this.x = v1.x + v2.x;
        this.y = v1.y + v2.y;
      }
    }, {
      key: "subSelf",
      value: function subSelf(v) {
        this.x -= v.x;
        this.y -= v.y;
      }
    }, {
      key: "sub",
      value: function sub(v1, v2) {
        this.x = v1.x - v2.x;
        this.y = v1.y - v2.y;
      }
    }, {
      key: "multiplyScalar",
      value: function multiplyScalar(s) {
        this.x *= s;
        this.y *= s;
      }
    }, {
      key: "unit",
      value: function unit() {
        this.multiplyScalar(1 / this.length());
      }
    }, {
      key: "length",
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
    }, {
      key: "lengthSq",
      value: function lengthSq() {
        return this.x * this.x + this.y * this.y;
      }
    }, {
      key: "negate",
      value: function negate() {
        this.x = -this.x;
        this.y = -this.y;
      }
    }, {
      key: "clone",
      value: function clone() {
        return Vector2(this.x, this.y);
      }
    }, {
      key: "toString",
      value: function toString() {
        return 'DIMEN.Vector2 (' + this.x + ', ' + this.y + ')';
      }
    }]);
    return Vector2;
  }();

  var RenderableFace3 = /*#__PURE__*/_createClass(function RenderableFace3() {
    _classCallCheck(this, RenderableFace3);
    this.v1 = new Vector2();
    this.v2 = new Vector2();
    this.v3 = new Vector2();
    this.screenZ;
    this.color;
    this.material;
  });

  var RenderableFace4 = /*#__PURE__*/_createClass(function RenderableFace4() {
    _classCallCheck(this, RenderableFace4);
    this.v1 = new Vector2();
    this.v2 = new Vector2();
    this.v3 = new Vector2();
    this.v4 = new Vector2();
    this.screenZ;
    this.color;
    this.material;
  });

  var RenderableParticle = /*#__PURE__*/_createClass(function RenderableParticle() {
    _classCallCheck(this, RenderableParticle);
    this.x;
    this.y;
    this.screenZ;
    this.color;
    this.material;
  });

  var Renderer = /*#__PURE__*/function () {
    function Renderer() {
      _classCallCheck(this, Renderer);
      this.renderList = [];
      this.face3Pool = [];
      this.face4Pool = [];
      this.particlePool = [];
      this.matrix = new Matrix4();
    }
    _createClass(Renderer, [{
      key: "sort",
      value: function sort(a, b) {
        return a.screenZ - b.screenZ;
      }
    }, {
      key: "project",
      value: function project(scene, camera) {
        var _this = this;
        this.renderList = [];
        var v1,
          v2,
          v3,
          v4,
          face3count = 0,
          face4count = 0,
          particleCount = 0,
          camerafocus = camera.focus,
          focuszoom = camera.focus * camera.zoom;
        if (camera.autoUpdateMatrix) {
          camera.updateMatrix();
        }
        scene.objects.map(function (object) {
          if (object.autoUpdateMatrix) {
            object.updateMatrix();
          }
          if (object instanceof Mesh) {
            _this.matrix.multiply(camera.matrix, object.matrix);
            object.geometry.vertices.map(function (vertex) {
              vertex.screen.copy(vertex.position);
              _this.matrix.transform(vertex.screen);
              vertex.screen.z = focuszoom / (camerafocus + vertex.screen.z);
              vertex.visible = vertex.screen.z > 0;
              vertex.screen.x *= vertex.screen.z;
              vertex.screen.y *= vertex.screen.z;
            });
            object.geometry.faces.map(function (face, index) {
              if (face instanceof Face3) {
                v1 = object.geometry.vertices[face.a];
                v2 = object.geometry.vertices[face.b];
                v3 = object.geometry.vertices[face.c];
                if (v1.visible && v2.visible && v3.visible && (object.doubleSided || (v3.screen.x - v1.screen.x) * (v2.screen.y - v1.screen.y) - (v3.screen.y - v1.screen.y) * (v2.screen.x - v1.screen.x) > 0)) {
                  face.screen.z = (v1.screen.z + v2.screen.z + v3.screen.z) * 0.3;
                  if (!_this.face3Pool[face3count]) {
                    _this.face3Pool[face3count] = new RenderableFace3();
                  }
                  _this.face3Pool[face3count].v1.x = v1.screen.x;
                  _this.face3Pool[face3count].v1.y = v1.screen.y;
                  _this.face3Pool[face3count].v2.x = v2.screen.x;
                  _this.face3Pool[face3count].v2.y = v2.screen.y;
                  _this.face3Pool[face3count].v3.x = v3.screen.x;
                  _this.face3Pool[face3count].v3.y = v3.screen.y;
                  _this.face3Pool[face3count].screenZ = face.screen.z;
                  _this.face3Pool[face3count].material = object.material;
                  _this.face3Pool[face3count].uvs = object.geometry.uvs[index];
                  _this.face3Pool[face3count].color = face.color;
                  _this.renderList.push(_this.face3Pool[face3count]);
                  face3count++;
                }
              } else if (face instanceof Face4) {
                v1 = object.geometry.vertices[face.a];
                v2 = object.geometry.vertices[face.b];
                v3 = object.geometry.vertices[face.c];
                v4 = object.geometry.vertices[face.d];
                if (v1.visible && v2.visible && v3.visible && v4.visible && (object.doubleSided || (v4.screen.x - v1.screen.x) * (v2.screen.y - v1.screen.y) - (v4.screen.y - v1.screen.y) * (v2.screen.x - v1.screen.x) > 0 || (v2.screen.x - v3.screen.x) * (v4.screen.y - v3.screen.y) - (v2.screen.y - v3.screen.y) * (v4.screen.x - v3.screen.x) > 0)) {
                  face.screen.z = (v1.screen.z + v2.screen.z + v3.screen.z + v4.screen.z) * 0.25;
                  if (_this.face4Pool[face4count] == null) {
                    _this.face4Pool[face4count] = new RenderableFace4();
                  }
                  _this.face4Pool[face4count].v1.x = v1.screen.x;
                  _this.face4Pool[face4count].v1.y = v1.screen.y;
                  _this.face4Pool[face4count].v2.x = v2.screen.x;
                  _this.face4Pool[face4count].v2.y = v2.screen.y;
                  _this.face4Pool[face4count].v3.x = v3.screen.x;
                  _this.face4Pool[face4count].v3.y = v3.screen.y;
                  _this.face4Pool[face4count].v4.x = v4.screen.x;
                  _this.face4Pool[face4count].v4.y = v4.screen.y;
                  _this.face4Pool[face4count].screenZ = face.screen.z;
                  _this.face4Pool[face4count].color = face.color;
                  _this.face4Pool[face4count].material = object.material;
                  _this.renderList.push(_this.face4Pool[face4count]);
                  face4count++;
                }
              }
            });
          } else if (object instanceof Particle) {
            object.screen.copy(object.position);
            camera.matrix.transform(object.screen);
            object.screen.z = focuszoom / (camerafocus + object.screen.z);
            if (object.screen.z > 0) {
              object.screen.x *= object.screen.z;
              object.screen.y *= object.screen.z;
              if (_this.particlePool[particleCount] == null) {
                _this.particlePool[particleCount] = new RenderableParticle();
              }
              _this.particlePool[particleCount].x = object.screen.x;
              _this.particlePool[particleCount].y = object.screen.y;
              _this.particlePool[particleCount].screenZ = object.screen.z;
              _this.particlePool[particleCount].size = object.size;
              _this.particlePool[particleCount].material = object.material;
              _this.particlePool[particleCount].color = object.color;
              _this.renderList.push(_this.particlePool[particleCount]);
              particleCount++;
            }
          }
        });
        this.renderList.sort(this.sort);
      }
    }]);
    return Renderer;
  }();

  var ColorFillMaterial = /*#__PURE__*/function () {
    function ColorFillMaterial(hex, opacity) {
      _classCallCheck(this, ColorFillMaterial);
      this.color = new Color((opacity ? opacity * 0xff << 24 : 0xff000000) | hex);
    }
    _createClass(ColorFillMaterial, [{
      key: "toString",
      value: function toString() {
        return 'DIMEN.ColorFillMaterial ( color: ' + this.color + ' )';
      }
    }]);
    return ColorFillMaterial;
  }();

  var ColorStrokeMaterial = /*#__PURE__*/function () {
    function ColorStrokeMaterial(hex, opacity) {
      _classCallCheck(this, ColorStrokeMaterial);
      this.lineWidth = lineWidth || 1;
      this.color = new Color((opacity ? opacity * 0xff << 24 : 0xff000000) | hex);
    }
    _createClass(ColorStrokeMaterial, [{
      key: "toString",
      value: function toString() {
        return 'DIMEN.ColorStrokeMaterial ( lineWidth: ' + this.lineWidth + ', color: ' + this.color + ' )';
      }
    }]);
    return ColorStrokeMaterial;
  }();

  var FaceColorStrokeMaterial = /*#__PURE__*/function () {
    function FaceColorStrokeMaterial(lineWidth) {
      _classCallCheck(this, FaceColorStrokeMaterial);
      this.lineWidth = lineWidth || 1;
    }
    _createClass(FaceColorStrokeMaterial, [{
      key: "toString",
      value: function toString() {
        return 'DIMEN.FaceColorStrokeMaterial ( lineWidth: ' + this.lineWidth + ' )';
      }
    }]);
    return FaceColorStrokeMaterial;
  }();

  var FaceColorFillMaterial = /*#__PURE__*/function () {
    function FaceColorFillMaterial() {
      _classCallCheck(this, FaceColorFillMaterial);
    }
    _createClass(FaceColorFillMaterial, [{
      key: "toString",
      value: function toString() {
        return 'DIMEN.FaceColorFillMaterial ( )';
      }
    }]);
    return FaceColorFillMaterial;
  }();

  var TextureUVMappingMaterial = /*#__PURE__*/function () {
    function TextureUVMappingMaterial(bitmap) {
      _classCallCheck(this, TextureUVMappingMaterial);
      this.bitmap = bitmap;
    }
    _createClass(TextureUVMappingMaterial, [{
      key: "toString",
      value: function toString() {
        return 'DIMEMN.TextureUVMappingMaterial ( bitmap: ' + this.bitmap + ' )';
      }
    }]);
    return TextureUVMappingMaterial;
  }();

  var Rectangle = /*#__PURE__*/function () {
    function Rectangle(x1, y1, x2, y2) {
      _classCallCheck(this, Rectangle);
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.width = x2 - x1;
      this.height = y2 - y1;
      this.isEmpty = false;
    }
    _createClass(Rectangle, [{
      key: "resize",
      value: function resize() {
        this.width = this.x2 - this.x1;
        this.height = this.y2 - this.y1;
      }
    }, {
      key: "getX",
      value: function getX() {
        return this.x1;
      }
    }, {
      key: "getY",
      value: function getY() {
        return this.y1;
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.width;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.height;
      }
    }, {
      key: "getX1",
      value: function getX1() {
        return this.x1;
      }
    }, {
      key: "getY1",
      value: function getY1() {
        return this.y1;
      }
    }, {
      key: "getX2",
      value: function getX2() {
        return this.x2;
      }
    }, {
      key: "getY2",
      value: function getY2() {
        return this.y2;
      }
    }, {
      key: "set",
      value: function set(x1, y1, x2, y2) {
        this.isEmpty = false;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.resize();
      }
    }, {
      key: "addPoint",
      value: function addPoint(x, y) {
        if (this.isEmpty) {
          this.isEmpty = false;
          this.x1 = x;
          this.y1 = y;
          this.x2 = x;
          this.y2 = y;
        } else {
          this.x1 = Math.min(this.x1, x);
          this.y1 = Math.min(this.y1, y);
          this.x2 = Math.max(this.x2, x);
          this.y2 = Math.max(this.y2, y);
        }
        this.resize();
      }
    }, {
      key: "addRectangle",
      value: function addRectangle(r) {
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
    }, {
      key: "inflate",
      value: function inflate(v) {
        this.x1 -= v;
        this.y1 -= v;
        this.x2 += v;
        this.y2 += v;
        this.resize();
      }
    }, {
      key: "minSelf",
      value: function minSelf(r) {
        this.x1 = Math.max(this.x1, r.getX1());
        this.y1 = Math.max(this.y1, r.getY1());
        this.x2 = Math.min(this.x2, r.getX2());
        this.y2 = Math.min(this.y2, r.getY2());
        this.resize();
      }
    }, {
      key: "instersects",
      value: function instersects(r) {
        return Math.min(this.x2, r.getX2()) - Math.max(this.x1, r.getX1()) > 0 && Math.min(this.y2, r.getY2()) - Math.max(this.y1, r.getY1()) > 0;
      }
    }, {
      key: "empty",
      value: function empty() {
        this.isEmpty = true;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.resize();
      }
    }, {
      key: "toString",
      value: function toString() {
        return "DIMEN.Rectangle (x1: " + this.x1 + ", y1: " + this.y2 + ", x2: " + this.x2 + ", y1: " + this.y1 + ", width: " + this.width + ", height: " + this.height + ")";
      }
    }]);
    return Rectangle;
  }();

  var CanvasRender = /*#__PURE__*/function (_Renderer) {
    _inherits(CanvasRender, _Renderer);
    var _super = _createSuper(CanvasRender);
    function CanvasRender() {
      var _this;
      _classCallCheck(this, CanvasRender);
      _this = _super.call(this);
      _this.viewport = document.createElement("canvas");
      _this.context = _this.viewport.getContext("2d");
      _this.domElement = _this.viewport;
      _this.clipRect = new Rectangle();
      _this.clearRect = new Rectangle(0, 0, 0, 0), _this.bboxRect = new Rectangle();
      _this.vector2 = new Vector2();
      _this.uvs = null;
      _this.bitmap = null;
      _this.bitmap_width = null;
      _this.bitmap_height = null;
      _this.denom = null;
      _this.m11 = null;
      _this.m12 = null;
      _this.m21 = null;
      _this.m22 = null;
      _this.dx = null;
      _this.dy = null;
      return _this;
    }
    _createClass(CanvasRender, [{
      key: "setSize",
      value: function setSize(width, height) {
        this.viewport.width = width;
        this.viewport.height = height;
        this.context.setTransform(1, 0, 0, 1, width / 2, height / 2);
        this.clipRect.set(-width / 2, -height / 2, width / 2, height / 2);
      }
    }, {
      key: "render",
      value: function render(scene, camera) {
        var _this2 = this;
        var pi2 = Math.PI * 2;
        var size, v1x, v1y, v2x, v2y, v3x, v3y, v4x, v4y;
        this.clearRect.inflate(1);
        this.clearRect.minSelf(this.clipRect);
        this.context.clearRect(-this.viewport.width / 2, -this.viewport.height / 2, this.viewport.width, this.viewport.height);
        this.clearRect.empty();
        this.project(scene, camera);
        this.renderList.map(function (element) {
          _this2.bboxRect.empty();
          _this2.context.beginPath();
          if (element instanceof RenderableParticle) {
            size = element.size * element.screenZ;
            _this2.bboxRect.set(element.x - size, element.y - size, element.x + size, element.y + size);
            if (_this2.clipRect.instersects(_this2.bboxRect)) {
              _this2.context.arc(element.x, element.y, size, 0, pi2, true);
            }
          } else if (element instanceof RenderableFace3) {
            _this2.expand(element.v1, element.v2);
            _this2.expand(element.v2, element.v3);
            _this2.expand(element.v3, element.v1);
            v1x = element.v1.x;
            v1y = element.v1.y;
            v2x = element.v2.x;
            v2y = element.v2.y;
            v3x = element.v3.x;
            v3y = element.v3.y;
            _this2.bboxRect.addPoint(v1x, v1y);
            _this2.bboxRect.addPoint(v2x, v2y);
            _this2.bboxRect.addPoint(v3x, v3y);
            if (_this2.clipRect.instersects(_this2.bboxRect)) {
              _this2.clearRect.addRectangle(_this2.bboxRect);
              _this2.context.moveTo(v1x, v1y);
              _this2.context.lineTo(v2x, v2y);
              _this2.context.lineTo(v3x, v3y);
              _this2.context.lineTo(v1x, v1y);
            }
          } else if (element instanceof RenderableFace4) {
            _this2.expand(element.v1, element.v2);
            _this2.expand(element.v2, element.v3);
            _this2.expand(element.v3, element.v4);
            _this2.expand(element.v4, element.v1);
            v1x = element.v1.x;
            v1y = element.v1.y;
            v2x = element.v2.x;
            v2y = element.v2.y;
            v3x = element.v3.x;
            v3y = element.v3.y;
            v4x = element.v4.x;
            v4y = element.v4.y;
            _this2.bboxRect.addPoint(v1x, v1y);
            _this2.bboxRect.addPoint(v2x, v2y);
            _this2.bboxRect.addPoint(v3x, v3y);
            _this2.bboxRect.addPoint(v4x, v4y);
            if (_this2.clipRect.instersects(_this2.bboxRect)) {
              _this2.context.moveTo(v1x, v1y);
              _this2.context.lineTo(v2x, v2y);
              _this2.context.lineTo(v3x, v3y);
              _this2.context.lineTo(v4x, v4y);
              _this2.context.lineTo(v1x, v1y);
            }
          }
          _this2.context.closePath();
          element.material.map(function (material) {
            if (material instanceof ColorFillMaterial) {
              _this2.context.fillStyle = material.color.styleString;
              _this2.context.fill();
            } else if (material instanceof FaceColorFillMaterial) {
              _this2.context.fillStyle = element.color.styleString;
              _this2.context.fill();
            } else if (material instanceof ColorStrokeMaterial) {
              _this2.context.lineWidth = material.lineWidth;
              _this2.context.lineJoin = "round";
              _this2.context.lineCap = "round";
              _this2.context.strokeStyle = material.color.styleString;
              _this2.context.stroke();
              _this2.bboxRect.inflate(_this2.context.lineWidth);
            } else if (material instanceof FaceColorStrokeMaterial) {
              _this2.context.lineWidth = material.lineWidth;
              _this2.context.lineJoin = "round";
              _this2.context.lineCap = "round";
              _this2.context.strokeStyle = element.color.styleString;
              _this2.context.stroke();
              _this2.bboxRect.inflate(_this2.context.lineWidth);
            } else if (material instanceof TextureUVMappingMaterial) {
              // debugger

              _this2.uvs = element.uvs;
              _this2.bitmap = material.bitmap, _this2.bitmap_width = _this2.bitmap.width, _this2.bitmap_height = _this2.bitmap.height;
              _this2.drawTexturedTriangle(_this2.bitmap, _this2.bboxRect, v1x, v1y, v2x, v2y, v3x, v3y, _this2.uvs[0].x * _this2.bitmap_width, _this2.uvs[0].y * _this2.bitmap_height, _this2.uvs[1].x * _this2.bitmap_width, _this2.uvs[1].y * _this2.bitmap_height, _this2.uvs[2].x * _this2.bitmap_width, _this2.uvs[2].y * _this2.bitmap_height);
            }
          });
        });
        this.clearRect.addRectangle(this.bboxRect);
      }
    }, {
      key: "drawTexturedTriangle",
      value: function drawTexturedTriangle(texture, bbox, x0, y0, x1, y1, x2, y2, sx0, sy0, sx1, sy1, sx2, sy2) {
        this.context.save();
        this.context.clip();
        this.denom = sx0 * (sy2 - sy1) - sx1 * sy2 + sx2 * sy1 + (sx1 - sx2) * sy0;
        this.m11 = -(sy0 * (x2 - x1) - sy1 * x2 + sy2 * x1 + (sy1 - sy2) * x0) / this.denom;
        this.m12 = (sy1 * y2 + sy0 * (y1 - y2) - sy2 * y1 + (sy2 - sy1) * y0) / this.denom;
        this.m21 = (sx0 * (x2 - x1) - sx1 * x2 + sx2 * x1 + (sx1 - sx2) * x0) / this.denom;
        this.m22 = -(sx1 * y2 + sx0 * (y1 - y2) - sx2 * y1 + (sx2 - sx1) * y0) / this.denom;
        this.dx = (sx0 * (sy2 * x1 - sy1 * x2) + sy0 * (sx1 * x2 - sx2 * x1) + (sx2 * sy1 - sx1 * sy2) * x0) / this.denom;
        this.dy = (sx0 * (sy2 * y1 - sy1 * y2) + sy0 * (sx1 * y2 - sx2 * y1) + (sx2 * sy1 - sx1 * sy2) * y0) / this.denom;
        this.context.transform(this.m11, this.m12, this.m21, this.m22, this.dx, this.dy);
        this.context.drawImage(texture, 0, 0);
        this.context.restore();
      }
    }, {
      key: "expand",
      value: function expand(a, b) {
        this.vector2.sub(b, a);
        this.vector2.unit();
        b.addSelf(this.vector2);
        a.subSelf(this.vector2);
      }
    }]);
    return CanvasRender;
  }(Renderer);

  var Scene = /*#__PURE__*/function () {
    function Scene() {
      _classCallCheck(this, Scene);
      this.objects = [];
    }
    _createClass(Scene, [{
      key: "add",
      value: function add(object) {
        this.objects.push(object);
      }
    }]);
    return Scene;
  }();

  var Camera = /*#__PURE__*/function () {
    function Camera(x, y, z) {
      _classCallCheck(this, Camera);
      this.position = new Vector3$1(x, y, z);
      this.target = {
        position: new Vector3$1(0, 0, 0)
      };
      this.matrix = new Matrix4();
      this.projectionMatrix = Matrix4.makePerspective(45, 1 /*SCREEN_WIDTH/SCREEN_HEIGHT*/, 0.001, 1000);
      this.up = new Vector3$1(0, 1, 0);
      this.roll = 0;

      // TODO: Need to remove this	
      this.zoom = 3;
      this.focus = 500;
      this.autoUpdateMatrix = true;
      this.updateMatrix();
    }
    _createClass(Camera, [{
      key: "updateMatrix",
      value: function updateMatrix() {
        this.matrix.lookAt(this.position, this.target.position, this.up);
      }
    }, {
      key: "toString",
      value: function toString() {
        return 'DIMEN.Camera ( ' + this.position + ', ' + this.target.position + ' )';
      }
    }]);
    return Camera;
  }();

  var Matrix3 = /*#__PURE__*/function () {
    function Matrix3() {
      _classCallCheck(this, Matrix3);
      this.n11 = 1;
      this.n12 = 0;
      this.n13 = 0;
      this.n21 = 0;
      this.n22 = 1;
      this.n23 = 0;
      this.n31 = 0;
      this.n32 = 0;
      this.n33 = 1;
    }
    _createClass(Matrix3, [{
      key: "identity",
      value: function identity() {
        this.n11 = 1;
        this.n12 = 0;
        this.n13 = 0;
        this.n21 = 0;
        this.n22 = 1;
        this.n23 = 0;
        this.n31 = 0;
        this.n32 = 0;
        this.n33 = 1;
      }
    }, {
      key: "assign",
      value: function assign(m) {
        this.n11 = m.n11;
        this.n12 = m.n12;
        this.n13 = m.n13;
        this.n21 = m.n21;
        this.n22 = m.n22;
        this.n23 = m.n23;
        this.n31 = m.n31;
        this.n32 = m.n32;
        this.n33 = m.n33;
      }
    }, {
      key: "multiplySelf",
      value: function multiplySelf(m) {
        var n11 = this.n11,
          n12 = this.n12,
          n13 = this.n13;
          this.n14;
        var n21 = this.n21,
          n22 = this.n22,
          n23 = this.n23;
          this.n24;
        var n31 = this.n31,
          n32 = this.n32,
          n33 = this.n33;
          this.n34;
        this.n11 = n11 * m.n11 + n12 * m.n21 + n13 * m.n31;
        this.n12 = n11 * m.n12 + n12 * m.n22 + n13 * m.n32;
        this.n13 = n11 * m.n13 + n12 * m.n23 + n13 * m.n33;
        this.n21 = n21 * m.n11 + n22 * m.n21 + n23 * m.n31;
        this.n22 = n21 * m.n12 + n22 * m.n22 + n23 * m.n32;
        this.n23 = n21 * m.n13 + n22 * m.n23 + n23 * m.n33;
        this.n31 = n31 * m.n11 + n32 * m.n21 + n33 * m.n31;
        this.n32 = n31 * m.n12 + n32 * m.n22 + n33 * m.n32;
        this.n33 = n31 * m.n13 + n32 * m.n23 + n33 * m.n33;
      }
    }, {
      key: "inverse",
      value: function inverse() {
        var n11 = this.n11,
          n12 = this.n12,
          n13 = this.n13;
          this.n14;
        var n21 = this.n21,
          n22 = this.n22,
          n23 = this.n23;
          this.n24;
        var n31 = this.n31,
          n32 = this.n32,
          n33 = this.n33;
          this.n34;
        this.n11 = n11;
        this.n12 = n21;
        this.n13 = n31;
        this.n21 = n12;
        this.n22 = n22;
        this.n23 = n32;
        this.n31 = n13;
        this.n32 = n23;
        this.n33 = n33;
      }
    }, {
      key: "clone",
      value: function clone() {
        var m = new Matrix3();
        m.n11 = this.n11;
        m.n12 = this.n12;
        m.n13 = this.n13;
        m.n21 = this.n21;
        m.n22 = this.n22;
        m.n23 = this.n23;
        m.n31 = this.n31;
        m.n32 = this.n32;
        m.n33 = this.n33;
        return m;
      }
    }, {
      key: "toString",
      value: function toString() {
        return "| " + this.n11 + " " + this.n12 + " " + this.n13 + " |\n" + "| " + this.n21 + " " + this.n22 + " " + this.n23 + " |\n" + "| " + this.n31 + " " + this.n32 + " " + this.n33 + " |";
      }
    }]);
    return Matrix3;
  }();

  var Geometry = /*#__PURE__*/function () {
    function Geometry() {
      _classCallCheck(this, Geometry);
      this.vertices = [];
      this.faces = [];
      this.uvs = [];
    }
    _createClass(Geometry, [{
      key: "computeNormals",
      value: function computeNormals() {
        var _this = this;
        var vA, vB, vC, cb, ab, normal;
        this.vertices.map(function (v) {
          return v.normal.set(0, 0, 0);
        });
        this.faces.map(function (face) {
          vA = _this.vertices[face.a];
          vB = _this.vertices[face.b];
          vC = _this.vertices[face.c];
          cb = new Vector3$1();
          ab = new Vector3$1();
          normal = new Vector3$1();
          cb.sub(vC.position, vB.position);
          ab.sub(vA.position, vB.position);
          cb.cross(ab);
          if (!cb.isZero()) {
            cb.normalize();
          }
          face.normal = cb;
          vA.normal.addSelf(normal);
          vB.normal.addSelf(normal);
          vC.normal.addSelf(normal);
          if (face instanceof Face4) {
            _this.vertices[face.d].normal.addSelf(normal);
          }
        });
      }
    }]);
    return Geometry;
  }();

  var Vertex = /*#__PURE__*/function () {
    function Vertex(position, normal) {
      _classCallCheck(this, Vertex);
      this.position = position || new Vector3$1();
      this.normal = normal || new Vector3$1();
      this.screen = new Vector3$1();
      this.visible = true; // internal
    }
    _createClass(Vertex, [{
      key: "toString",
      value: function toString() {
        return 'DIMEN.Vertex ( ' + this.position + ', ' + this.normal + ' )';
      }
    }]);
    return Vertex;
  }();

  var Cube = /*#__PURE__*/function (_Geometry) {
    _inherits(Cube, _Geometry);
    var _super = _createSuper(Cube);
    function Cube(width, height, depth) {
      var _this;
      _classCallCheck(this, Cube);
      _this = _super.call(this);
      _this.width = width;
      _this.height = height;
      _this.depth = depth;
      _this.setup();
      return _this;
    }
    _createClass(Cube, [{
      key: "setup",
      value: function setup() {
        var width_half = this.width / 2,
          height_half = this.height / 2,
          depth_half = this.depth / 2;
        this.v(width_half, height_half, -depth_half);
        this.v(width_half, -height_half, -depth_half);
        this.v(-width_half, -height_half, -depth_half);
        this.v(-width_half, height_half, -depth_half);
        this.v(width_half, height_half, depth_half);
        this.v(width_half, -height_half, depth_half);
        this.v(-width_half, -height_half, depth_half);
        this.v(-width_half, height_half, depth_half);
        this.f4(0, 1, 2, 3);
        this.f4(4, 7, 6, 5);
        this.f4(0, 4, 5, 1);
        this.f4(1, 5, 6, 2);
        this.f4(2, 6, 7, 3);
        this.f4(4, 0, 3, 7);
      }
    }, {
      key: "v",
      value: function v(x, y, z) {
        this.vertices.push(new Vertex(new Vector3$1(x, y, z)));
      }
    }, {
      key: "f4",
      value: function f4(a, b, c, d) {
        this.faces.push(new Face4(a, b, c, d));
      }
    }]);
    return Cube;
  }(Geometry);

  var Plane = /*#__PURE__*/function (_Geometry) {
    _inherits(Plane, _Geometry);
    var _super = _createSuper(Plane);
    function Plane(width, height, segments_width, segments_height) {
      var _this;
      _classCallCheck(this, Plane);
      _this = _super.call(this);
      _this.width_half = width / 2;
      _this.height_half = height / 2;
      _this.gridX = segments_width || 1;
      _this.gridY = segments_height || 1;
      _this.gridX1 = _this.gridX + 1;
      _this.gridY1 = _this.gridY + 1;
      _this.segment_width = width / _this.gridX;
      _this.segment_height = height / _this.gridY;
      _this.setup();
      return _this;
    }
    _createClass(Plane, [{
      key: "setup",
      value: function setup() {
        for (var iy = 0; iy < this.gridY1; iy++) {
          for (var ix = 0; ix < this.gridX1; ix++) {
            var x = ix * this.segment_width - this.width_half;
            var y = iy * this.segment_height - this.height_half;
            console.log('x: y: ', x, y);
            this.vertices.push(new Vertex(new Vector3$1(x, -y, 0)));
          }
        }
        for (var _iy = 0; _iy < this.gridY; _iy++) {
          for (var _ix = 0; _ix < this.gridX; _ix++) {
            var a = _ix + this.gridX1 * _iy;
            var b = _ix + this.gridX1 * (_iy + 1);
            var c = _ix + 1 + this.gridX1 * _iy;

            // console.log('a b c: ', a, b, c)

            this.faces.push(new Face3(a, b, c));
            this.uvs.push([new Vector2(_ix / this.gridX, _iy / this.gridY), new Vector2(_ix / this.gridX, (_iy + 1) / this.gridY), new Vector2((_ix + 1) / this.gridX, _iy / this.gridY)]);
            a = _ix + 1 + this.gridX1 * (_iy + 1);
            b = _ix + 1 + this.gridX1 * _iy;
            c = _ix + this.gridX1 * (_iy + 1);
            this.faces.push(new Face3(a, b, c));
            this.uvs.push([new Vector2((_ix + 1) / this.gridX, (_iy + 1) / this.gridY), new Vector2((_ix + 1) / this.gridX, _iy / this.gridY), new Vector2(_ix / this.gridX, (_iy + 1) / this.gridY)]);
          }
        }
      }
    }]);
    return Plane;
  }(Geometry);

  exports.Camera = Camera;
  exports.CanvasRender = CanvasRender;
  exports.ColorFillMaterial = ColorFillMaterial;
  exports.ColorStrokeMaterial = ColorStrokeMaterial;
  exports.Cube = Cube;
  exports.FaceColorFillMaterial = FaceColorFillMaterial;
  exports.FaceColorStrokeMaterial = FaceColorStrokeMaterial;
  exports.Matrix3 = Matrix3;
  exports.Matrix4 = Matrix4;
  exports.Mesh = Mesh;
  exports.Particle = Particle;
  exports.Plane = Plane;
  exports.Scene = Scene;
  exports.TextureUVMappingMaterial = TextureUVMappingMaterial;
  exports.Vector2 = Vector2;
  exports.Vector3 = Vector3$1;
  exports.Vector4 = Vector4;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=dimen.js.map
