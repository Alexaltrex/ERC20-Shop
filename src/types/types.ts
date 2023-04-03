import {BigNumber} from "ethers";

export interface ILog {
    [key: string]: string
}

// Buy Sell
export interface IBuyLog {
    address: string
    amount: string
    timestamp: string
}
export type BuyLogUnhandledType = undefined | [string, BigNumber, BigNumber];

// Mint Burn
export interface IMintLog {
    amount: string
    timestamp: string
}
export type MintLogUnhandledType = undefined | [BigNumber, BigNumber];

// Price
export interface IPriceLog {
    oldValue: string
    newValue: string
    timestamp: string
}
export type PriceLogUnhandledType = undefined | [BigNumber, BigNumber, BigNumber];

// PausedChange
export interface IPausedChangeLog {
    paused: string
    timestamp: string
}
export type PausedChangeLogUnhandledType = undefined | [boolean, BigNumber];
