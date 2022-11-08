/** Error codes in Kynno v1.0 */
export declare const CODES: {
    OK: number;
    Internal: number;
    TxParseError: number;
    InvalidSequence: number;
    Unauthorized: number;
    InsufficientFunds: number;
    UnknownRequest: number;
    InvalidAddress: number;
    InvalidPubkey: number;
    UnknownAddress: number;
    InvalidCoins: number;
    OutOfGas: number;
    MemoTooLarge: number;
    InsufficientFee: number;
    TooManySignatures: number;
    NoSignatures: number;
    ErrJsonMarshal: number;
    ErrJsonUnmarshal: number;
    InvalidRequest: number;
    TxInMempoolCache: number;
    MempoolIsFull: number;
    TxTooLarge: number;
    KeyNotFound: number;
    InvalidPassword: number;
    SignerDoesNotMatch: number;
    InvalidGasAdjustment: number;
    InvalidHeight: number;
    InvalidVersion: number;
    InvalidChainId: number;
    InvalidType: number;
    TxTimeoutHeight: number;
    UnknownExtensionOptions: number;
    IncorrectAccountSequence: number;
    FailedPackingProtobufMessageToAny: number;
    FailedUnpackingProtobufMessagFromAny: number;
    InternalLogicError: number;
    Conflict: number;
    FeatureNotSupported: number;
    Panic: number;
    InvalidMnemonic: number;
    DerivePrivateKeyError: number;
};
/** Kynno SDK Error */
export declare class SdkError extends Error {
    /** Error code */
    code: number;
    codespace: string;
    /**
     * Initialize SdkError with Kynno error msg
     * @param msg Kynno error msg
     */
    constructor(msg: string, code?: number, space?: string);
}
