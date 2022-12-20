// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: ibc/core/types/v1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as dependency_2 from "./../../client/v1/genesis";
import * as dependency_3 from "./../../connection/v1/genesis";
import * as dependency_4 from "./../../channel/v1/genesis";
import * as pb_1 from "google-protobuf";
export namespace ibc.core.types.v1 {
    export class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            client_genesis?: dependency_2.ibc.core.client.v1.GenesisState;
            connection_genesis?: dependency_3.ibc.core.connection.v1.GenesisState;
            channel_genesis?: dependency_4.ibc.core.channel.v1.GenesisState;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_genesis" in data && data.client_genesis != undefined) {
                    this.client_genesis = data.client_genesis;
                }
                if ("connection_genesis" in data && data.connection_genesis != undefined) {
                    this.connection_genesis = data.connection_genesis;
                }
                if ("channel_genesis" in data && data.channel_genesis != undefined) {
                    this.channel_genesis = data.channel_genesis;
                }
            }
        }
        get client_genesis() {
            return pb_1.Message.getWrapperField(this, dependency_2.ibc.core.client.v1.GenesisState, 1) as dependency_2.ibc.core.client.v1.GenesisState;
        }
        set client_genesis(value: dependency_2.ibc.core.client.v1.GenesisState) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get connection_genesis() {
            return pb_1.Message.getWrapperField(this, dependency_3.ibc.core.connection.v1.GenesisState, 2) as dependency_3.ibc.core.connection.v1.GenesisState;
        }
        set connection_genesis(value: dependency_3.ibc.core.connection.v1.GenesisState) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get channel_genesis() {
            return pb_1.Message.getWrapperField(this, dependency_4.ibc.core.channel.v1.GenesisState, 3) as dependency_4.ibc.core.channel.v1.GenesisState;
        }
        set channel_genesis(value: dependency_4.ibc.core.channel.v1.GenesisState) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        static fromObject(data: {
            client_genesis?: ReturnType<typeof dependency_2.ibc.core.client.v1.GenesisState.prototype.toObject>;
            connection_genesis?: ReturnType<typeof dependency_3.ibc.core.connection.v1.GenesisState.prototype.toObject>;
            channel_genesis?: ReturnType<typeof dependency_4.ibc.core.channel.v1.GenesisState.prototype.toObject>;
        }) {
            const message = new GenesisState({});
            if (data.client_genesis != null) {
                message.client_genesis = dependency_2.ibc.core.client.v1.GenesisState.fromObject(data.client_genesis);
            }
            if (data.connection_genesis != null) {
                message.connection_genesis = dependency_3.ibc.core.connection.v1.GenesisState.fromObject(data.connection_genesis);
            }
            if (data.channel_genesis != null) {
                message.channel_genesis = dependency_4.ibc.core.channel.v1.GenesisState.fromObject(data.channel_genesis);
            }
            return message;
        }
        toObject() {
            const data: {
                client_genesis?: ReturnType<typeof dependency_2.ibc.core.client.v1.GenesisState.prototype.toObject>;
                connection_genesis?: ReturnType<typeof dependency_3.ibc.core.connection.v1.GenesisState.prototype.toObject>;
                channel_genesis?: ReturnType<typeof dependency_4.ibc.core.channel.v1.GenesisState.prototype.toObject>;
            } = {};
            if (this.client_genesis != null) {
                data.client_genesis = this.client_genesis.toObject();
            }
            if (this.connection_genesis != null) {
                data.connection_genesis = this.connection_genesis.toObject();
            }
            if (this.channel_genesis != null) {
                data.channel_genesis = this.channel_genesis.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_genesis !== undefined)
                writer.writeMessage(1, this.client_genesis, () => this.client_genesis.serialize(writer));
            if (this.connection_genesis !== undefined)
                writer.writeMessage(2, this.connection_genesis, () => this.connection_genesis.serialize(writer));
            if (this.channel_genesis !== undefined)
                writer.writeMessage(3, this.channel_genesis, () => this.channel_genesis.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.client_genesis, () => message.client_genesis = dependency_2.ibc.core.client.v1.GenesisState.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.connection_genesis, () => message.connection_genesis = dependency_3.ibc.core.connection.v1.GenesisState.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.channel_genesis, () => message.channel_genesis = dependency_4.ibc.core.channel.v1.GenesisState.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
}
