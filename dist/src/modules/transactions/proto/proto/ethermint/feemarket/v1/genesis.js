"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ethermint = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var dependency_2 = _interopRequireWildcard(require("./feemarket"));

var pb_1 = _interopRequireWildcard(require("google-protobuf"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ethermint;
exports.ethermint = ethermint;

(function (_ethermint) {
  var feemarket;

  (function (_feemarket) {
    var v1;

    (function (_v) {
      var GenesisState = /*#__PURE__*/function (_pb_1$Message) {
        (0, _inherits2["default"])(GenesisState, _pb_1$Message);

        var _super = _createSuper(GenesisState);

        function GenesisState(data) {
          var _this;

          (0, _classCallCheck2["default"])(this, GenesisState);
          _this = _super.call(this);
          pb_1.Message.initialize((0, _assertThisInitialized2["default"])(_this), Array.isArray(data) ? data : [], 0, -1, [], []);

          if (!Array.isArray(data) && (0, _typeof2["default"])(data) == "object") {
            if ("params" in data && data.params != undefined) {
              _this.params = data.params;
            }

            if ("block_gas" in data && data.block_gas != undefined) {
              _this.block_gas = data.block_gas;
            }
          }

          return _this;
        }

        (0, _createClass2["default"])(GenesisState, [{
          key: "params",
          get: function get() {
            return pb_1.Message.getWrapperField(this, dependency_2.ethermint.feemarket.v1.Params, 1);
          },
          set: function set(value) {
            pb_1.Message.setWrapperField(this, 1, value);
          }
        }, {
          key: "block_gas",
          get: function get() {
            return pb_1.Message.getField(this, 3);
          },
          set: function set(value) {
            pb_1.Message.setField(this, 3, value);
          }
        }, {
          key: "toObject",
          value: function (_toObject) {
            function toObject() {
              return _toObject.apply(this, arguments);
            }

            toObject.toString = function () {
              return _toObject.toString();
            };

            return toObject;
          }(function () {
            var data = {};

            if (this.params != null) {
              data.params = this.params.toObject();
            }

            if (this.block_gas != null) {
              data.block_gas = this.block_gas;
            }

            return data;
          })
        }, {
          key: "serialize",
          value: function serialize(w) {
            var _this2 = this;

            var writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined) writer.writeMessage(1, this.params, function () {
              return _this2.params.serialize(writer);
            });
            if (this.block_gas !== undefined) writer.writeUint64(3, this.block_gas);
            if (!w) return writer.getResultBuffer();
          }
        }, {
          key: "serializeBinary",
          value: function serializeBinary() {
            return this.serialize();
          }
        }], [{
          key: "fromObject",
          value: function fromObject(data) {
            var message = new GenesisState({});

            if (data.params != null) {
              message.params = dependency_2.ethermint.feemarket.v1.Params.fromObject(data.params);
            }

            if (data.block_gas != null) {
              message.block_gas = data.block_gas;
            }

            return message;
          }
        }, {
          key: "deserialize",
          value: function deserialize(bytes) {
            var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes),
                message = new GenesisState();

            while (reader.nextField()) {
              if (reader.isEndGroup()) break;

              switch (reader.getFieldNumber()) {
                case 1:
                  reader.readMessage(message.params, function () {
                    return message.params = dependency_2.ethermint.feemarket.v1.Params.deserialize(reader);
                  });
                  break;

                case 3:
                  message.block_gas = reader.readUint64();
                  break;

                default:
                  reader.skipField();
              }
            }

            return message;
          }
        }, {
          key: "deserializeBinary",
          value: function deserializeBinary(bytes) {
            return GenesisState.deserialize(bytes);
          }
        }]);
        return GenesisState;
      }(pb_1.Message);

      _v.GenesisState = GenesisState;
    })(v1 || (v1 = _feemarket.v1 || (_feemarket.v1 = {})));
  })(feemarket || (feemarket = _ethermint.feemarket || (_ethermint.feemarket = {})));
})(ethermint || (exports.ethermint = ethermint = {}));