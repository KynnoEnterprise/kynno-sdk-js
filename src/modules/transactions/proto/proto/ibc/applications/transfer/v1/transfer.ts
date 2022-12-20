// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: ibc/applications/transfer/v1/transfer.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.transfer.v1 {
    export class DenomTrace extends pb_1.Message {
        constructor(data?: any[] | {
            path?: string;
            base_denom?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("path" in data && data.path != undefined) {
                    this.path = data.path;
                }
                if ("base_denom" in data && data.base_denom != undefined) {
                    this.base_denom = data.base_denom;
                }
            }
        }
        get path() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set path(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get base_denom() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set base_denom(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            path?: string;
            base_denom?: string;
        }) {
            const message = new DenomTrace({});
            if (data.path != null) {
                message.path = data.path;
            }
            if (data.base_denom != null) {
                message.base_denom = data.base_denom;
            }
            return message;
        }
        toObject() {
            const data: {
                path?: string;
                base_denom?: string;
            } = {};
            if (this.path != null) {
                data.path = this.path;
            }
            if (this.base_denom != null) {
                data.base_denom = this.base_denom;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.path === "string" && this.path.length)
                writer.writeString(1, this.path);
            if (typeof this.base_denom === "string" && this.base_denom.length)
                writer.writeString(2, this.base_denom);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DenomTrace {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DenomTrace();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.path = reader.readString();
                        break;
                    case 2:
                        message.base_denom = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DenomTrace {
            return DenomTrace.deserialize(bytes);
        }
    }
    export class Params extends pb_1.Message {
        constructor(data?: any[] | {
            send_enabled?: boolean;
            receive_enabled?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("send_enabled" in data && data.send_enabled != undefined) {
                    this.send_enabled = data.send_enabled;
                }
                if ("receive_enabled" in data && data.receive_enabled != undefined) {
                    this.receive_enabled = data.receive_enabled;
                }
            }
        }
        get send_enabled() {
            return pb_1.Message.getField(this, 1) as boolean;
        }
        set send_enabled(value: boolean) {
            pb_1.Message.setField(this, 1, value);
        }
        get receive_enabled() {
            return pb_1.Message.getField(this, 2) as boolean;
        }
        set receive_enabled(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            send_enabled?: boolean;
            receive_enabled?: boolean;
        }) {
            const message = new Params({});
            if (data.send_enabled != null) {
                message.send_enabled = data.send_enabled;
            }
            if (data.receive_enabled != null) {
                message.receive_enabled = data.receive_enabled;
            }
            return message;
        }
        toObject() {
            const data: {
                send_enabled?: boolean;
                receive_enabled?: boolean;
            } = {};
            if (this.send_enabled != null) {
                data.send_enabled = this.send_enabled;
            }
            if (this.receive_enabled != null) {
                data.receive_enabled = this.receive_enabled;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.send_enabled !== undefined)
                writer.writeBool(1, this.send_enabled);
            if (this.receive_enabled !== undefined)
                writer.writeBool(2, this.receive_enabled);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.send_enabled = reader.readBool();
                        break;
                    case 2:
                        message.receive_enabled = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
}
