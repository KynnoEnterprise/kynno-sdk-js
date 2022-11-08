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

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var tendermint_types_types_pb = require('../../tendermint/types/types_pb.js');
var tendermint_types_validator_pb = require('../../tendermint/types/validator_pb.js');
goog.exportSymbol('proto.tendermint.types.DuplicateVoteEvidence', null, global);
goog.exportSymbol('proto.tendermint.types.Evidence', null, global);
goog.exportSymbol('proto.tendermint.types.EvidenceList', null, global);
goog.exportSymbol('proto.tendermint.types.LightClientAttackEvidence', null, global);

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
proto.tendermint.types.Evidence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.tendermint.types.Evidence.oneofGroups_);
};
goog.inherits(proto.tendermint.types.Evidence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tendermint.types.Evidence.displayName = 'proto.tendermint.types.Evidence';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tendermint.types.Evidence.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.tendermint.types.Evidence.SumCase = {
  SUM_NOT_SET: 0,
  DUPLICATE_VOTE_EVIDENCE: 1,
  LIGHT_CLIENT_ATTACK_EVIDENCE: 2
};

/**
 * @return {proto.tendermint.types.Evidence.SumCase}
 */
proto.tendermint.types.Evidence.prototype.getSumCase = function() {
  return /** @type {proto.tendermint.types.Evidence.SumCase} */(jspb.Message.computeOneofCase(this, proto.tendermint.types.Evidence.oneofGroups_[0]));
};



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
proto.tendermint.types.Evidence.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.types.Evidence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.types.Evidence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.Evidence.toObject = function(includeInstance, msg) {
  var f, obj = {
    duplicateVoteEvidence: (f = msg.getDuplicateVoteEvidence()) && proto.tendermint.types.DuplicateVoteEvidence.toObject(includeInstance, f),
    lightClientAttackEvidence: (f = msg.getLightClientAttackEvidence()) && proto.tendermint.types.LightClientAttackEvidence.toObject(includeInstance, f)
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
 * @return {!proto.tendermint.types.Evidence}
 */
proto.tendermint.types.Evidence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.types.Evidence;
  return proto.tendermint.types.Evidence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.types.Evidence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.types.Evidence}
 */
proto.tendermint.types.Evidence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.types.DuplicateVoteEvidence;
      reader.readMessage(value,proto.tendermint.types.DuplicateVoteEvidence.deserializeBinaryFromReader);
      msg.setDuplicateVoteEvidence(value);
      break;
    case 2:
      var value = new proto.tendermint.types.LightClientAttackEvidence;
      reader.readMessage(value,proto.tendermint.types.LightClientAttackEvidence.deserializeBinaryFromReader);
      msg.setLightClientAttackEvidence(value);
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
proto.tendermint.types.Evidence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.types.Evidence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.types.Evidence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.Evidence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuplicateVoteEvidence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tendermint.types.DuplicateVoteEvidence.serializeBinaryToWriter
    );
  }
  f = message.getLightClientAttackEvidence();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tendermint.types.LightClientAttackEvidence.serializeBinaryToWriter
    );
  }
};


/**
 * optional DuplicateVoteEvidence duplicate_vote_evidence = 1;
 * @return {?proto.tendermint.types.DuplicateVoteEvidence}
 */
proto.tendermint.types.Evidence.prototype.getDuplicateVoteEvidence = function() {
  return /** @type{?proto.tendermint.types.DuplicateVoteEvidence} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.types.DuplicateVoteEvidence, 1));
};


/** @param {?proto.tendermint.types.DuplicateVoteEvidence|undefined} value */
proto.tendermint.types.Evidence.prototype.setDuplicateVoteEvidence = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.tendermint.types.Evidence.oneofGroups_[0], value);
};


proto.tendermint.types.Evidence.prototype.clearDuplicateVoteEvidence = function() {
  this.setDuplicateVoteEvidence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tendermint.types.Evidence.prototype.hasDuplicateVoteEvidence = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LightClientAttackEvidence light_client_attack_evidence = 2;
 * @return {?proto.tendermint.types.LightClientAttackEvidence}
 */
proto.tendermint.types.Evidence.prototype.getLightClientAttackEvidence = function() {
  return /** @type{?proto.tendermint.types.LightClientAttackEvidence} */ (
    jspb.Message.getWrapperField(this, proto.tendermint.types.LightClientAttackEvidence, 2));
};


/** @param {?proto.tendermint.types.LightClientAttackEvidence|undefined} value */
proto.tendermint.types.Evidence.prototype.setLightClientAttackEvidence = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.tendermint.types.Evidence.oneofGroups_[0], value);
};


proto.tendermint.types.Evidence.prototype.clearLightClientAttackEvidence = function() {
  this.setLightClientAttackEvidence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tendermint.types.Evidence.prototype.hasLightClientAttackEvidence = function() {
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
proto.tendermint.types.DuplicateVoteEvidence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tendermint.types.DuplicateVoteEvidence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tendermint.types.DuplicateVoteEvidence.displayName = 'proto.tendermint.types.DuplicateVoteEvidence';
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
proto.tendermint.types.DuplicateVoteEvidence.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.types.DuplicateVoteEvidence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.types.DuplicateVoteEvidence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.DuplicateVoteEvidence.toObject = function(includeInstance, msg) {
  var f, obj = {
    voteA: (f = msg.getVoteA()) && tendermint_types_types_pb.Vote.toObject(includeInstance, f),
    voteB: (f = msg.getVoteB()) && tendermint_types_types_pb.Vote.toObject(includeInstance, f),
    totalVotingPower: jspb.Message.getFieldWithDefault(msg, 3, 0),
    validatorPower: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.tendermint.types.DuplicateVoteEvidence}
 */
proto.tendermint.types.DuplicateVoteEvidence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.types.DuplicateVoteEvidence;
  return proto.tendermint.types.DuplicateVoteEvidence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.types.DuplicateVoteEvidence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.types.DuplicateVoteEvidence}
 */
proto.tendermint.types.DuplicateVoteEvidence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tendermint_types_types_pb.Vote;
      reader.readMessage(value,tendermint_types_types_pb.Vote.deserializeBinaryFromReader);
      msg.setVoteA(value);
      break;
    case 2:
      var value = new tendermint_types_types_pb.Vote;
      reader.readMessage(value,tendermint_types_types_pb.Vote.deserializeBinaryFromReader);
      msg.setVoteB(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalVotingPower(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValidatorPower(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
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
proto.tendermint.types.DuplicateVoteEvidence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.types.DuplicateVoteEvidence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.types.DuplicateVoteEvidence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.DuplicateVoteEvidence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoteA();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tendermint_types_types_pb.Vote.serializeBinaryToWriter
    );
  }
  f = message.getVoteB();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tendermint_types_types_pb.Vote.serializeBinaryToWriter
    );
  }
  f = message.getTotalVotingPower();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getValidatorPower();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Vote vote_a = 1;
 * @return {?proto.tendermint.types.Vote}
 */
proto.tendermint.types.DuplicateVoteEvidence.prototype.getVoteA = function() {
  return /** @type{?proto.tendermint.types.Vote} */ (
    jspb.Message.getWrapperField(this, tendermint_types_types_pb.Vote, 1));
};


/** @param {?proto.tendermint.types.Vote|undefined} value */
proto.tendermint.types.DuplicateVoteEvidence.prototype.setVoteA = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tendermint.types.DuplicateVoteEvidence.prototype.clearVoteA = function() {
  this.setVoteA(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tendermint.types.DuplicateVoteEvidence.prototype.hasVoteA = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Vote vote_b = 2;
 * @return {?proto.tendermint.types.Vote}
 */
proto.tendermint.types.DuplicateVoteEvidence.prototype.getVoteB = function() {
  return /** @type{?proto.tendermint.types.Vote} */ (
    jspb.Message.getWrapperField(this, tendermint_types_types_pb.Vote, 2));
};


/** @param {?proto.tendermint.types.Vote|undefined} value */
proto.tendermint.types.DuplicateVoteEvidence.prototype.setVoteB = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tendermint.types.DuplicateVoteEvidence.prototype.clearVoteB = function() {
  this.setVoteB(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tendermint.types.DuplicateVoteEvidence.prototype.hasVoteB = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 total_voting_power = 3;
 * @return {number}
 */
proto.tendermint.types.DuplicateVoteEvidence.prototype.getTotalVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tendermint.types.DuplicateVoteEvidence.prototype.setTotalVotingPower = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 validator_power = 4;
 * @return {number}
 */
proto.tendermint.types.DuplicateVoteEvidence.prototype.getValidatorPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.tendermint.types.DuplicateVoteEvidence.prototype.setValidatorPower = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tendermint.types.DuplicateVoteEvidence.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.tendermint.types.DuplicateVoteEvidence.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.tendermint.types.DuplicateVoteEvidence.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tendermint.types.DuplicateVoteEvidence.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.tendermint.types.LightClientAttackEvidence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.types.LightClientAttackEvidence.repeatedFields_, null);
};
goog.inherits(proto.tendermint.types.LightClientAttackEvidence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tendermint.types.LightClientAttackEvidence.displayName = 'proto.tendermint.types.LightClientAttackEvidence';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.types.LightClientAttackEvidence.repeatedFields_ = [3];



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
proto.tendermint.types.LightClientAttackEvidence.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.types.LightClientAttackEvidence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.types.LightClientAttackEvidence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.LightClientAttackEvidence.toObject = function(includeInstance, msg) {
  var f, obj = {
    conflictingBlock: (f = msg.getConflictingBlock()) && tendermint_types_types_pb.LightBlock.toObject(includeInstance, f),
    commonHeight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    byzantineValidatorsList: jspb.Message.toObjectList(msg.getByzantineValidatorsList(),
    tendermint_types_validator_pb.Validator.toObject, includeInstance),
    totalVotingPower: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.tendermint.types.LightClientAttackEvidence}
 */
proto.tendermint.types.LightClientAttackEvidence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.types.LightClientAttackEvidence;
  return proto.tendermint.types.LightClientAttackEvidence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.types.LightClientAttackEvidence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.types.LightClientAttackEvidence}
 */
proto.tendermint.types.LightClientAttackEvidence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tendermint_types_types_pb.LightBlock;
      reader.readMessage(value,tendermint_types_types_pb.LightBlock.deserializeBinaryFromReader);
      msg.setConflictingBlock(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommonHeight(value);
      break;
    case 3:
      var value = new tendermint_types_validator_pb.Validator;
      reader.readMessage(value,tendermint_types_validator_pb.Validator.deserializeBinaryFromReader);
      msg.addByzantineValidators(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalVotingPower(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
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
proto.tendermint.types.LightClientAttackEvidence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.types.LightClientAttackEvidence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.types.LightClientAttackEvidence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.LightClientAttackEvidence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConflictingBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tendermint_types_types_pb.LightBlock.serializeBinaryToWriter
    );
  }
  f = message.getCommonHeight();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getByzantineValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      tendermint_types_validator_pb.Validator.serializeBinaryToWriter
    );
  }
  f = message.getTotalVotingPower();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional LightBlock conflicting_block = 1;
 * @return {?proto.tendermint.types.LightBlock}
 */
proto.tendermint.types.LightClientAttackEvidence.prototype.getConflictingBlock = function() {
  return /** @type{?proto.tendermint.types.LightBlock} */ (
    jspb.Message.getWrapperField(this, tendermint_types_types_pb.LightBlock, 1));
};


/** @param {?proto.tendermint.types.LightBlock|undefined} value */
proto.tendermint.types.LightClientAttackEvidence.prototype.setConflictingBlock = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tendermint.types.LightClientAttackEvidence.prototype.clearConflictingBlock = function() {
  this.setConflictingBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tendermint.types.LightClientAttackEvidence.prototype.hasConflictingBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 common_height = 2;
 * @return {number}
 */
proto.tendermint.types.LightClientAttackEvidence.prototype.getCommonHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tendermint.types.LightClientAttackEvidence.prototype.setCommonHeight = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Validator byzantine_validators = 3;
 * @return {!Array<!proto.tendermint.types.Validator>}
 */
proto.tendermint.types.LightClientAttackEvidence.prototype.getByzantineValidatorsList = function() {
  return /** @type{!Array<!proto.tendermint.types.Validator>} */ (
    jspb.Message.getRepeatedWrapperField(this, tendermint_types_validator_pb.Validator, 3));
};


/** @param {!Array<!proto.tendermint.types.Validator>} value */
proto.tendermint.types.LightClientAttackEvidence.prototype.setByzantineValidatorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tendermint.types.Validator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.types.Validator}
 */
proto.tendermint.types.LightClientAttackEvidence.prototype.addByzantineValidators = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tendermint.types.Validator, opt_index);
};


proto.tendermint.types.LightClientAttackEvidence.prototype.clearByzantineValidatorsList = function() {
  this.setByzantineValidatorsList([]);
};


/**
 * optional int64 total_voting_power = 4;
 * @return {number}
 */
proto.tendermint.types.LightClientAttackEvidence.prototype.getTotalVotingPower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.tendermint.types.LightClientAttackEvidence.prototype.setTotalVotingPower = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.tendermint.types.LightClientAttackEvidence.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.tendermint.types.LightClientAttackEvidence.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.tendermint.types.LightClientAttackEvidence.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tendermint.types.LightClientAttackEvidence.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.tendermint.types.EvidenceList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tendermint.types.EvidenceList.repeatedFields_, null);
};
goog.inherits(proto.tendermint.types.EvidenceList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tendermint.types.EvidenceList.displayName = 'proto.tendermint.types.EvidenceList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tendermint.types.EvidenceList.repeatedFields_ = [1];



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
proto.tendermint.types.EvidenceList.prototype.toObject = function(opt_includeInstance) {
  return proto.tendermint.types.EvidenceList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tendermint.types.EvidenceList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.EvidenceList.toObject = function(includeInstance, msg) {
  var f, obj = {
    evidenceList: jspb.Message.toObjectList(msg.getEvidenceList(),
    proto.tendermint.types.Evidence.toObject, includeInstance)
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
 * @return {!proto.tendermint.types.EvidenceList}
 */
proto.tendermint.types.EvidenceList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tendermint.types.EvidenceList;
  return proto.tendermint.types.EvidenceList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tendermint.types.EvidenceList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tendermint.types.EvidenceList}
 */
proto.tendermint.types.EvidenceList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tendermint.types.Evidence;
      reader.readMessage(value,proto.tendermint.types.Evidence.deserializeBinaryFromReader);
      msg.addEvidence(value);
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
proto.tendermint.types.EvidenceList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tendermint.types.EvidenceList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tendermint.types.EvidenceList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tendermint.types.EvidenceList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvidenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tendermint.types.Evidence.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Evidence evidence = 1;
 * @return {!Array<!proto.tendermint.types.Evidence>}
 */
proto.tendermint.types.EvidenceList.prototype.getEvidenceList = function() {
  return /** @type{!Array<!proto.tendermint.types.Evidence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tendermint.types.Evidence, 1));
};


/** @param {!Array<!proto.tendermint.types.Evidence>} value */
proto.tendermint.types.EvidenceList.prototype.setEvidenceList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tendermint.types.Evidence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tendermint.types.Evidence}
 */
proto.tendermint.types.EvidenceList.prototype.addEvidence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tendermint.types.Evidence, opt_index);
};


proto.tendermint.types.EvidenceList.prototype.clearEvidenceList = function() {
  this.setEvidenceList([]);
};


goog.object.extend(exports, proto.tendermint.types);
