/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: google/protobuf/duration.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export declare namespace google.protobuf {
    class Duration extends pb_1.Message {
        constructor(data?: any[] | {
            seconds?: number;
            nanos?: number;
        });
        get seconds(): number;
        set seconds(value: number);
        get nanos(): number;
        set nanos(value: number);
        static fromObject(data: {
            seconds?: number;
            nanos?: number;
        }): Duration;
        toObject(): {
            seconds?: number | undefined;
            nanos?: number | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Duration;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): Duration;
    }
}
