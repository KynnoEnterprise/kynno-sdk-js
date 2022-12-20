// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: kynno/vesting/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../cosmos/base/v1beta1/coin";
import * as dependency_2 from "./../../../google/api/annotations";
import * as dependency_3 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace kynno.vesting.v1 {
    export class QueryBalancesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            address?: string;
        }) {
            const message = new QueryBalancesRequest({});
            if (data.address != null) {
                message.address = data.address;
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBalancesRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBalancesRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryBalancesRequest {
            return QueryBalancesRequest.deserialize(bytes);
        }
    }
    export class QueryBalancesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            locked?: dependency_1.cosmos.base.v1beta1.Coin[];
            unvested?: dependency_1.cosmos.base.v1beta1.Coin[];
            vested?: dependency_1.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 3], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("locked" in data && data.locked != undefined) {
                    this.locked = data.locked;
                }
                if ("unvested" in data && data.unvested != undefined) {
                    this.unvested = data.unvested;
                }
                if ("vested" in data && data.vested != undefined) {
                    this.vested = data.vested;
                }
            }
        }
        get locked() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 1) as dependency_1.cosmos.base.v1beta1.Coin[];
        }
        set locked(value: dependency_1.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get unvested() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 2) as dependency_1.cosmos.base.v1beta1.Coin[];
        }
        set unvested(value: dependency_1.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get vested() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 3) as dependency_1.cosmos.base.v1beta1.Coin[];
        }
        set vested(value: dependency_1.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            locked?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            unvested?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            vested?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }) {
            const message = new QueryBalancesResponse({});
            if (data.locked != null) {
                message.locked = data.locked.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.unvested != null) {
                message.unvested = data.unvested.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.vested != null) {
                message.vested = data.vested.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                locked?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                unvested?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                vested?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.locked != null) {
                data.locked = this.locked.map((item: dependency_1.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.unvested != null) {
                data.unvested = this.unvested.map((item: dependency_1.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.vested != null) {
                data.vested = this.vested.map((item: dependency_1.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.locked !== undefined)
                writer.writeRepeatedMessage(1, this.locked, (item: dependency_1.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.unvested !== undefined)
                writer.writeRepeatedMessage(2, this.unvested, (item: dependency_1.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.vested !== undefined)
                writer.writeRepeatedMessage(3, this.vested, (item: dependency_1.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBalancesResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryBalancesResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.locked, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
                        break;
                    case 2:
                        reader.readMessage(message.unvested, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
                        break;
                    case 3:
                        reader.readMessage(message.vested, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryBalancesResponse {
            return QueryBalancesResponse.deserialize(bytes);
        }
    }
}
