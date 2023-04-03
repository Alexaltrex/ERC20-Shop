import {action, makeObservable, observable} from "mobx";
import {AlertColor} from "@mui/material";
import {getProvider, getShopContract, shopAddress} from "../helpers/ethers.helper";
import {ethers} from "ethers";
//npx hardhat flatten contracts/TokenShop.sol > TokenShopFlattened.sol
export interface IAlert {
    open: boolean
    message: string
    severity: AlertColor
}

export class CryptoStore {
    alert: IAlert = {
        open: false,
        message: "",
        severity: "success" as AlertColor
    }
    connecting: boolean = false; // подключение к аккаунту Metamask
    currentAccountAddress: string | null = null;
    balance: string | null = null;
    shopTokenBalance: number | null = null;
    currentAccountTokenBalance: number | null = null;
    shopBalance: string = "";
    tokenPriceForSell: number | null = null;
    tokenPriceForBuy: number | null = null;
    paused: boolean = false;
    maxTokenCount: null | number = null;

    constructor() {
        makeObservable(this, {
            alert: observable,
            connecting: observable,
            currentAccountAddress: observable,
            currentAccountTokenBalance: observable,
            balance: observable,
            shopTokenBalance: observable,
            shopBalance: observable,
            tokenPriceForSell: observable,
            tokenPriceForBuy: observable,
            paused: observable,
            maxTokenCount: observable,

            setConnecting: action.bound,
            setCurrentAccountAddress: action.bound,
            setBalance: action.bound,
            setAlert: action.bound,
            errorHandler: action.bound,
            getShopTokenBalance: action.bound,
            setShopTokenBalance: action.bound,
            setCurrentAccountTokenBalance: action.bound,
            getCurrentAccountTokenBalance: action.bound,
            setShopBalance: action.bound,
            getShopBalance: action.bound,
            getCurrentAccountBalance: action.bound,
            setTokenPriceForSell: action.bound,
            setTokenPriceForBuy: action.bound,
            getTokenPriceForSell: action.bound,
            getTokenPriceForBuy: action.bound,
            setPaused: action.bound,
            getPaused: action.bound,
            setMaxTokenCount: action.bound,
            getMaxTokenCount: action.bound,
        })
    }

    setConnecting(connecting: boolean) {
        this.connecting = connecting
    }

    setCurrentAccountAddress(currentAccountAddress: string | null) {
        this.currentAccountAddress = currentAccountAddress;
    }

    setBalance(balance: string | null) {
        this.balance = balance
    }

    setAlert(alert: IAlert) {
        this.alert = alert
    }

    errorHandler(e: any) {
        // for (let key in e) {
        //     console.log("e." + key + ": " + e[key])
        // }
        console.log(e?.reason || e?.message || "Error");
        this.setAlert({
            open: true,
            message: e?.reason || e?.message || "Error",
            severity: "error"
        })
    }

    //========= GET CURRENT ACCOUNT BALANCE =========//
    async getCurrentAccountBalance(newAccount: string) {
        try {
            const provider = getProvider();
            const balance = await provider.getBalance(newAccount);
            const balanceInWei = ethers.utils.formatUnits(balance, "wei");
            this.setBalance(ethers.utils.commify(balanceInWei))
        } catch (e: any) {
            this.errorHandler(e);
        }
    }

    //========= SET SHOP TOKEN BALANCE =========//
    setShopTokenBalance(shopTokenBalance: number) {
        this.shopTokenBalance = shopTokenBalance;
    }

    //========= GET SHOP TOKEN BALANCE =========//
    async getShopTokenBalance() {
        try {
            const provider = getProvider();
            const shopContract = getShopContract(provider);
            const tokensCount = await shopContract.tokenBalance(shopAddress);
            this.setShopTokenBalance(tokensCount.toNumber());
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //========= SET CURRENT ACCOUNT TOKEN BALANCE =========//
    setCurrentAccountTokenBalance(currentAccountTokenBalance: number) {
        this.currentAccountTokenBalance = currentAccountTokenBalance
    }

    //========= GET CURRENT ACCOUNT TOKEN BALANCE =========//
    async getCurrentAccountTokenBalance() {
        try {
            if (this.currentAccountAddress) {
                const provider = getProvider();
                const shopContract = getShopContract(provider);
                const tokensCount = await shopContract.tokenBalance(this.currentAccountAddress);
                this.setCurrentAccountTokenBalance(tokensCount.toNumber());
            }
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //========= SET SHOP BALANCE =========//
    setShopBalance(shopBalance: string) {
        this.shopBalance = shopBalance;
    }

    //========= GET SHOP BALANCE =========//
    async getShopBalance() {
        try {
            const provider = getProvider();
            const balance = await provider.getBalance(shopAddress);
            const balanceInWei = ethers.utils.formatUnits(balance, "wei");
            this.setShopBalance(ethers.utils.commify(balanceInWei));
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //========= SET TOKEN PRICE FOR SELL =========//
    setTokenPriceForSell(tokenPriceForSell: number) {
        this.tokenPriceForSell = tokenPriceForSell;
    }

    //========= SET TOKEN PRICE FOR BUY =========//
    setTokenPriceForBuy(tokenPriceForBuy: number) {
        this.tokenPriceForBuy = tokenPriceForBuy;
    }

    //========= GET TOKEN PRICE FOR SELL =========//
    async getTokenPriceForSell() {
        try {
            const provider = getProvider();
            const shopContract = getShopContract(provider);
            const result = await shopContract.getTokenPriceForSell();
            this.setTokenPriceForSell(result.toNumber());
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //========= GET TOKEN PRICE FOR BUY =========//
    async getTokenPriceForBuy() {
        try {
            const provider = getProvider();
            const shopContract = getShopContract(provider);
            const result = await shopContract.getTokenPriceForBuy();
            this.setTokenPriceForBuy(result.toNumber());
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //========= SET PAUSED =========//
    setPaused(paused: boolean) {
        this.paused = paused;
    }

    //========= GET PAUSED =========//
    async getPaused() {
        try {
            const provider = getProvider();
            const shopContract = getShopContract(provider);
            const paused = await shopContract.paused();
            this.setPaused(paused);
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

    //========= GET MAX TOKEN COUNT =========//
    setMaxTokenCount(maxTokenCount: number) {
        this.maxTokenCount = maxTokenCount;
    }

    //========= GET MAX TOKEN COUNT =========//
    async getMaxTokenCount() {
        try {
            const provider = getProvider();
            const shopContract = getShopContract(provider);
            const result = await shopContract.maxTokenCount();
            this.setMaxTokenCount(result.toNumber())
        } catch (e: any) {
            this.errorHandler(e)
        }
    }

}
