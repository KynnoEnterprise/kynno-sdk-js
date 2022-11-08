import { SdkError } from '../errors';
import * as types from '../types';
import { EventQueryBuilder } from '../types';
import { Client } from '../client';
/**
 * KYNNO Event Listener
 * @since v0.1
 */
export declare class EventListener {
    /** @hidden */
    private wsClient;
    /** @hidden */
    private eventDAO;
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Connect to server
     * @since v0.1
     */
    connect(): void;
    /**
     * Disconnect from server and clear all the listeners
     * @since v0.1
     */
    disconnect(): Promise<void>;
    /**
     * Subscribe new block notifications
     * @param conditions Query conditions
     * @param callback A function to receive notifications
     * @returns
     * @since v0.1
     */
    subscribeNewBlock(callback: (error?: SdkError, data?: types.EventDataNewBlock) => void, conditions?: EventQueryBuilder): types.EventSubscription;
    /**
     * Subscribe new block header notifications
     * @param conditions Query conditions
     * @param callback A function to receive notifications
     * @returns
     * @since v0.1
     */
    subscribeNewBlockHeader(callback: (error?: SdkError, data?: types.EventDataNewBlockHeader) => void): types.EventSubscription;
    /**
     * Subscribe validator set update notifications
     * @param conditions Query conditions
     * @param callback A function to receive notifications
     * @returns
     * @since v0.1
     */
    subscribeValidatorSetUpdates(callback: (error?: SdkError, data?: types.EventDataValidatorSetUpdates[]) => void): types.EventSubscription;
    /**
     * Subscribe successful Txs notifications
     * @param conditions Query conditions
     * @param callback A function to receive notifications
     * @returns
     * @since v0.1
     */
    subscribeTx(conditions: EventQueryBuilder, callback: (error?: SdkError, data?: types.EventDataResultTx) => void): types.EventSubscription;
    /**
     * Unsubscribe the specified event
     * @param subscription The event subscription instance
     * @since v0.1
     */
    unsubscribe(subscription: types.EventSubscription): void;
    private newBlockHandler;
    private newBlockHeaderHandler;
    private validatorSetUpdatesHandler;
    private txHandler;
}
