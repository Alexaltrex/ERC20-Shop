import {format} from 'date-fns'
import {ethers} from "ethers";
import {
    BuyLogUnhandledType,
    MintLogUnhandledType,
    PausedChangeLogUnhandledType,
    PriceLogUnhandledType
} from "../types/types";

export const getDate = (
    timestamp: number // sec
): string => format(new Date(timestamp * 1000), 'HH:mm dd.MM.yyyy');


export const buyLogArgsHandler = (args: BuyLogUnhandledType) => (
    args ? ({
        address: args[0],
        amount: String(args[1].toNumber()),
        timestamp: getDate(args[2].toNumber()),
    }) : ({
        address: '',
        amount: '',
        timestamp: '',
    })
);

export const mintLogArgsHandler = (args: MintLogUnhandledType) => (
    args ? ({
        amount: String(args[0].toNumber()),
        timestamp: getDate(args[1].toNumber()),
    }) : ({
        amount: '',
        timestamp: '',
    })
);

export const priceLogArgsHandler = (args: PriceLogUnhandledType) => (
    args ? ({
        oldValue: String(args[0].toNumber()),
        newValue: String(args[1].toNumber()),
        timestamp: getDate(args[2].toNumber()),
    }) : ({
        oldValue: '',
        newValue: '',
        timestamp: '',
    })
);

export const pausedChangeLogArgsHandler = (args: PausedChangeLogUnhandledType) => (
    args ? ({
        paused: args[0] ? "paused" : "unpaused",
        timestamp: getDate(args[1].toNumber()),
    }) : ({
        paused: '',
        timestamp: '',
    })
);
