import style from './Shop.module.scss'
import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/useStore";
import {chainId, getProvider} from "../../helpers/ethers.helper";
import {Typography} from "@mui/material";
import clsx from "clsx";
import {AccountTokenBalance} from "./AccountTokenBalance/AccountTokenBalance";
import {BuyTokens} from "./BuyTokens/BuyTokens";
import {CurrentAccountTokenBalance} from "./CurrentAccountTokenBalance/CurrentAccountTokenBalance";
import {SellTokens} from "./SellTokens/SellTokens";
import {Mint} from "./Mint/Mint";
import {Burn} from "./Burn/Burn";
import {SetTokenPriceForSell} from "./SetTokenPriceForSell/SetTokenPriceForSell";
import {SetTokenPriceForBuy} from "./SetTokenPriceForBuy/SetTokenPriceForBuy";
import {Pause} from "./Pause/Pause";

export const Shop = observer(() => {
    const {
        cryptoStore: {
            shopTokenBalance, getShopTokenBalance,
            getCurrentAccountTokenBalance,
            shopBalance, getShopBalance,
            currentAccountAddress,
            getTokenPriceForSell, getTokenPriceForBuy,
            tokenPriceForSell, tokenPriceForBuy,
            getPaused, maxTokenCount, getMaxTokenCount
        }
    } = useStore();

    //========= ПОДКЛЮЧЕНИЕ К АККАУНТУ =========//
    useEffect(() => {
        const onEnterAccountHandler = async () => {
            if (window.ethereum) {
                const provider = getProvider();
                const network = await provider.getNetwork();

                // проверка совпадения сети в которой развернут смарт-контракт с той, к которой подключились
                if (network.chainId === chainId) {
                    await getCurrentAccountTokenBalance(); // баланс токенов текущего аккаунта
                }
            }
        }
        onEnterAccountHandler().then();
    }, [currentAccountAddress])

    //========= МОНТИРОВАНИЕ =========//
    useEffect(() => {
        const omMountHandler = async () => {
            if (window.ethereum) {
                const provider = getProvider();
                const network = await provider.getNetwork();

                // проверка совпадения сети в которой развернут смарт-контракт с той, к которой подключились
                if (network.chainId === chainId) {
                    await getShopBalance(); // баланс эфира магазина
                    await getShopTokenBalance(); // баланс токенов магазина
                    await getTokenPriceForBuy(); // цена токена для покупки
                    await getTokenPriceForSell(); // цена токена для продажи
                    await getMaxTokenCount(); // макс количество
                    await getPaused();
                }
            }
        }
        omMountHandler().then();
    }, [window.ethereum]);

    return (
        <div className={style.shop}>

            <h2 className={style.blockTitle}>
                Shop for Alex Altrex Token (AAT)
            </h2>

            <div className={style.infoBlockColumn}>
                <Typography className={style.label}>Token price for buy (wei)</Typography>
                <Typography className={style.value}>{tokenPriceForBuy}</Typography>
            </div>

            <div className={style.infoBlockColumn}>
                <Typography className={style.label}>Token price for sell (wei)</Typography>
                <Typography className={style.value}>{tokenPriceForSell}</Typography>
            </div>

            <div className={style.infoBlockColumn}>
                <Typography className={style.label}>Max token count</Typography>
                <Typography className={style.value}>{maxTokenCount}</Typography>
            </div>

            <div className={style.infoBlockColumn}>
                <Typography className={style.label}>Shop balance (wei)</Typography>
                <Typography className={style.value}>{shopBalance}</Typography>
            </div>

            <div className={style.infoBlockColumn}>
                <Typography className={style.label}>Shop token balance</Typography>
                <Typography className={clsx(style.tokensCount, style.value)} component='div'>
                    <p>{shopTokenBalance}</p>
                    <div>
                        <div>AAT</div>
                    </div>
                </Typography>
            </div>

            <AccountTokenBalance/>

            {
                currentAccountAddress && (
                    <>
                        <CurrentAccountTokenBalance/>
                        <BuyTokens/>
                        <SellTokens/>
                        <Pause/>
                        <Mint/>
                        <Burn/>
                        <SetTokenPriceForBuy/>
                        <SetTokenPriceForSell/>

                    </>
                )
            }
        </div>
    )
})
