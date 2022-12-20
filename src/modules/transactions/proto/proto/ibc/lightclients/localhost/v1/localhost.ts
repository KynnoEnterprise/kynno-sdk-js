// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: ibc/lightclients/localhost/v1/localhost.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as dependency_2 from "./../../../core/client/v1/client";
import * as pb_1 from "google-protobuf";
export namespace ibc.lightclients.localhost.v1 {
    export class ClientState extends pb_1.Message {
        constructor(data?: any[] | {
            chain_id?: string;
            height?: dependency_2.ibc.core.client.v1.Height;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("chain_id" in data && data.chain_id != undefined) {
                    this.chain_id = data.chain_id;
                }
                if ("height" in data && data.height != undefined) {
                    this.height = data.height;
                }
            }
        }
        get chain_id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set chain_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get height() {
            return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.Height, 2) as dependency_2.ibc.core.client.v1.Height;
        }
        set height(value: dependency_2.ibc.core.client.v1.Height) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            chain_id?: string;
            height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
        }) {
            const message = new ClientState({});
            if (data.chain_id != null) {
                message.chain_id = data.chain_id;
            }
            if (data.height != null) {
                message.height = dependency_2.ibc.core.client.v1.Height.fromObject(data.height);
            }
            return message;
        }
        toObject() {
            const data: {
                chain_id?: string;
                height?: ReturnType<typeof dependency_2.ibc.core.client.v1.Height.prototype.toObject>;
            } = {};
            if (this.chain_id != null) {
                data.chain_id = this.chain_id;
            }
            if (this.height != null) {
                data.height = this.height.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.chain_id === "string" && this.chain_id.length)
                writer.writeString(1, this.chain_id);
            if (this.height !== undefined)
                writer.writeMessage(2, this.height, () => this.height.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.chain_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.height, () => message.height = dependency_2.ibc.core.client.v1.Height.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ClientState {
            return ClientState.deserialize(bytes);
        }
    }
}
