import { Client } from '../client';
import * as types from '../types';
/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.kynno.io/docs/features/stake.html)
 *
 * @category Modules
 * @since
 */
export declare class Staking {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Query a delegation based on delegator address and validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */
    queryDelegation(delegator_addr: string, validator_addr: string): Promise<types.Delegation>;
    /**
     * Query all delegations made from one delegator
     *
     * @param pagination page info
     * @param delegator_addr Bech32 delegator address
     * @returns
     * @since
     */
    queryDelegations(query: {
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
        delegator_addr: string;
    }): Promise<types.Delegation[]>;
    /**
     * Query an unbonding-delegation record based on delegator and validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */
    queryUnbondingDelegation(delegator_addr: string, validator_addr: string): Promise<types.UnbondingDelegation>;
    /**
     * Query all unbonding-delegations records for one delegator
     *
     * @param pagination page info
     * @param delegator_addr Bech32 delegator address
     * @returns
     * @since
     */
    queryDelegatorUnbondingDelegations(query: {
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
        delegator_addr: string;
    }): Promise<types.UnbondingDelegation[]>;
    /**
     * Query a redelegation record based on delegator and a source and destination validator address
     *
     * @param delegator_addr Bech32 delegator address
     * @param src_validator_addr (optional) Bech32 source validator address
     * @param dst_validator_addr (optional) Bech32 destination validator address
     * @returns
     * @since
     */
    queryRedelegation(query: {
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
        delegator_addr: string;
        src_validator_addr?: string;
        dst_validator_addr?: string;
    }): Promise<types.Redelegation[]>;
    /**
     * Query all validators info for given delegator
     *
     * @param delegator_addr Bech32 delegator address
     * @param pagination page info
     * @returns
     * @since
     */
    queryDelegatorValidators(query: {
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
        delegator_addr: string;
    }): Promise<object>;
    /**
     * Query validator info for given delegator validator
     *
     * @param delegator_addr Bech32 delegator address
     * @param validator_addr Bech32 validator address
     * @returns
     * @since
     */
    queryDelegatorValidator(query: {
        delegator_addr: string;
        validator_addr: string;
    }): Promise<object>;
    /**
     * Query the historical info for given height.
     *
     * @param height defines at which height to query the historical info
     * @returns
     * @since
     */
    queryHistoricalInfo(query: {
        height: number;
    }): Promise<object>;
    /**
     * Query all delegations to one validator
     *
     * @param validator_addr Bech32 validator address
     * @param pagination page info
     * @returns
     * @since
     */
    queryValidatorDelegations(query: {
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
        validator_addr: string;
    }): Promise<types.Delegation[]>;
    /**
     * Query all unbonding delegatations from a validator
     *
     * @param validator_addr Bech32 validator address
     * @param pagination page info
     * @returns
     * @since
     */
    queryValidatorUnbondingDelegations(query: {
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
        validator_addr: string;
    }): Promise<types.UnbondingDelegation[]>;
    /**
     * Query a validator
     *
     * @param address Bech32 validator address
     * @returns
     * @since
     */
    queryValidator(address: string): Promise<types.Validator>;
    /**
     * Query for all validators
     * @param pagination page info
     * @param status validator status
     * @returns
     * @since
     */
    queryValidators(query: {
        key?: string;
        page?: number;
        size?: number;
        count_total?: boolean;
        status?: string;
    }): Promise<types.Validator[]>;
    /**
     * Query the current staking pool values
     * @returns
     * @since
     */
    queryPool(): Promise<types.StakingPool>;
    /**
     * Query the current staking parameters information
     * @returns
     * @since
     */
    queryParams(): Promise<types.StakingParams>;
    /**
     * Create new validator initialized with a self-delegation to it
     *
     * ** Not Supported **
     */
    createValidator(): void;
}
