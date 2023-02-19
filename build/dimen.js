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
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
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

  var Renderer = /*#__PURE__*/function () {
    function Renderer() {
      _classCallCheck(this, Renderer);
      _defineProperty(this, "renderList", []);
    }
    _createClass(Renderer, [{
      key: "project",
      value: function project(scene) {
        var _this = this;
        scene.objects.map(function (v) {
          return _this.renderList.push(v);
        });
      }
    }]);
    return Renderer;
  }();

  var CanvasRender = /*#__PURE__*/function (_Renderer) {
    _inherits(CanvasRender, _Renderer);
    var _super = _createSuper(CanvasRender);
    function CanvasRender(scene) {
      var _this;
      _classCallCheck(this, CanvasRender);
      _this = _super.call(this, scene);
      _this.scene = scene;
      _this.viewport = document.createElement("canvas");
      _this.context = _this.viewport.getContext("2d");
      _this.domElement = _this.viewport;
      return _this;
    }
    _createClass(CanvasRender, [{
      key: "setSize",
      value: function setSize(width, height) {
        this.viewport.width = width;
        this.viewport.height = height;
        this.context.setTransform(1, 0, 0, 1, width / 2, height / 2);
      }
    }, {
      key: "render",
      value: function render() {
        this.project(this.scene);
        this.context.beginPath();
        this.context.lineWidth = 2;
        this.context.strokeStyle = "red";
        this.context.arc(0, 0, 20, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
      }
    }]);
    return CanvasRender;
  }(Renderer);

  exports.CanvasRender = CanvasRender;
  exports.Scene = Scene;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
