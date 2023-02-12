import { Client } from '../client';
import * as types from '../types';
import { ethers } from 'ethers';
import { nameserviceabi } from '../helper/abi';
import { TransactionReceipt, TransactionResponse } from '@ethersproject/abstract-provider';
/**
 * This module implements Nameservice related functions
 *
 * @category Modules
 * @since v1.0.1
 */
export class NameService {
  /** @hidden */
  private client: Client;

  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * create Name
   * @param name string
   * @param value string
   * @returns
   * @since v1.0.1
   */
    async createName(
      name:string,
      value:string
    ): Promise<types.TxMessage> {
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const tx = await contract.createName(name,value);
        const receipt = await tx.wait();
        if (receipt && receipt.blockNumber && receipt.status === 1) {
            return {
                txHash:receipt.transactionHash,
                success:true
            }
        } else if (receipt && receipt.blockNumber && receipt.status === 0) {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to create, check your balance and try again"
            }
        } else {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to create, check your balance and try again"
            }
        }
    }

    /**
        * check the ownership of the name
        * @param name string
        * @returns
        * @since v1.0.1
    */
    async ownerOf(name:string):Promise<string>{
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const owner = await contract.ownerOf(name);
        return owner
    }

    /**
        * deleting the name
        * @param name string
        * @returns
        * @since v1.0.1
    */
    async burn(
        name:string,
    ): Promise<types.TxMessage> {
        const signer  = this.client.config.provider.getSigner()
        
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const tx:TransactionResponse = await contract.burn(name);
        const receipt:TransactionReceipt = await tx.wait();
        
        if (receipt && receipt.blockNumber && receipt.status === 1) {
            return {
                txHash:receipt.transactionHash,
                success:true
            }
        } else if (receipt && receipt.blockNumber && receipt.status === 0) {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to burn, check your balance and try again"
            }
        } else {
            return {
                txHash:receipt.transactionHash,
                success:false,
                message:"Your name has been failed to burn, check your balance and try again"
            }
        }
    }

    /**
        * Returns all the names for a specific address
        * @param owner string
        * @returns
        * @since v1.0.1
    */
    async getNames(owner:string):Promise<[string]>{
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const names = await contract.getNames(owner);
        return names
    }

    /**
        * check if the signer is the owner of the name
        * @param name string
        * @returns
        * @since v1.0.1
    */
    async isOwner(name:string):Promise<boolean>{
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const check = await contract.isOwner(name);
        return check
    }

    /**
        * check if a name is valid before creating it
        * @param name string
        * @returns
        * @since v1.0.1
    */
    async valid(name:string):Promise<boolean>{
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const check = await contract.valid(name);
        return check
    }

    /**
        * check if a name is available before creating it
        * @param name string
        * @returns
        * @since v1.0.1
    */
    async available(name:string):Promise<boolean>{
        const signer  = this.client.config.provider.getSigner()
        const address = this.client.config.nameContractAddress
        const contract = new ethers.Contract(address, nameserviceabi, signer)
        const check = await contract.available(name);
        return check
    }
    
}
