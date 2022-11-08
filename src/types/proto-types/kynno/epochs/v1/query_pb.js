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
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
var kynno_epochs_v1_genesis_pb = require('../../../kynno/epochs/v1/genesis_pb.js');
goog.exportSymbol('proto.kynno.epochs.v1.QueryCurrentEpochRequest', null, global);
goog.exportSymbol('proto.kynno.epochs.v1.QueryCurrentEpochResponse', null, global);
goog.exportSymbol('proto.kynno.epochs.v1.QueryEpochsInfoRequest', null, global);
goog.exportSymbol('proto.kynno.epochs.v1.QueryEpochsInfoResponse', null, global);

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
proto.kynno.epochs.v1.QueryEpochsInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.epochs.v1.QueryEpochsInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.epochs.v1.QueryEpochsInfoRequest.displayName = 'proto.kynno.epochs.v1.QueryEpochsInfoRequest';
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
proto.kynno.epochs.v1.QueryEpochsInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.epochs.v1.QueryEpochsInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.epochs.v1.QueryEpochsInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.QueryEpochsInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.kynno.epochs.v1.QueryEpochsInfoRequest}
 */
proto.kynno.epochs.v1.QueryEpochsInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.epochs.v1.QueryEpochsInfoRequest;
  return proto.kynno.epochs.v1.QueryEpochsInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.epochs.v1.QueryEpochsInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.epochs.v1.QueryEpochsInfoRequest}
 */
proto.kynno.epochs.v1.QueryEpochsInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.kynno.epochs.v1.QueryEpochsInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.epochs.v1.QueryEpochsInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.epochs.v1.QueryEpochsInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.QueryEpochsInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 1;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.kynno.epochs.v1.QueryEpochsInfoRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 1));
};


/** @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value */
proto.kynno.epochs.v1.QueryEpochsInfoRequest.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.kynno.epochs.v1.QueryEpochsInfoRequest.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.kynno.epochs.v1.QueryEpochsInfoRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.kynno.epochs.v1.QueryEpochsInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.kynno.epochs.v1.QueryEpochsInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.kynno.epochs.v1.QueryEpochsInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.epochs.v1.QueryEpochsInfoResponse.displayName = 'proto.kynno.epochs.v1.QueryEpochsInfoResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.repeatedFields_ = [1];



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
proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.epochs.v1.QueryEpochsInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.epochs.v1.QueryEpochsInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    epochsList: jspb.Message.toObjectList(msg.getEpochsList(),
    kynno_epochs_v1_genesis_pb.EpochInfo.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.kynno.epochs.v1.QueryEpochsInfoResponse}
 */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.epochs.v1.QueryEpochsInfoResponse;
  return proto.kynno.epochs.v1.QueryEpochsInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.epochs.v1.QueryEpochsInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.epochs.v1.QueryEpochsInfoResponse}
 */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new kynno_epochs_v1_genesis_pb.EpochInfo;
      reader.readMessage(value,kynno_epochs_v1_genesis_pb.EpochInfo.deserializeBinaryFromReader);
      msg.addEpochs(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.epochs.v1.QueryEpochsInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.epochs.v1.QueryEpochsInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpochsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      kynno_epochs_v1_genesis_pb.EpochInfo.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EpochInfo epochs = 1;
 * @return {!Array<!proto.kynno.epochs.v1.EpochInfo>}
 */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.getEpochsList = function() {
  return /** @type{!Array<!proto.kynno.epochs.v1.EpochInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, kynno_epochs_v1_genesis_pb.EpochInfo, 1));
};


/** @param {!Array<!proto.kynno.epochs.v1.EpochInfo>} value */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.setEpochsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.kynno.epochs.v1.EpochInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.kynno.epochs.v1.EpochInfo}
 */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.addEpochs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.kynno.epochs.v1.EpochInfo, opt_index);
};


proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.clearEpochsList = function() {
  this.setEpochsList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/** @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.setPagination = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.clearPagination = function() {
  this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.kynno.epochs.v1.QueryEpochsInfoResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.kynno.epochs.v1.QueryCurrentEpochRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.epochs.v1.QueryCurrentEpochRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.epochs.v1.QueryCurrentEpochRequest.displayName = 'proto.kynno.epochs.v1.QueryCurrentEpochRequest';
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
proto.kynno.epochs.v1.QueryCurrentEpochRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.epochs.v1.QueryCurrentEpochRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.epochs.v1.QueryCurrentEpochRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.QueryCurrentEpochRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifier: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.kynno.epochs.v1.QueryCurrentEpochRequest}
 */
proto.kynno.epochs.v1.QueryCurrentEpochRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.epochs.v1.QueryCurrentEpochRequest;
  return proto.kynno.epochs.v1.QueryCurrentEpochRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.epochs.v1.QueryCurrentEpochRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.epochs.v1.QueryCurrentEpochRequest}
 */
proto.kynno.epochs.v1.QueryCurrentEpochRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifier(value);
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
proto.kynno.epochs.v1.QueryCurrentEpochRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.epochs.v1.QueryCurrentEpochRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.epochs.v1.QueryCurrentEpochRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.QueryCurrentEpochRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string identifier = 1;
 * @return {string}
 */
proto.kynno.epochs.v1.QueryCurrentEpochRequest.prototype.getIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.epochs.v1.QueryCurrentEpochRequest.prototype.setIdentifier = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.kynno.epochs.v1.QueryCurrentEpochResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.epochs.v1.QueryCurrentEpochResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.epochs.v1.QueryCurrentEpochResponse.displayName = 'proto.kynno.epochs.v1.QueryCurrentEpochResponse';
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
proto.kynno.epochs.v1.QueryCurrentEpochResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.epochs.v1.QueryCurrentEpochResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.epochs.v1.QueryCurrentEpochResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.QueryCurrentEpochResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    currentEpoch: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.kynno.epochs.v1.QueryCurrentEpochResponse}
 */
proto.kynno.epochs.v1.QueryCurrentEpochResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.epochs.v1.QueryCurrentEpochResponse;
  return proto.kynno.epochs.v1.QueryCurrentEpochResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.epochs.v1.QueryCurrentEpochResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.epochs.v1.QueryCurrentEpochResponse}
 */
proto.kynno.epochs.v1.QueryCurrentEpochResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurrentEpoch(value);
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
proto.kynno.epochs.v1.QueryCurrentEpochResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.epochs.v1.QueryCurrentEpochResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.epochs.v1.QueryCurrentEpochResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.epochs.v1.QueryCurrentEpochResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrentEpoch();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 current_epoch = 1;
 * @return {number}
 */
proto.kynno.epochs.v1.QueryCurrentEpochResponse.prototype.getCurrentEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.kynno.epochs.v1.QueryCurrentEpochResponse.prototype.setCurrentEpoch = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.kynno.epochs.v1);
