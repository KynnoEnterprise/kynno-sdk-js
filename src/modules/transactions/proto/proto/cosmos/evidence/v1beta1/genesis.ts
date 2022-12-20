// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: cosmos/evidence/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export namespace cosmos.evidence.v1beta1 {
    export class GenesisState extends pb_1.Message {
        constructor(data?: any[] | {
            evidence?: dependency_1.google.protobuf.Any[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("evidence" in data && data.evidence != undefined) {
                    this.evidence = data.evidence;
                }
            }
        }
        get evidence() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.google.protobuf.Any, 1) as dependency_1.google.protobuf.Any[];
        }
        set evidence(value: dependency_1.google.protobuf.Any[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            evidence?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
        }) {
            const message = new GenesisState({});
            if (data.evidence != null) {
                message.evidence = data.evidence.map(item => dependency_1.google.protobuf.Any.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                evidence?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>[];
            } = {};
            if (this.evidence != null) {
                data.evidence = this.evidence.map((item: dependency_1.google.protobuf.Any) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.evidence !== undefined)
                writer.writeRepeatedMessage(1, this.evidence, (item: dependency_1.google.protobuf.Any) => item.serialize(writer));
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
                        reader.readMessage(message.evidence, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.google.protobuf.Any.deserialize(reader), dependency_1.google.protobuf.Any));
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
