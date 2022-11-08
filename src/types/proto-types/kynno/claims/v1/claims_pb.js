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
goog.exportSymbol('proto.kynno.claims.v1.Action', null, global);
goog.exportSymbol('proto.kynno.claims.v1.Claim', null, global);
goog.exportSymbol('proto.kynno.claims.v1.ClaimsRecord', null, global);
goog.exportSymbol('proto.kynno.claims.v1.ClaimsRecordAddress', null, global);

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
proto.kynno.claims.v1.Claim = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kynno.claims.v1.Claim, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.claims.v1.Claim.displayName = 'proto.kynno.claims.v1.Claim';
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
proto.kynno.claims.v1.Claim.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.claims.v1.Claim.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.claims.v1.Claim} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.claims.v1.Claim.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    completed: jspb.Message.getFieldWithDefault(msg, 2, false),
    claimableAmount: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.kynno.claims.v1.Claim}
 */
proto.kynno.claims.v1.Claim.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.claims.v1.Claim;
  return proto.kynno.claims.v1.Claim.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.claims.v1.Claim} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.claims.v1.Claim}
 */
proto.kynno.claims.v1.Claim.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.kynno.claims.v1.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCompleted(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClaimableAmount(value);
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
proto.kynno.claims.v1.Claim.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.claims.v1.Claim.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.claims.v1.Claim} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.claims.v1.Claim.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCompleted();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getClaimableAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Action action = 1;
 * @return {!proto.kynno.claims.v1.Action}
 */
proto.kynno.claims.v1.Claim.prototype.getAction = function() {
  return /** @type {!proto.kynno.claims.v1.Action} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.kynno.claims.v1.Action} value */
proto.kynno.claims.v1.Claim.prototype.setAction = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool completed = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.kynno.claims.v1.Claim.prototype.getCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.kynno.claims.v1.Claim.prototype.setCompleted = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string claimable_amount = 3;
 * @return {string}
 */
proto.kynno.claims.v1.Claim.prototype.getClaimableAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.kynno.claims.v1.Claim.prototype.setClaimableAmount = function(value) {
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
proto.kynno.claims.v1.ClaimsRecordAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.kynno.claims.v1.ClaimsRecordAddress.repeatedFields_, null);
};
goog.inherits(proto.kynno.claims.v1.ClaimsRecordAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.claims.v1.ClaimsRecordAddress.displayName = 'proto.kynno.claims.v1.ClaimsRecordAddress';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.kynno.claims.v1.ClaimsRecordAddress.repeatedFields_ = [3];



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
proto.kynno.claims.v1.ClaimsRecordAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.claims.v1.ClaimsRecordAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.claims.v1.ClaimsRecordAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.claims.v1.ClaimsRecordAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    initialClaimableAmount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    actionsCompletedList: jspb.Message.getRepeatedField(msg, 3)
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
 * @return {!proto.kynno.claims.v1.ClaimsRecordAddress}
 */
proto.kynno.claims.v1.ClaimsRecordAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.claims.v1.ClaimsRecordAddress;
  return proto.kynno.claims.v1.ClaimsRecordAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.claims.v1.ClaimsRecordAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.claims.v1.ClaimsRecordAddress}
 */
proto.kynno.claims.v1.ClaimsRecordAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialClaimableAmount(value);
      break;
    case 3:
      var value = /** @type {!Array<boolean>} */ (reader.readPackedBool());
      msg.setActionsCompletedList(value);
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
proto.kynno.claims.v1.ClaimsRecordAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.claims.v1.ClaimsRecordAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.claims.v1.ClaimsRecordAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.claims.v1.ClaimsRecordAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInitialClaimableAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActionsCompletedList();
  if (f.length > 0) {
    writer.writePackedBool(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.kynno.claims.v1.ClaimsRecordAddress.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.claims.v1.ClaimsRecordAddress.prototype.setAddress = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string initial_claimable_amount = 2;
 * @return {string}
 */
proto.kynno.claims.v1.ClaimsRecordAddress.prototype.getInitialClaimableAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.kynno.claims.v1.ClaimsRecordAddress.prototype.setInitialClaimableAmount = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated bool actions_completed = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {!Array<boolean>}
 */
proto.kynno.claims.v1.ClaimsRecordAddress.prototype.getActionsCompletedList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<boolean>} value */
proto.kynno.claims.v1.ClaimsRecordAddress.prototype.setActionsCompletedList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!boolean} value
 * @param {number=} opt_index
 */
proto.kynno.claims.v1.ClaimsRecordAddress.prototype.addActionsCompleted = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.kynno.claims.v1.ClaimsRecordAddress.prototype.clearActionsCompletedList = function() {
  this.setActionsCompletedList([]);
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
proto.kynno.claims.v1.ClaimsRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.kynno.claims.v1.ClaimsRecord.repeatedFields_, null);
};
goog.inherits(proto.kynno.claims.v1.ClaimsRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.kynno.claims.v1.ClaimsRecord.displayName = 'proto.kynno.claims.v1.ClaimsRecord';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.kynno.claims.v1.ClaimsRecord.repeatedFields_ = [2];



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
proto.kynno.claims.v1.ClaimsRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.kynno.claims.v1.ClaimsRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kynno.claims.v1.ClaimsRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.claims.v1.ClaimsRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    initialClaimableAmount: jspb.Message.getFieldWithDefault(msg, 1, ""),
    actionsCompletedList: jspb.Message.getRepeatedField(msg, 2)
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
 * @return {!proto.kynno.claims.v1.ClaimsRecord}
 */
proto.kynno.claims.v1.ClaimsRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kynno.claims.v1.ClaimsRecord;
  return proto.kynno.claims.v1.ClaimsRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kynno.claims.v1.ClaimsRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kynno.claims.v1.ClaimsRecord}
 */
proto.kynno.claims.v1.ClaimsRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitialClaimableAmount(value);
      break;
    case 2:
      var value = /** @type {!Array<boolean>} */ (reader.readPackedBool());
      msg.setActionsCompletedList(value);
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
proto.kynno.claims.v1.ClaimsRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kynno.claims.v1.ClaimsRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kynno.claims.v1.ClaimsRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kynno.claims.v1.ClaimsRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInitialClaimableAmount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActionsCompletedList();
  if (f.length > 0) {
    writer.writePackedBool(
      2,
      f
    );
  }
};


/**
 * optional string initial_claimable_amount = 1;
 * @return {string}
 */
proto.kynno.claims.v1.ClaimsRecord.prototype.getInitialClaimableAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.kynno.claims.v1.ClaimsRecord.prototype.setInitialClaimableAmount = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated bool actions_completed = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {!Array<boolean>}
 */
proto.kynno.claims.v1.ClaimsRecord.prototype.getActionsCompletedList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<boolean>} value */
proto.kynno.claims.v1.ClaimsRecord.prototype.setActionsCompletedList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!boolean} value
 * @param {number=} opt_index
 */
proto.kynno.claims.v1.ClaimsRecord.prototype.addActionsCompleted = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.kynno.claims.v1.ClaimsRecord.prototype.clearActionsCompletedList = function() {
  this.setActionsCompletedList([]);
};


/**
 * @enum {number}
 */
proto.kynno.claims.v1.Action = {
  ACTION_UNSPECIFIED: 0,
  ACTION_VOTE: 1,
  ACTION_DELEGATE: 2,
  ACTION_EVM: 3,
  ACTION_IBC_TRANSFER: 4
};

goog.object.extend(exports, proto.kynno.claims.v1);
