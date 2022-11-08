/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: kynno/nft/nft.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace kynno.nft {
    export class BaseNFT extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            name?: string;
            uri?: string;
            data?: string;
            owner?: string;
            uri_hash?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("uri" in data && data.uri != undefined) {
                    this.uri = data.uri;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
                if ("owner" in data && data.owner != undefined) {
                    this.owner = data.owner;
                }
                if ("uri_hash" in data && data.uri_hash != undefined) {
                    this.uri_hash = data.uri_hash;
                }
            }
        }
        get id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get uri() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set uri(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get data() {
            return pb_1.Message.getField(this, 4) as string;
        }
        set data(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get owner() {
            return pb_1.Message.getField(this, 5) as string;
        }
        set owner(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get uri_hash() {
            return pb_1.Message.getField(this, 6) as string;
        }
        set uri_hash(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            id?: string;
            name?: string;
            uri?: string;
            data?: string;
            owner?: string;
            uri_hash?: string;
        }) {
            const message = new BaseNFT({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.uri != null) {
                message.uri = data.uri;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            if (data.owner != null) {
                message.owner = data.owner;
            }
            if (data.uri_hash != null) {
                message.uri_hash = data.uri_hash;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                name?: string;
                uri?: string;
                data?: string;
                owner?: string;
                uri_hash?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.uri != null) {
                data.uri = this.uri;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            if (this.owner != null) {
                data.owner = this.owner;
            }
            if (this.uri_hash != null) {
                data.uri_hash = this.uri_hash;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(1, this.id);
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(2, this.name);
            if (typeof this.uri === "string" && this.uri.length)
                writer.writeString(3, this.uri);
            if (typeof this.data === "string" && this.data.length)
                writer.writeString(4, this.data);
            if (typeof this.owner === "string" && this.owner.length)
                writer.writeString(5, this.owner);
            if (typeof this.uri_hash === "string" && this.uri_hash.length)
                writer.writeString(6, this.uri_hash);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BaseNFT {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BaseNFT();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.uri = reader.readString();
                        break;
                    case 4:
                        message.data = reader.readString();
                        break;
                    case 5:
                        message.owner = reader.readString();
                        break;
                    case 6:
                        message.uri_hash = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): BaseNFT {
            return BaseNFT.deserialize(bytes);
        }
    }
    export class Denom extends pb_1.Message {
        constructor(data?: any[] | {
            id?: string;
            name?: string;
            schema?: string;
            creator?: string;
            symbol?: string;
            mint_restricted?: boolean;
            update_restricted?: boolean;
            description?: string;
            uri?: string;
            uri_hash?: string;
            data?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("schema" in data && data.schema != undefined) {
                    this.schema = data.schema;
                }
                if ("creator" in data && data.creator != undefined) {
                    this.creator = data.creator;
                }
                if ("symbol" in data && data.symbol != undefined) {
                    this.symbol = data.symbol;
                }
                if ("mint_restricted" in data && data.mint_restricted != undefined) {
                    this.mint_restricted = data.mint_restricted;
                }
                if ("update_restricted" in data && data.update_restricted != undefined) {
                    this.update_restricted = data.update_restricted;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("uri" in data && data.uri != undefined) {
                    this.uri = data.uri;
                }
                if ("uri_hash" in data && data.uri_hash != undefined) {
                    this.uri_hash = data.uri_hash;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
            }
        }
        get id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get name() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get schema() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set schema(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get creator() {
            return pb_1.Message.getField(this, 4) as string;
        }
        set creator(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get symbol() {
            return pb_1.Message.getField(this, 5) as string;
        }
        set symbol(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get mint_restricted() {
            return pb_1.Message.getField(this, 6) as boolean;
        }
        set mint_restricted(value: boolean) {
            pb_1.Message.setField(this, 6, value);
        }
        get update_restricted() {
            return pb_1.Message.getField(this, 7) as boolean;
        }
        set update_restricted(value: boolean) {
            pb_1.Message.setField(this, 7, value);
        }
        get description() {
            return pb_1.Message.getField(this, 8) as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 8, value);
        }
        get uri() {
            return pb_1.Message.getField(this, 9) as string;
        }
        set uri(value: string) {
            pb_1.Message.setField(this, 9, value);
        }
        get uri_hash() {
            return pb_1.Message.getField(this, 10) as string;
        }
        set uri_hash(value: string) {
            pb_1.Message.setField(this, 10, value);
        }
        get data() {
            return pb_1.Message.getField(this, 11) as string;
        }
        set data(value: string) {
            pb_1.Message.setField(this, 11, value);
        }
        static fromObject(data: {
            id?: string;
            name?: string;
            schema?: string;
            creator?: string;
            symbol?: string;
            mint_restricted?: boolean;
            update_restricted?: boolean;
            description?: string;
            uri?: string;
            uri_hash?: string;
            data?: string;
        }) {
            const message = new Denom({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.schema != null) {
                message.schema = data.schema;
            }
            if (data.creator != null) {
                message.creator = data.creator;
            }
            if (data.symbol != null) {
                message.symbol = data.symbol;
            }
            if (data.mint_restricted != null) {
                message.mint_restricted = data.mint_restricted;
            }
            if (data.update_restricted != null) {
                message.update_restricted = data.update_restricted;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.uri != null) {
                message.uri = data.uri;
            }
            if (data.uri_hash != null) {
                message.uri_hash = data.uri_hash;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                name?: string;
                schema?: string;
                creator?: string;
                symbol?: string;
                mint_restricted?: boolean;
                update_restricted?: boolean;
                description?: string;
                uri?: string;
                uri_hash?: string;
                data?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.schema != null) {
                data.schema = this.schema;
            }
            if (this.creator != null) {
                data.creator = this.creator;
            }
            if (this.symbol != null) {
                data.symbol = this.symbol;
            }
            if (this.mint_restricted != null) {
                data.mint_restricted = this.mint_restricted;
            }
            if (this.update_restricted != null) {
                data.update_restricted = this.update_restricted;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.uri != null) {
                data.uri = this.uri;
            }
            if (this.uri_hash != null) {
                data.uri_hash = this.uri_hash;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.id === "string" && this.id.length)
                writer.writeString(1, this.id);
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(2, this.name);
            if (typeof this.schema === "string" && this.schema.length)
                writer.writeString(3, this.schema);
            if (typeof this.creator === "string" && this.creator.length)
                writer.writeString(4, this.creator);
            if (typeof this.symbol === "string" && this.symbol.length)
                writer.writeString(5, this.symbol);
            if (this.mint_restricted !== undefined)
                writer.writeBool(6, this.mint_restricted);
            if (this.update_restricted !== undefined)
                writer.writeBool(7, this.update_restricted);
            if (typeof this.description === "string" && this.description.length)
                writer.writeString(8, this.description);
            if (typeof this.uri === "string" && this.uri.length)
                writer.writeString(9, this.uri);
            if (typeof this.uri_hash === "string" && this.uri_hash.length)
                writer.writeString(10, this.uri_hash);
            if (typeof this.data === "string" && this.data.length)
                writer.writeString(11, this.data);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Denom {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Denom();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.name = reader.readString();
                        break;
                    case 3:
                        message.schema = reader.readString();
                        break;
                    case 4:
                        message.creator = reader.readString();
                        break;
                    case 5:
                        message.symbol = reader.readString();
                        break;
                    case 6:
                        message.mint_restricted = reader.readBool();
                        break;
                    case 7:
                        message.update_restricted = reader.readBool();
                        break;
                    case 8:
                        message.description = reader.readString();
                        break;
                    case 9:
                        message.uri = reader.readString();
                        break;
                    case 10:
                        message.uri_hash = reader.readString();
                        break;
                    case 11:
                        message.data = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Denom {
            return Denom.deserialize(bytes);
        }
    }
    export class IDCollection extends pb_1.Message {
        constructor(data?: any[] | {
            denom_id?: string;
            token_ids?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("denom_id" in data && data.denom_id != undefined) {
                    this.denom_id = data.denom_id;
                }
                if ("token_ids" in data && data.token_ids != undefined) {
                    this.token_ids = data.token_ids;
                }
            }
        }
        get denom_id() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set denom_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get token_ids() {
            return pb_1.Message.getField(this, 2) as string[];
        }
        set token_ids(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            denom_id?: string;
            token_ids?: string[];
        }) {
            const message = new IDCollection({});
            if (data.denom_id != null) {
                message.denom_id = data.denom_id;
            }
            if (data.token_ids != null) {
                message.token_ids = data.token_ids;
            }
            return message;
        }
        toObject() {
            const data: {
                denom_id?: string;
                token_ids?: string[];
            } = {};
            if (this.denom_id != null) {
                data.denom_id = this.denom_id;
            }
            if (this.token_ids != null) {
                data.token_ids = this.token_ids;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.denom_id === "string" && this.denom_id.length)
                writer.writeString(1, this.denom_id);
            if (this.token_ids !== undefined)
                writer.writeRepeatedString(2, this.token_ids);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IDCollection {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IDCollection();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.denom_id = reader.readString();
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): IDCollection {
            return IDCollection.deserialize(bytes);
        }
    }
    export class Owner extends pb_1.Message {
        constructor(data?: any[] | {
            address?: string;
            id_collections?: IDCollection[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("id_collections" in data && data.id_collections != undefined) {
                    this.id_collections = data.id_collections;
                }
            }
        }
        get address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get id_collections() {
            return pb_1.Message.getRepeatedWrapperField(this, IDCollection, 2) as IDCollection[];
        }
        set id_collections(value: IDCollection[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            address?: string;
            id_collections?: ReturnType<typeof IDCollection.prototype.toObject>[];
        }) {
            const message = new Owner({});
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.id_collections != null) {
                message.id_collections = data.id_collections.map(item => IDCollection.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                address?: string;
                id_collections?: ReturnType<typeof IDCollection.prototype.toObject>[];
            } = {};
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.id_collections != null) {
                data.id_collections = this.id_collections.map((item: IDCollection) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.address === "string" && this.address.length)
                writer.writeString(1, this.address);
            if (this.id_collections !== undefined)
                writer.writeRepeatedMessage(2, this.id_collections, (item: IDCollection) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Owner {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Owner();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.address = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.id_collections, () => pb_1.Message.addToRepeatedWrapperField(message, 2, IDCollection.deserialize(reader), IDCollection));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Owner {
            return Owner.deserialize(bytes);
        }
    }
    export class Collection extends pb_1.Message {
        constructor(data?: any[] | {
            denom?: Denom;
            nfts?: BaseNFT[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], []);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("nfts" in data && data.nfts != undefined) {
                    this.nfts = data.nfts;
                }
            }
        }
        get denom() {
            return pb_1.Message.getWrapperField(this, Denom, 1) as Denom;
        }
        set denom(value: Denom) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get nfts() {
            return pb_1.Message.getRepeatedWrapperField(this, BaseNFT, 2) as BaseNFT[];
        }
        set nfts(value: BaseNFT[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            denom?: ReturnType<typeof Denom.prototype.toObject>;
            nfts?: ReturnType<typeof BaseNFT.prototype.toObject>[];
        }) {
            const message = new Collection({});
            if (data.denom != null) {
                message.denom = Denom.fromObject(data.denom);
            }
            if (data.nfts != null) {
                message.nfts = data.nfts.map(item => BaseNFT.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                denom?: ReturnType<typeof Denom.prototype.toObject>;
                nfts?: ReturnType<typeof BaseNFT.prototype.toObject>[];
            } = {};
            if (this.denom != null) {
                data.denom = this.denom.toObject();
            }
            if (this.nfts != null) {
                data.nfts = this.nfts.map((item: BaseNFT) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.denom !== undefined)
                writer.writeMessage(1, this.denom, () => this.denom.serialize(writer));
            if (this.nfts !== undefined)
                writer.writeRepeatedMessage(2, this.nfts, (item: BaseNFT) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Collection {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Collection();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.denom, () => message.denom = Denom.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.nfts, () => pb_1.Message.addToRepeatedWrapperField(message, 2, BaseNFT.deserialize(reader), BaseNFT));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Collection {
            return Collection.deserialize(bytes);
        }
    }
}