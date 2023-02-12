import {Client} from '../client';
import * as types from '../types';
import { SdkError, CODES } from '../errors';
import {EventQueryBuilder, EventKey, EventAction} from '../types';
import {Utils, Crypto} from '../utils';
import * as is from 'is_js';
import { ModelCreator } from "../helper";

/**
 * This module provides staking functionalities for validators and delegators
 *
 * [More Details](https://www.docs.kynno.dev/features/stake.html)
 *
 * @category Modules
 * @since
 */
export class Staking {
  /** @hidden */
  private client: Client;

  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Query a delegation based on delegator address and validator address
   *
   * @param delegator_addr Bech32 delegator address
   * @param validator_addr Bech32 validator address
   * @returns
   * @since
   */
  queryDelegation(
    delegator_addr: string,
    validator_addr: string
  ): Promise<types.Delegation> {
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }

    const request = new types.staking_query_pb.QueryDelegationRequest()
      .setValidatorAddr(validator_addr)
      .setDelegatorAddr(delegator_addr);

    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Delegation',
      request,
      types.staking_query_pb.QueryDelegationResponse
    );
  }

  /**
   * Query all delegations made from one delegator
   *
   * @param pagination page info
   * @param delegator_addr Bech32 delegator address
   * @returns
   * @since
   */
  queryDelegations(
    query: {
      key?: string,
      page?: number;
      size?: number;
      count_total?: boolean;
      delegator_addr: string;
    }
  ): Promise<types.Delegation[]> {
    const {key, page, size, count_total, delegator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryDelegatorDelegationsRequest()
      .setDelegatorAddr(delegator_addr)
      .setPagination(ModelCreator.createPaginationModel(page, size, count_total, key));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/DelegatorDelegations',
      request,
      types.staking_query_pb.QueryDelegatorDelegationsResponse
    );
  }

  /**
   * Query an unbonding-delegation record based on delegator and validator address
   *
   * @param delegator_addr Bech32 delegator address
   * @param validator_addr Bech32 validator address
   * @returns
   * @since
   */
  queryUnbondingDelegation(
    delegator_addr: string,
    validator_addr: string
  ): Promise<types.UnbondingDelegation> {
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }

    const request = new types.staking_query_pb.QueryUnbondingDelegationRequest()
      .setValidatorAddr(validator_addr)
      .setDelegatorAddr(delegator_addr);

    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/UnbondingDelegation',
      request,
      types.staking_query_pb.QueryUnbondingDelegationResponse
    );
  }

  /**
   * Query all unbonding-delegations records for one delegator
   *
   * @param pagination page info
   * @param delegator_addr Bech32 delegator address
   * @returns
   * @since
   */
  queryDelegatorUnbondingDelegations(
    query: {
      key?: string,
      page?: number;
      size?: number;
      count_total?: boolean;
      delegator_addr: string;
    }
  ): Promise<types.UnbondingDelegation[]> {
    const {key, page, size, count_total, delegator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryDelegatorUnbondingDelegationsRequest()
      .setDelegatorAddr(delegator_addr)
      .setPagination(ModelCreator.createPaginationModel(page, size, count_total, key));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations',
      request,
      types.staking_query_pb.QueryDelegatorUnbondingDelegationsResponse
    );
  }

  /**
   * Query a redelegation record based on delegator and a source and destination validator address
   *
   * @param delegator_addr Bech32 delegator address
   * @param src_validator_addr (optional) Bech32 source validator address
   * @param dst_validator_addr (optional) Bech32 destination validator address
   * @returns
   * @since
   */
  queryRedelegation(
    query: {
      key?: string,
      page?: number;
      size?: number;
      count_total?: boolean;
      delegator_addr: string;
      src_validator_addr?: string;
      dst_validator_addr?:string;
    }
  ): Promise<types.Redelegation[]> {
    const {key, page, size, count_total, delegator_addr,src_validator_addr, dst_validator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryRedelegationsRequest()
      .setDelegatorAddr(delegator_addr)
      .setPagination(ModelCreator.createPaginationModel(page, size, count_total, key));
    if (is.not.undefined(src_validator_addr)) {
      request.setSrcValidatorAddr(src_validator_addr)
    }
    if (is.not.undefined(dst_validator_addr)) {
      request.setDstValidatorAddr(dst_validator_addr);
    }
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Redelegations',
      request,
      types.staking_query_pb.QueryRedelegationsResponse
    );
  }

  /**
   * Query all validators info for given delegator
   *
   * @param delegator_addr Bech32 delegator address
   * @param pagination page info
   * @returns
   * @since
   */
  queryDelegatorValidators(
    query: {
      key?: string,
      page?: number;
      size?: number;
      count_total?: boolean;
      delegator_addr: string;
    }
  ): Promise<object> {
    const {key, page, size, count_total, delegator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryDelegatorValidatorsRequest()
      .setDelegatorAddr(delegator_addr)
      .setPagination(ModelCreator.createPaginationModel(page, size, count_total, key));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/DelegatorValidators',
      request,
      types.staking_query_pb.QueryDelegatorValidatorsResponse
    );
  }

  /**
   * Query validator info for given delegator validator
   *
   * @param delegator_addr Bech32 delegator address
   * @param validator_addr Bech32 validator address
   * @returns
   * @since
   */
  queryDelegatorValidator(
    query: {
      delegator_addr: string;
      validator_addr: string;
    }
  ): Promise<object> {
    const { delegator_addr, validator_addr} = query;
    if (is.undefined(delegator_addr)) {
      throw new SdkError('delegator address can not be empty');
    }
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }

    const request = new types.staking_query_pb.QueryDelegatorValidatorRequest()
      .setDelegatorAddr(delegator_addr)
      .setValidatorAddr(validator_addr);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/DelegatorValidator',
      request,
      types.staking_query_pb.QueryDelegatorValidatorResponse
    );
  }

  /**
   * Query the historical info for given height.
   *
   * @param height defines at which height to query the historical info
   * @returns
   * @since
   */
  queryHistoricalInfo(
    query: {
      height: number;
    }
  ): Promise<object> {
    const { height} = query;
    if (is.undefined(height)) {
      throw new SdkError('block height can not be empty');
    }
    const request = new types.staking_query_pb.QueryHistoricalInfoRequest()
      .setHeight(height);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/HistoricalInfo',
      request,
      types.staking_query_pb.QueryHistoricalInfoResponse
    );
  }

  /**
   * Query all delegations to one validator
   *
   * @param validator_addr Bech32 validator address
   * @param pagination page info
   * @returns
   * @since
   */
  queryValidatorDelegations(
    query: {
      key?: string,
      page?: number;
      size?: number;
      count_total?: boolean;
      validator_addr: string;
    }
  ): Promise<types.Delegation[]> {
    const {key, page, size, count_total, validator_addr} = query;
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryValidatorDelegationsRequest()
      .setValidatorAddr(validator_addr)
      .setPagination(ModelCreator.createPaginationModel(page, size, count_total, key));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/ValidatorDelegations',
      request,
      types.staking_query_pb.QueryValidatorDelegationsResponse
    );
  }

  /**
   * Query all unbonding delegatations from a validator
   *
   * @param validator_addr Bech32 validator address
   * @param pagination page info
   * @returns
   * @since
   */
  queryValidatorUnbondingDelegations(
    query: {
      key?: string,
      page?: number;
      size?: number;
      count_total?: boolean;
      validator_addr: string;
    }
  ): Promise<types.UnbondingDelegation[]> {
    const {key, page, size, count_total, validator_addr} = query;
    if (is.undefined(validator_addr)) {
      throw new SdkError('validator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryValidatorUnbondingDelegationsRequest()
      .setValidatorAddr(validator_addr)
      .setPagination(ModelCreator.createPaginationModel(page, size, count_total, key));
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations',
      request,
      types.staking_query_pb.QueryValidatorUnbondingDelegationsResponse
    );
  }

  /**
   * Query a validator
   *
   * @param address Bech32 validator address
   * @returns
   * @since
   */
  queryValidator(address: string): Promise<types.Validator> {
    if (is.undefined(address)) {
      throw new SdkError('validator address can not be empty');
    }
    const request = new types.staking_query_pb.QueryValidatorRequest().setValidatorAddr(address);
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Validator',
      request,
      types.staking_query_pb.QueryValidatorResponse
    ).then(res=>{
      let result = {...res};
      if (res.validator && res.validator.consensusPubkey && res.validator.consensusPubkey.value) {
        result.validator.consensusPubkey = this.client.protobuf.deserializePubkey(res.validator.consensusPubkey);
      }
      return result;
    });
  }

  /**
   * Query for all validators
   * @param pagination page info
   * @param status validator status
   * @returns
   * @since
   */
  queryValidators(
    query: {
      key?: string,
      page?: number;
      size?: number;
      count_total?: boolean;
      status?: string;
    }
  ): Promise<types.Validator[]> {
    const {key, page, size, count_total, status} = query;
    const request = new types.staking_query_pb.QueryValidatorsRequest()
      .setPagination(ModelCreator.createPaginationModel(page, size, count_total, key));
    if (is.not.undefined(status)) {
      request.setStatus(status);
    }
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Validators',
      request,
      types.staking_query_pb.QueryValidatorsResponse
    ).then(res=>{
      let result:any = {...res};
      if (res.validatorsList && res.validatorsList.length) {
          result.validatorsList = res.validatorsList.map((val:any)=>{
            if (val.consensusPubkey && val.consensusPubkey.value) {
              val.consensusPubkey = this.client.protobuf.deserializePubkey(val.consensusPubkey);
            }
            return val;
          });
      }
      return result;
    });
  }

  /**
   * Query the current staking pool values
   * @returns
   * @since
   */
  queryPool(): Promise<types.StakingPool> {
    const request = new types.staking_query_pb.QueryPoolRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Pool',
      request,
      types.staking_query_pb.QueryPoolResponse
    );
  }

  /**
   * Query the current staking parameters information
   * @returns
   * @since
   */
  queryParams(): Promise<types.StakingParams> {
    const request = new types.staking_query_pb.QueryParamsRequest();
    return this.client.rpcClient.protoQuery(
      '/cosmos.staking.v1beta1.Query/Params',
      request,
      types.staking_query_pb.QueryParamsResponse
    );
  }

  /**
   * Create new validator initialized with a self-delegation to it
   *
   * ** Not Supported **
   */
  createValidator() {
    throw new SdkError('Not supported',CODES.Internal);
  }
}
