// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: kynno/vesting/v1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/api/annotations";
import * as dependency_2 from "./../../../gogoproto/gogo";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./../../../cosmos/vesting/v1beta1/vesting";
import * as pb_1 from "google-protobuf";
export namespace kynno.vesting.v1 {
    export class MsgCreateClawbackVestingAccount extends pb_1.Message {
        constructor(data?: any[] | {
            from_address?: string;
            to_address?: string;
            start_time?: dependency_3.google.protobuf.Timestamp;
            lockup_periods?: dependency_4.cosmos.vesting.v1beta1.Period[];
            vesting_periods?: dependency_4.cosmos.vesting.v1beta1.Period[];
            merge?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4, 5], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("from_address" in data && data.from_address != undefined) {
                    this.from_address = data.from_address;
                }
                if ("to_address" in data && data.to_address != undefined) {
                    this.to_address = data.to_address;
                }
                if ("start_time" in data && data.start_time != undefined) {
                    this.start_time = data.start_time;
                }
                if ("lockup_periods" in data && data.lockup_periods != undefined) {
                    this.lockup_periods = data.lockup_periods;
                }
                if ("vesting_periods" in data && data.vesting_periods != undefined) {
                    this.vesting_periods = data.vesting_periods;
                }
                if ("merge" in data && data.merge != undefined) {
                    this.merge = data.merge;
                }
            }
        }
        get from_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set from_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get to_address() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set to_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get start_time() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 3) as dependency_3.google.protobuf.Timestamp;
        }
        set start_time(value: dependency_3.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get lockup_periods() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.vesting.v1beta1.Period, 4) as dependency_4.cosmos.vesting.v1beta1.Period[];
        }
        set lockup_periods(value: dependency_4.cosmos.vesting.v1beta1.Period[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        get vesting_periods() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.vesting.v1beta1.Period, 5) as dependency_4.cosmos.vesting.v1beta1.Period[];
        }
        set vesting_periods(value: dependency_4.cosmos.vesting.v1beta1.Period[]) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
        }
        get merge() {
            return pb_1.Message.getField(this, 6) as boolean;
        }
        set merge(value: boolean) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            from_address?: string;
            to_address?: string;
            start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            lockup_periods?: ReturnType<typeof dependency_4.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
            vesting_periods?: ReturnType<typeof dependency_4.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
            merge?: boolean;
        }) {
            const message = new MsgCreateClawbackVestingAccount({});
            if (data.from_address != null) {
                message.from_address = data.from_address;
            }
            if (data.to_address != null) {
                message.to_address = data.to_address;
            }
            if (data.start_time != null) {
                message.start_time = dependency_3.google.protobuf.Timestamp.fromObject(data.start_time);
            }
            if (data.lockup_periods != null) {
                message.lockup_periods = data.lockup_periods.map(item => dependency_4.cosmos.vesting.v1beta1.Period.fromObject(item));
            }
            if (data.vesting_periods != null) {
                message.vesting_periods = data.vesting_periods.map(item => dependency_4.cosmos.vesting.v1beta1.Period.fromObject(item));
            }
            if (data.merge != null) {
                message.merge = data.merge;
            }
            return message;
        }
        toObject() {
            const data: {
                from_address?: string;
                to_address?: string;
                start_time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
                lockup_periods?: ReturnType<typeof dependency_4.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
                vesting_periods?: ReturnType<typeof dependency_4.cosmos.vesting.v1beta1.Period.prototype.toObject>[];
                merge?: boolean;
            } = {};
            if (this.from_address != null) {
                data.from_address = this.from_address;
            }
            if (this.to_address != null) {
                data.to_address = this.to_address;
            }
            if (this.start_time != null) {
                data.start_time = this.start_time.toObject();
            }
            if (this.lockup_periods != null) {
                data.lockup_periods = this.lockup_periods.map((item: dependency_4.cosmos.vesting.v1beta1.Period) => item.toObject());
            }
            if (this.vesting_periods != null) {
                data.vesting_periods = this.vesting_periods.map((item: dependency_4.cosmos.vesting.v1beta1.Period) => item.toObject());
            }
            if (this.merge != null) {
                data.merge = this.merge;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.from_address === "string" && this.from_address.length)
                writer.writeString(1, this.from_address);
            if (typeof this.to_address === "string" && this.to_address.length)
                writer.writeString(2, this.to_address);
            if (this.start_time !== undefined)
                writer.writeMessage(3, this.start_time, () => this.start_time.serialize(writer));
            if (this.lockup_periods !== undefined)
                writer.writeRepeatedMessage(4, this.lockup_periods, (item: dependency_4.cosmos.vesting.v1beta1.Period) => item.serialize(writer));
            if (this.vesting_periods !== undefined)
                writer.writeRepeatedMessage(5, this.vesting_periods, (item: dependency_4.cosmos.vesting.v1beta1.Period) => item.serialize(writer));
            if (this.merge !== undefined)
                writer.writeBool(6, this.merge);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateClawbackVestingAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateClawbackVestingAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.from_address = reader.readString();
                        break;
                    case 2:
                        message.to_address = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.start_time, () => message.start_time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.lockup_periods, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_4.cosmos.vesting.v1beta1.Period.deserialize(reader), dependency_4.cosmos.vesting.v1beta1.Period));
                        break;
                    case 5:
                        reader.readMessage(message.vesting_periods, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_4.cosmos.vesting.v1beta1.Period.deserialize(reader), dependency_4.cosmos.vesting.v1beta1.Period));
                        break;
                    case 6:
                        message.merge = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCreateClawbackVestingAccount {
            return MsgCreateClawbackVestingAccount.deserialize(bytes);
        }
    }
    export class MsgCreateClawbackVestingAccountResponse extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgCreateClawbackVestingAccountResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateClawbackVestingAccountResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateClawbackVestingAccountResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgCreateClawbackVestingAccountResponse {
            return MsgCreateClawbackVestingAccountResponse.deserialize(bytes);
        }
    }
    export class MsgClawback extends pb_1.Message {
        constructor(data?: any[] | {
            funder_address?: string;
            account_address?: string;
            dest_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("funder_address" in data && data.funder_address != undefined) {
                    this.funder_address = data.funder_address;
                }
                if ("account_address" in data && data.account_address != undefined) {
                    this.account_address = data.account_address;
                }
                if ("dest_address" in data && data.dest_address != undefined) {
                    this.dest_address = data.dest_address;
                }
            }
        }
        get funder_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set funder_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get account_address() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set account_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get dest_address() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set dest_address(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            funder_address?: string;
            account_address?: string;
            dest_address?: string;
        }) {
            const message = new MsgClawback({});
            if (data.funder_address != null) {
                message.funder_address = data.funder_address;
            }
            if (data.account_address != null) {
                message.account_address = data.account_address;
            }
            if (data.dest_address != null) {
                message.dest_address = data.dest_address;
            }
            return message;
        }
        toObject() {
            const data: {
                funder_address?: string;
                account_address?: string;
                dest_address?: string;
            } = {};
            if (this.funder_address != null) {
                data.funder_address = this.funder_address;
            }
            if (this.account_address != null) {
                data.account_address = this.account_address;
            }
            if (this.dest_address != null) {
                data.dest_address = this.dest_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.funder_address === "string" && this.funder_address.length)
                writer.writeString(1, this.funder_address);
            if (typeof this.account_address === "string" && this.account_address.length)
                writer.writeString(2, this.account_address);
            if (typeof this.dest_address === "string" && this.dest_address.length)
                writer.writeString(3, this.dest_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgClawback {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgClawback();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.funder_address = reader.readString();
                        break;
                    case 2:
                        message.account_address = reader.readString();
                        break;
                    case 3:
                        message.dest_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgClawback {
            return MsgClawback.deserialize(bytes);
        }
    }
    export class MsgClawbackResponse extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgClawbackResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgClawbackResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgClawbackResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgClawbackResponse {
            return MsgClawbackResponse.deserialize(bytes);
        }
    }
}
