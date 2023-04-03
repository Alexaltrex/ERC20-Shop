import React, {useState} from "react";
import style from "./Mint.module.scss";
import {CircularProgress, Typography} from "@mui/material";
import {FormikHelpers, useFormik} from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {getProvider, getShopContract} from "../../../helpers/ethers.helper";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";

interface IValues {
    count: number
}

export const Mint = observer(() => {
    const {
        cryptoStore: {
            currentAccountAddress,
            getShopTokenBalance,
            errorHandler
        }
    } = useStore();

    const [loading, setLoading] = useState(false);

    const initialValues: IValues = {
        count: 1
    }
    const onSubmit = async ({count}: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            if (currentAccountAddress) {
                setLoading(true);

                const provider = getProvider();
                const shopContract = getShopContract(provider);
                const signer = provider.getSigner(currentAccountAddress);

                const tx = await shopContract
                    .connect(signer)
                    .mintToShop(count);
                await tx.wait(); // ждем ее завершения
                await getShopTokenBalance(); // баланс токенов магазина
            }
        } catch (e: any) {
            errorHandler(e);
        } finally {
            setLoading(false);
            formikHelpers.resetForm();
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
    });

    return (
        <div className={style.mint}>
            <Typography className={style.label}>
                Mint tokens to shop (only owner)
            </Typography>
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
                           disabled={!window.ethereum || loading}
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
                        disabled={!window.ethereum || loading}
                        size="small"
                        color="warning"
                        disableElevation
                >
                    <div className={style.preloaderWrapper}>
                        <p>mint</p>
                        {
                            loading &&
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
