// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: cosmos/slashing/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace cosmos.slashing.v1beta1 {
    export class MsgUnjail extends pb_1.Message {
        constructor(data?: any[] | {
            validator_addr?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("validator_addr" in data && data.validator_addr != undefined) {
                    this.validator_addr = data.validator_addr;
                }
            }
        }
        get validator_addr() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set validator_addr(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            validator_addr?: string;
        }) {
            const message = new MsgUnjail({});
            if (data.validator_addr != null) {
                message.validator_addr = data.validator_addr;
            }
            return message;
        }
        toObject() {
            const data: {
                validator_addr?: string;
            } = {};
            if (this.validator_addr != null) {
                data.validator_addr = this.validator_addr;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.validator_addr === "string" && this.validator_addr.length)
                writer.writeString(1, this.validator_addr);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUnjail {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUnjail();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.validator_addr = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgUnjail {
            return MsgUnjail.deserialize(bytes);
        }
    }
    export class MsgUnjailResponse extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgUnjailResponse({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUnjailResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUnjailResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgUnjailResponse {
            return MsgUnjailResponse.deserialize(bytes);
        }
    }
}
