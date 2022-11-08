/// <reference types="node" />
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: kynno/vesting/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../cosmos/base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export declare namespace kynno.vesting.v1 {
    export class QueryBalancesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
        });
        get address(): string;
        set address(value: string);
        static fromObject(data: {
            address?: string;
        }): QueryBalancesRequest;
        toObject(): {
            address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBalancesRequest;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBalancesRequest;
    }
    export class QueryBalancesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            locked?: dependency_1.cosmos.base.v1beta1.Coin[];
            unvested?: dependency_1.cosmos.base.v1beta1.Coin[];
            vested?: dependency_1.cosmos.base.v1beta1.Coin[];
        });
        get locked(): dependency_1.cosmos.base.v1beta1.Coin[];
        set locked(value: dependency_1.cosmos.base.v1beta1.Coin[]);
        get unvested(): dependency_1.cosmos.base.v1beta1.Coin[];
        set unvested(value: dependency_1.cosmos.base.v1beta1.Coin[]);
        get vested(): dependency_1.cosmos.base.v1beta1.Coin[];
        set vested(value: dependency_1.cosmos.base.v1beta1.Coin[]);
        static fromObject(data: {
            locked?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            unvested?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            vested?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): QueryBalancesResponse;
        toObject(): {
            locked?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            unvested?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            vested?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryBalancesResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): QueryBalancesResponse;
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    export abstract class UnimplementedQueryService {
        static definition: {
            Balances: {
                path: string;
                requestStream: boolean;
                responseStream: boolean;
                requestSerialize: (message: QueryBalancesRequest) => Buffer;
                requestDeserialize: (bytes: Buffer) => QueryBalancesRequest;
                responseSerialize: (message: QueryBalancesResponse) => Buffer;
                responseDeserialize: (bytes: Buffer) => QueryBalancesResponse;
            };
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Balances(call: grpc_1.ServerUnaryCall<QueryBalancesRequest, QueryBalancesResponse>, callback: grpc_1.sendUnaryData<QueryBalancesResponse>): void;
    }
    const QueryClient_base: grpc_1.ServiceClientConstructor;
    export class QueryClient extends QueryClient_base {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>);
        Balances: GrpcUnaryServiceInterface<QueryBalancesRequest, QueryBalancesResponse>;
    }
    export {};
}