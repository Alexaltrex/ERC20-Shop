import {BigNumber} from "ethers";

export interface ILog {
    [key: string]: string
}

export interface IBuyLog {
    address: string
    amount: string
    timestamp: string
}
export type BuyLogUnhandledType = undefined | [string, BigNumber, BigNumber];

export interface IMintLog {
    amount: string
    timestamp: string
}
export type MintLogUnhandledType = undefined | [BigNumber, BigNumber];

export interface IPriceLog {
    oldValue: string
    newValue: string
    timestamp: string
}
export type PriceLogUnhandledType = undefined | [BigNumber, BigNumber, BigNumber];
