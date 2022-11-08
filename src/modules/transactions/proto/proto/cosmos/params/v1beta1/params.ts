/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: cosmos/params/v1beta1/params.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace cosmos.params.v1beta1 {
    export class ParameterChangeProposal extends pb_1.Message {
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            changes?: ParamChange[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("changes" in data && data.changes != undefined) {
                    this.changes = data.changes;
                }
            }
        }
        get title() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get changes() {
            return pb_1.Message.getRepeatedWrapperField(this, ParamChange, 3) as ParamChange[];
        }
        set changes(value: ParamChange[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            changes?: ReturnType<typeof ParamChange.prototype.toObject>[];
        }) {
            const message = new ParameterChangeProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.changes != null) {
                message.changes = data.changes.map(item => ParamChange.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                changes?: ReturnType<typeof ParamChange.prototype.toObject>[];
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.changes != null) {
                data.changes = this.changes.map((item: ParamChange) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length)
                writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length)
                writer.writeString(2, this.description);
            if (this.changes !== undefined)
                writer.writeRepeatedMessage(3, this.changes, (item: ParamChange) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ParameterChangeProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ParameterChangeProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.changes, () => pb_1.Message.addToRepeatedWrapperField(message, 3, ParamChange.deserialize(reader), ParamChange));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ParameterChangeProposal {
            return ParameterChangeProposal.deserialize(bytes);
        }
    }
    export class ParamChange extends pb_1.Message {
        constructor(data?: any[] | {
            subspace?: string;
            key?: string;
            value?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("subspace" in data && data.subspace != undefined) {
                    this.subspace = data.subspace;
                }
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
            }
        }
        get subspace() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set subspace(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get key() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set key(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get value() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set value(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            subspace?: string;
            key?: string;
            value?: string;
        }) {
            const message = new ParamChange({});
            if (data.subspace != null) {
                message.subspace = data.subspace;
            }
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        }
        toObject() {
            const data: {
                subspace?: string;
                key?: string;
                value?: string;
            } = {};
            if (this.subspace != null) {
                data.subspace = this.subspace;
            }
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.subspace === "string" && this.subspace.length)
                writer.writeString(1, this.subspace);
            if (typeof this.key === "string" && this.key.length)
                writer.writeString(2, this.key);
            if (typeof this.value === "string" && this.value.length)
                writer.writeString(3, this.value);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ParamChange {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ParamChange();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.subspace = reader.readString();
                        break;
                    case 2:
                        message.key = reader.readString();
                        break;
                    case 3:
                        message.value = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ParamChange {
            return ParamChange.deserialize(bytes);
        }
    }
}
