/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: cosmos/bank/v1beta1/bank.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../../cosmos_proto/cosmos";
import * as dependency_3 from "./../../base/v1beta1/coin";
import * as pb_1 from "google-protobuf";
export namespace cosmos.bank.v1beta1 {
    export class Params extends pb_1.Message {
        constructor(data?: any[] | {
            send_enabled?: SendEnabled[];
            default_send_enabled?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("send_enabled" in data && data.send_enabled != undefined) {
                    this.send_enabled = data.send_enabled;
                }
                if ("default_send_enabled" in data && data.default_send_enabled != undefined) {
                    this.default_send_enabled = data.default_send_enabled;
                }
            }
        }
        get send_enabled() {
            return pb_1.Message.getRepeatedWrapperField(this, SendEnabled, 1) as SendEnabled[];
        }
        set send_enabled(value: SendEnabled[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get default_send_enabled() {
            return pb_1.Message.getField(this, 2) as boolean;
        }
        set default_send_enabled(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            send_enabled?: ReturnType<typeof SendEnabled.prototype.toObject>[];
            default_send_enabled?: boolean;
        }) {
            const message = new Params({});
            if (data.send_enabled != null) {
                message.send_enabled = data.send_enabled.map(item => SendEnabled.fromObject(item));
            }
            if (data.default_send_enabled != null) {
                message.default_send_enabled = data.default_send_enabled;
            }
            return message;
        }
        toObject() {
            const data: {
                send_enabled?: ReturnType<typeof SendEnabled.prototype.toObject>[];
                default_send_enabled?: boolean;
            } = {};
            if (this.send_enabled != null) {
                data.send_enabled = this.send_enabled.map((item: SendEnabled) => item.toObject());
            }
            if (this.default_send_enabled != null) {
                data.default_send_enabled = this.default_send_enabled;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.send_enabled !== undefined)
                writer.writeRepeatedMessage(1, this.send_enabled, (item: SendEnabled) => item.serialize(writer));
            if (this.default_send_enabled !== undefined)
                writer.writeBool(2, this.default_send_enabled);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Params {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Params();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.send_enabled, () => pb_1.Message.addToRepeatedWrapperField(message, 1, SendEnabled.deserialize(reader), SendEnabled));
                        break;
                    case 2:
                        message.default_send_enabled = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Params {
            return Params.deserialize(bytes);
        }
    }
    export class SendEnabled extends pb_1.Message {
        constructor(data?: any[] | {
            denom?: string;
            enabled?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("enabled" in data && data.enabled != undefined) {
                    this.enabled = data.enabled;
                }
            }
        }
        get denom() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set denom(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get enabled() {
            return pb_1.Message.getField(this, 2) as boolean;
        }
        set enabled(value: boolean) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            denom?: string;
            enabled?: boolean;
        }) {
            const message = new SendEnabled({});
            if (data.denom != null) {
                message.denom = data.denom;
            }
            if (data.enabled != null) {
                message.enabled = data.enabled;
            }
            return message;
        }
        toObject() {
            const data: {
                denom?: string;
                enabled?: boolean;
            } = {};
            if (this.denom != null) {
                data.denom = this.denom;
            }
            if (this.enabled != null) {
                data.enabled = this.enabled;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.denom === "string" && this.denom.length)
                writer.writeString(1, this.denom);
            if (this.enabled !== undefined)
                writer.writeBool(2, this.enabled);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SendEnabled {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SendEnabled();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.denom = reader.readString();
                        break;
                    case 2:
                        message.enabled = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SendEnabled {
            return SendEnabled.deserialize(bytes);
        }
    }
    export class Input extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            coins?: dependency_3.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("coins" in data && data.coins != undefined) {
                    this.coins = data.coins;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get coins() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 2) as dependency_3.cosmos.base.v1beta1.Coin[];
        }
        set coins(value: dependency_3.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            address?: string;
            coins?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }) {
            const message = new Input({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.coins != null) {
                message.coins = data.coins.map(item => dependency_3.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                coins?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.coins != null) {
                data.coins = this.coins.map((item: dependency_3.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (this.coins !== undefined)
                writer.writeRepeatedMessage(2, this.coins, (item: dependency_3.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Input {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Input();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.coins, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Input {
            return Input.deserialize(bytes);
        }
    }
    export class Output extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            coins?: dependency_3.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("coins" in data && data.coins != undefined) {
                    this.coins = data.coins;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get coins() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 2) as dependency_3.cosmos.base.v1beta1.Coin[];
        }
        set coins(value: dependency_3.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            address?: string;
            coins?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }) {
            const message = new Output({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.coins != null) {
                message.coins = data.coins.map(item => dependency_3.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                coins?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.coins != null) {
                data.coins = this.coins.map((item: dependency_3.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (this.coins !== undefined)
                writer.writeRepeatedMessage(2, this.coins, (item: dependency_3.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Output {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Output();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.coins, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Output {
            return Output.deserialize(bytes);
        }
    }
    /** @deprecated*/
    export class Supply extends pb_1.Message {
        constructor(data?: any[] | {
            total?: dependency_3.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("total" in data && data.total != undefined) {
                    this.total = data.total;
                }
            }
        }
        get total() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 1) as dependency_3.cosmos.base.v1beta1.Coin[];
        }
        set total(value: dependency_3.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            total?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }) {
            const message = new Supply({});
            if (data.total != null) {
                message.total = data.total.map(item => dependency_3.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                total?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.total != null) {
                data.total = this.total.map((item: dependency_3.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.total !== undefined)
                writer.writeRepeatedMessage(1, this.total, (item: dependency_3.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Supply {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Supply();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.total, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Supply {
            return Supply.deserialize(bytes);
        }
    }
    export class DenomUnit extends pb_1.Message {
        constructor(data?: any[] | {
            denom?: string;
            exponent?: number;
            aliases?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("exponent" in data && data.exponent != undefined) {
                    this.exponent = data.exponent;
                }
                if ("aliases" in data && data.aliases != undefined) {
                    this.aliases = data.aliases;
                }
            }
        }
        get denom() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set denom(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get exponent() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set exponent(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get aliases() {
            return pb_1.Message.getField(this, 3) as string[];
        }
        set aliases(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            denom?: string;
            exponent?: number;
            aliases?: string[];
        }) {
            const message = new DenomUnit({});
            if (data.denom != null) {
                message.denom = data.denom;
            }
            if (data.exponent != null) {
                message.exponent = data.exponent;
            }
            if (data.aliases != null) {
                message.aliases = data.aliases;
            }
            return message;
        }
        toObject() {
            const data: {
                denom?: string;
                exponent?: number;
                aliases?: string[];
            } = {};
            if (this.denom != null) {
                data.denom = this.denom;
            }
            if (this.exponent != null) {
                data.exponent = this.exponent;
            }
            if (this.aliases != null) {
                data.aliases = this.aliases;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.denom === "string" && this.denom.length)
                writer.writeString(1, this.denom);
            if (this.exponent !== undefined)
                writer.writeUint32(2, this.exponent);
            if (this.aliases !== undefined)
                writer.writeRepeatedString(3, this.aliases);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DenomUnit {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DenomUnit();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.denom = reader.readString();
                        break;
                    case 2:
                        message.exponent = reader.readUint32();
                        break;
                    case 3:
                        pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DenomUnit {
            return DenomUnit.deserialize(bytes);
        }
    }
    export class Metadata extends pb_1.Message {
        constructor(data?: any[] | {
            description?: string;
            denom_units?: DenomUnit[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("denom_units" in data && data.denom_units != undefined) {
                    this.denom_units = data.denom_units;
                }
                if ("base" in data && data.base != undefined) {
                    this.base = data.base;
                }
                if ("display" in data && data.display != undefined) {
                    this.display = data.display;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("symbol" in data && data.symbol != undefined) {
                    this.symbol = data.symbol;
                }
            }
        }
        get description() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get denom_units() {
            return pb_1.Message.getRepeatedWrapperField(this, DenomUnit, 2) as DenomUnit[];
        }
        set denom_units(value: DenomUnit[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get base() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set base(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get display() {
            return pb_1.Message.getField(this, 4) as string;
        }
        set display(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get name() {
            return pb_1.Message.getField(this, 5) as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get symbol() {
            return pb_1.Message.getField(this, 6) as string;
        }
        set symbol(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            description?: string;
            denom_units?: ReturnType<typeof DenomUnit.prototype.toObject>[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
        }) {
            const message = new Metadata({});
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.denom_units != null) {
                message.denom_units = data.denom_units.map(item => DenomUnit.fromObject(item));
            }
            if (data.base != null) {
                message.base = data.base;
            }
            if (data.display != null) {
                message.display = data.display;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.symbol != null) {
                message.symbol = data.symbol;
            }
            return message;
        }
        toObject() {
            const data: {
                description?: string;
                denom_units?: ReturnType<typeof DenomUnit.prototype.toObject>[];
                base?: string;
                display?: string;
                name?: string;
                symbol?: string;
            } = {};
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.denom_units != null) {
                data.denom_units = this.denom_units.map((item: DenomUnit) => item.toObject());
            }
            if (this.base != null) {
                data.base = this.base;
            }
            if (this.display != null) {
                data.display = this.display;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.symbol != null) {
                data.symbol = this.symbol;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.description === "string" && this.description.length)
                writer.writeString(1, this.description);
            if (this.denom_units !== undefined)
                writer.writeRepeatedMessage(2, this.denom_units, (item: DenomUnit) => item.serialize(writer));
            if (typeof this.base === "string" && this.base.length)
                writer.writeString(3, this.base);
            if (typeof this.display === "string" && this.display.length)
                writer.writeString(4, this.display);
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(5, this.name);
            if (typeof this.symbol === "string" && this.symbol.length)
                writer.writeString(6, this.symbol);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Metadata {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Metadata();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.description = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.denom_units, () => pb_1.Message.addToRepeatedWrapperField(message, 2, DenomUnit.deserialize(reader), DenomUnit));
                        break;
                    case 3:
                        message.base = reader.readString();
                        break;
                    case 4:
                        message.display = reader.readString();
                        break;
                    case 5:
                        message.name = reader.readString();
                        break;
                    case 6:
                        message.symbol = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Metadata {
            return Metadata.deserialize(bytes);
        }
    }
}
