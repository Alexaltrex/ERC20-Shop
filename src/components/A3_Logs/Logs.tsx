import React, {useEffect, useState} from "react";
import style from "./Logs.module.scss"
import {
    IBuyLog,
    BuyLogUnhandledType,
    IMintLog,
    MintLogUnhandledType,
    IPriceLog,
    PriceLogUnhandledType, ILog, IPausedChangeLog, PausedChangeLogUnhandledType
} from "../../types/types";
import {chainId, getProvider, getShopContract} from "../../helpers/ethers.helper";
import {
    buyLogArgsHandler,
    mintLogArgsHandler,
    pausedChangeLogArgsHandler,
    priceLogArgsHandler
} from "../../helpers/helpers";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {LogsTable} from "./LogsTable/LogsTable";

export const Logs = observer(() => {
    const {cryptoStore: {errorHandler}} = useStore();

    const [buyLogs, setBuyLogs] = useState<IBuyLog[]>([]);
    const [sellLogs, setSellLogs] = useState<IBuyLog[]>([]);
    const [mintLogs, setMintLogs] = useState<IMintLog[]>([]);
    const [burnLogs, setBurnLogs] = useState<IMintLog[]>([]);
    const [buyPriceLogs, setBuyPriceLogs] = useState<IPriceLog[]>([]);
    const [sellPriceLogs, setSellPriceLogs] = useState<IPriceLog[]>([]);
    const [pausedChangeLogs, setPausedChangeLogs] = useState<IPausedChangeLog[]>([])

    //========= GET BUY LOGS =========//
    const getBuyLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.Buy();
                const logs = await contract.queryFilter(filter);
                // console.log(logs)
                setBuyLogs(logs.map(({args}: { args: BuyLogUnhandledType }) => buyLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET SELL LOGS =========//
    const getSellLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.Sell();
                const logs = await contract.queryFilter(filter);
                setSellLogs(logs.map(({args}: { args: BuyLogUnhandledType }) => buyLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET MINT LOGS =========//
    const getMintLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.Mint();
                const logs = await contract.queryFilter(filter);
                setMintLogs(logs.map(({args}: { args: MintLogUnhandledType }) => mintLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET BURN LOGS =========//
    const getBurnLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.Burn();
                const logs = await contract.queryFilter(filter);
                setBurnLogs(logs.map(({args}: { args: MintLogUnhandledType }) => mintLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET BUY PRICE LOGS =========//
    const getBuyPriceLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.BuyPriceChange();
                const logs = await contract.queryFilter(filter);
                setBuyPriceLogs(logs.map(({args}: { args: PriceLogUnhandledType }) => priceLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET SELL PRICE LOGS =========//
    const getSellPriceLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.SellPriceChange();
                const logs = await contract.queryFilter(filter);
                setSellPriceLogs(logs.map(({args}: { args: PriceLogUnhandledType }) => priceLogArgsHandler(args)))
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= GET PAUSED CHANGE LOGS =========//
    const getPausedChangeLogs = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const filter = contract.filters.PausedChange();
                const logs = await contract.queryFilter(filter);
                console.log(logs)
                setPausedChangeLogs(logs.map(({args}: { args: PausedChangeLogUnhandledType }) => pausedChangeLogArgsHandler(args)));
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= ADD EVENT LISTENERS =========
    const addListener = async () => {
        try {
            if (window.ethereum) {
                const provider = getProvider();
                const contract = getShopContract(provider);
                const startBlockNumber = await provider.getBlockNumber();
                provider.on("error", (e) => console.log(e));
                // @ts-ignore
                contract.on("Buy", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getBuyLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                });
                // @ts-ignore
                contract.on("Sell", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getSellLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })
                // @ts-ignore
                contract.on("Mint", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getMintLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })
                // @ts-ignore
                contract.on("Burn", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getBurnLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })
                // @ts-ignore
                contract.on("BuyPriceChange", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getBuyPriceLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })
                // @ts-ignore
                contract.on("SellPriceChange", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getSellPriceLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })
                // @ts-ignore
                contract.on("PausedChange", async (...args) => {
                    try {
                        const event = args[args.length - 1];
                        if (event.blockNumber > startBlockNumber) {
                            await getPausedChangeLogs();
                        }
                    } catch (e: any) {
                        errorHandler(e)
                    }
                })
            }
        } catch (e: any) {
            errorHandler(e)
        }
    }

    //========= МОНТИРОВАНИЕ =========//
    useEffect(() => {
        const omMountHandler = async () => {
            if (window.ethereum) {
                const provider = getProvider();
                const network = await provider.getNetwork();

                // проверка совпадения сети в которой развернут смарт-контракт с той, к которой подключились
                if (network.chainId === chainId) {
                    await addListener();
                    await getBuyLogs();
                    await getSellLogs();
                    await getMintLogs();
                    await getBurnLogs();
                    await getSellPriceLogs();
                    await getBuyPriceLogs();
                    await getPausedChangeLogs();
                }
            }
        }
        omMountHandler().then();
    }, [window.ethereum]);

    return (
        <div className={style.logs}>
            <h2 className={style.blockTitle}>
                Events logs
            </h2>

            <LogsTable tableLibel="Buy Tokens"
                       headerLabels={["buyer", "amount", "timestamp"]}
                // @ts-ignore
                       logs={buyLogs}
                       headerClassName="header_buy"
                       rowClassName="row_buy"
            />

            <LogsTable tableLibel="Sell Tokens"
                       headerLabels={["buyer", "amount", "timestamp"]}
                // @ts-ignore
                       logs={sellLogs}
                       headerClassName="header_buy"
                       rowClassName="row_buy"
            />

            <LogsTable tableLibel="Mint"
                       headerLabels={["amount", "timestamp"]}
                // @ts-ignore
                       logs={mintLogs}
                       headerClassName="header_mint"
                       rowClassName="row_mint"
            />

            <LogsTable tableLibel="Burn"
                       headerLabels={["amount", "timestamp"]}
                // @ts-ignore
                       logs={burnLogs}
                       headerClassName="header_mint"
                       rowClassName="row_mint"
            />

            <LogsTable tableLibel="BuyPriceChange"
                       headerLabels={["oldValue", "newValue", "timestamp"]}
                // @ts-ignore
                       logs={buyPriceLogs}
                       headerClassName="header_price"
                       rowClassName="row_price"
            />

            <LogsTable tableLibel="SellPriceChange"
                       headerLabels={["oldValue", "newValue", "timestamp"]}
                // @ts-ignore
                       logs={sellPriceLogs}
                       headerClassName="header_price"
                       rowClassName="row_price"
            />

            <LogsTable tableLibel="Paused change"
                       headerLabels={["paused", "timestamp"]}
                // @ts-ignore
                       logs={pausedChangeLogs}
                       headerClassName="header_paused"
                       rowClassName="row_paused"
            />

        </div>
    )
})
