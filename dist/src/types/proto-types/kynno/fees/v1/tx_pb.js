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

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.exportSymbol('proto.kynno.fees.v1.MsgCancelDevFeeInfo', null, global);
goog.exportSymbol('proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse', null, global);
goog.exportSymbol('proto.kynno.fees.v1.MsgRegisterDevFeeInfo', null, global);
goog.exportSymbol('proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse', null, global);
goog.exportSymbol('proto.kynno.fees.v1.MsgUpdateDevFeeInfo', null, global);
goog.exportSymbol('proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse', null, global);

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
proto.kynno.fees.v1.MsgRegisterDevFeeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.kynno.fees.v1.MsgRegisterDevFeeInfo.repeatedFields_, null);
};
goog.inherits(proto.kynno.fees.v1.MsgRegisterDevFeeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.fees.v1.MsgRegisterDevFeeInfo.displayName = 'proto.kynno.fees.v1.MsgRegisterDevFeeInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.repeatedFields_ = [4];



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
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.fees.v1.MsgRegisterDevFeeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.fees.v1.MsgRegisterDevFeeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deployerAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    withdrawAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    noncesList: jspb.Message.getRepeatedField(msg, 4)
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
 * @return {!proto.kynno.fees.v1.MsgRegisterDevFeeInfo}
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.fees.v1.MsgRegisterDevFeeInfo;
  return proto.kynno.fees.v1.MsgRegisterDevFeeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.fees.v1.MsgRegisterDevFeeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.fees.v1.MsgRegisterDevFeeInfo}
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeployerAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWithdrawAddress(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setNoncesList(value);
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
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.fees.v1.MsgRegisterDevFeeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.fees.v1.MsgRegisterDevFeeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeployerAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWithdrawAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNoncesList();
  if (f.length > 0) {
    writer.writePackedUint64(
      4,
      f
    );
  }
};


/**
 * optional string contract_address = 1;
 * @return {string}
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.setContractAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deployer_address = 2;
 * @return {string}
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.getDeployerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.setDeployerAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string withdraw_address = 3;
 * @return {string}
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.getWithdrawAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.setWithdrawAddress = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated uint64 nonces = 4;
 * @return {!Array<number>}
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.getNoncesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<number>} value */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.setNoncesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.addNonces = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.kynno.fees.v1.MsgRegisterDevFeeInfo.prototype.clearNoncesList = function() {
  this.setNoncesList([]);
};



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
proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.displayName = 'proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse';
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
proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse}
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse;
  return proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse}
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgRegisterDevFeeInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.kynno.fees.v1.MsgCancelDevFeeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.fees.v1.MsgCancelDevFeeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.fees.v1.MsgCancelDevFeeInfo.displayName = 'proto.kynno.fees.v1.MsgCancelDevFeeInfo';
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
proto.kynno.fees.v1.MsgCancelDevFeeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.fees.v1.MsgCancelDevFeeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.fees.v1.MsgCancelDevFeeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deployerAddress: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.kynno.fees.v1.MsgCancelDevFeeInfo}
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.fees.v1.MsgCancelDevFeeInfo;
  return proto.kynno.fees.v1.MsgCancelDevFeeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.fees.v1.MsgCancelDevFeeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.fees.v1.MsgCancelDevFeeInfo}
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeployerAddress(value);
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
proto.kynno.fees.v1.MsgCancelDevFeeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.fees.v1.MsgCancelDevFeeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.fees.v1.MsgCancelDevFeeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeployerAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string contract_address = 1;
 * @return {string}
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfo.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.fees.v1.MsgCancelDevFeeInfo.prototype.setContractAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deployer_address = 2;
 * @return {string}
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfo.prototype.getDeployerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.fees.v1.MsgCancelDevFeeInfo.prototype.setDeployerAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



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
proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.displayName = 'proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse';
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
proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse}
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse;
  return proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse}
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgCancelDevFeeInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.kynno.fees.v1.MsgUpdateDevFeeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.fees.v1.MsgUpdateDevFeeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.fees.v1.MsgUpdateDevFeeInfo.displayName = 'proto.kynno.fees.v1.MsgUpdateDevFeeInfo';
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
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.fees.v1.MsgUpdateDevFeeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.fees.v1.MsgUpdateDevFeeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractAddress: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deployerAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    withdrawAddress: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.kynno.fees.v1.MsgUpdateDevFeeInfo}
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.fees.v1.MsgUpdateDevFeeInfo;
  return proto.kynno.fees.v1.MsgUpdateDevFeeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.fees.v1.MsgUpdateDevFeeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.fees.v1.MsgUpdateDevFeeInfo}
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeployerAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWithdrawAddress(value);
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
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.fees.v1.MsgUpdateDevFeeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.fees.v1.MsgUpdateDevFeeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeployerAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWithdrawAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string contract_address = 1;
 * @return {string}
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.prototype.getContractAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.prototype.setContractAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deployer_address = 2;
 * @return {string}
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.prototype.getDeployerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.prototype.setDeployerAddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string withdraw_address = 3;
 * @return {string}
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.prototype.getWithdrawAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.kynno.fees.v1.MsgUpdateDevFeeInfo.prototype.setWithdrawAddress = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



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
proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.displayName = 'proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse';
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
proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse}
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse;
  return proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse}
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.fees.v1.MsgUpdateDevFeeInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.kynno.fees.v1);
