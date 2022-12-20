// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: kynno/nft/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../gogoproto/gogo";
import * as dependency_2 from "./nft";
import * as pb_1 from "google-protobuf";
export namespace kynno.nft {
    export class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            collections?: dependency_2.kynno.nft.Collection[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("collections" in data && data.collections != undefined) {
                    this.collections = data.collections;
                }
            }
        }
        get collections() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.kynno.nft.Collection, 1) as dependency_2.kynno.nft.Collection[];
        }
        set collections(value: dependency_2.kynno.nft.Collection[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            collections?: ReturnType<typeof dependency_2.kynno.nft.Collection.prototype.toObject>[];
        }) {
            const message = new GenesisState({});
            if (data.collections != null) {
                message.collections = data.collections.map(item => dependency_2.kynno.nft.Collection.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                collections?: ReturnType<typeof dependency_2.kynno.nft.Collection.prototype.toObject>[];
            } = {};
            if (this.collections != null) {
                data.collections = this.collections.map((item: dependency_2.kynno.nft.Collection) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.collections !== undefined)
                writer.writeRepeatedMessage(1, this.collections, (item: dependency_2.kynno.nft.Collection) => item.serialize(writer));
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
                        reader.readMessage(message.collections, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.kynno.nft.Collection.deserialize(reader), dependency_2.kynno.nft.Collection));
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
