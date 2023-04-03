import React, {useEffect, useState} from "react";
import style from "./SellTokens.module.scss";
import {CircularProgress, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useStore} from "../../../store/useStore";
import {FormikHelpers, useFormik} from "formik";
import {getProvider, getShopContract, getTokenContract, shopAddress} from "../../../helpers/ethers.helper";
import {observer} from "mobx-react-lite";

interface IValues {
    count: number
}

export const SellTokens = observer(() => {
    const {
        cryptoStore: {
            errorHandler, currentAccountAddress,
            getShopTokenBalance, getCurrentAccountTokenBalance,
            getCurrentAccountBalance, getShopBalance
        }
    } = useStore();

    const [sellLoading, setSellLoading] = useState(false);

    useEffect(() => {
        console.log("sellLoading: ", sellLoading);
    }, [sellLoading])



    const initialValues: IValues = {
        count: 1
    }

    const onSubmit = async ({count}: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            if (window.ethereum && currentAccountAddress) {
                setSellLoading(true);
                const provider = getProvider();
                const shopContract = getShopContract(provider);
                const tokenContract = getTokenContract(provider)
                const signer = provider.getSigner(currentAccountAddress);

                // разрешаем магазину забирать у currentAccountAddress sellTokenAmount токенов
                const approveTx = await tokenContract
                    .connect(signer)
                    .approve(shopAddress, count);
                await approveTx.wait();

                // продаем токены магазину
                const sellTx = await shopContract
                    .connect(signer)
                    .sellTokens(count);
                await sellTx.wait();

                await getShopTokenBalance(); // баланс токенов магазина
                await getCurrentAccountTokenBalance(); // баланс токенов покупателя
                await getCurrentAccountBalance(currentAccountAddress); // баланс покупателя
                await getShopBalance(); // баланс магазина
            }

        } catch (e) {
            errorHandler(e);
        } finally {
            setSellLoading(false);
            formikHelpers.resetForm();
        }
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
    });


    return (
        <div className={style.sellTokens}>
            <Typography className={style.label}>Sell tokens</Typography>
            <form onSubmit={formik.handleSubmit}
                  className={style.form}
            >
                <TextField fullWidth
                           size="small"
                           type="number"
                           inputProps={{
                               min: 1
                           }}
                           {...formik.getFieldProps('count')}
                           disabled={!window.ethereum || sellLoading}
                           className={style.field}
                           sx={{
                               "& .MuiOutlinedInput-notchedOutline": {
                                   border: "none"
                               }
                           }}
                />

                <Button type="submit"
                        variant="contained"
                        fullWidth
                        className={style.buyBtn}
                        disabled={!window.ethereum || sellLoading}
                        size="small"
                        color="secondary"
                        disableElevation
                >
                    <div className={style.preloaderWrapper}>
                        <p>sell</p>
                        {
                            sellLoading &&
                            <div className={style.preloader}>
                                <CircularProgress color="success" size={25}/>
                            </div>
                        }
                    </div>
                </Button>
            </form>
        </div>
    )
})
