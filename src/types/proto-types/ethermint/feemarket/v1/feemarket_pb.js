/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.exportSymbol('proto.ethermint.feemarket.v1.Params', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ethermint.feemarket.v1.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ethermint.feemarket.v1.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ethermint.feemarket.v1.Params.displayName = 'proto.ethermint.feemarket.v1.Params';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ethermint.feemarket.v1.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.ethermint.feemarket.v1.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ethermint.feemarket.v1.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethermint.feemarket.v1.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    noBaseFee: jspb.Message.getFieldWithDefault(msg, 1, false),
    baseFeeChangeDenominator: jspb.Message.getFieldWithDefault(msg, 2, 0),
    elasticityMultiplier: jspb.Message.getFieldWithDefault(msg, 3, 0),
    enableHeight: jspb.Message.getFieldWithDefault(msg, 5, 0),
    baseFee: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ethermint.feemarket.v1.Params}
 */
proto.ethermint.feemarket.v1.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ethermint.feemarket.v1.Params;
  return proto.ethermint.feemarket.v1.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ethermint.feemarket.v1.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ethermint.feemarket.v1.Params}
 */
proto.ethermint.feemarket.v1.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoBaseFee(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBaseFeeChangeDenominator(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setElasticityMultiplier(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEnableHeight(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ethermint.feemarket.v1.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ethermint.feemarket.v1.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ethermint.feemarket.v1.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ethermint.feemarket.v1.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoBaseFee();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBaseFeeChangeDenominator();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getElasticityMultiplier();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getEnableHeight();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBaseFee();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional bool no_base_fee = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.ethermint.feemarket.v1.Params.prototype.getNoBaseFee = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.ethermint.feemarket.v1.Params.prototype.setNoBaseFee = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 base_fee_change_denominator = 2;
 * @return {number}
 */
proto.ethermint.feemarket.v1.Params.prototype.getBaseFeeChangeDenominator = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.ethermint.feemarket.v1.Params.prototype.setBaseFeeChangeDenominator = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 elasticity_multiplier = 3;
 * @return {number}
 */
proto.ethermint.feemarket.v1.Params.prototype.getElasticityMultiplier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ethermint.feemarket.v1.Params.prototype.setElasticityMultiplier = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 enable_height = 5;
 * @return {number}
 */
proto.ethermint.feemarket.v1.Params.prototype.getEnableHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.ethermint.feemarket.v1.Params.prototype.setEnableHeight = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string base_fee = 6;
 * @return {string}
 */
proto.ethermint.feemarket.v1.Params.prototype.getBaseFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.ethermint.feemarket.v1.Params.prototype.setBaseFee = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.ethermint.feemarket.v1);
