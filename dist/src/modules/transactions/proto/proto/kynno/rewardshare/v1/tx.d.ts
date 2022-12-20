import * as pb_1 from "google-protobuf";
export declare namespace kynno.rewardshare.v1 {
    class MsgRegisterRewardshare extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
            nonces?: number[];
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        get withdrawer_address(): string;
        set withdrawer_address(value: string);
        get nonces(): number[];
        set nonces(value: number[]);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
            nonces?: number[];
        }): MsgRegisterRewardshare;
        toObject(): {
            contract_address?: string | undefined;
            deployer_address?: string | undefined;
            withdrawer_address?: string | undefined;
            nonces?: number[] | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterRewardshare;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRegisterRewardshare;
    }
    class MsgRegisterRewardshareResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgRegisterRewardshareResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgRegisterRewardshareResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgRegisterRewardshareResponse;
    }
    class MsgUpdateRewardshare extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        get withdrawer_address(): string;
        set withdrawer_address(value: string);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
            withdrawer_address?: string;
        }): MsgUpdateRewardshare;
        toObject(): {
            contract_address?: string | undefined;
            deployer_address?: string | undefined;
            withdrawer_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateRewardshare;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateRewardshare;
    }
    class MsgUpdateRewardshareResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgUpdateRewardshareResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateRewardshareResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgUpdateRewardshareResponse;
    }
    class MsgCancelRewardshare extends pb_1.Message {
        constructor(data?: any[] | {
            contract_address?: string;
            deployer_address?: string;
        });
        get contract_address(): string;
        set contract_address(value: string);
        get deployer_address(): string;
        set deployer_address(value: string);
        static fromObject(data: {
            contract_address?: string;
            deployer_address?: string;
        }): MsgCancelRewardshare;
        toObject(): {
            contract_address?: string | undefined;
            deployer_address?: string | undefined;
        };
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelRewardshare;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelRewardshare;
    }
    class MsgCancelRewardshareResponse extends pb_1.Message {
        constructor(data?: any[] | {});
        static fromObject(data: {}): MsgCancelRewardshareResponse;
        toObject(): {};
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCancelRewardshareResponse;
        serializeBinary(): Uint8Array;
        static deserializeBinary(bytes: Uint8Array): MsgCancelRewardshareResponse;
    }
}
