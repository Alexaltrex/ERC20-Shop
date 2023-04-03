import {Typography} from "@mui/material";
import clsx from "clsx";
import React, {useState} from "react";
import style from "./AccountTokenBalance.module.scss"
import {FormikErrors, FormikHelpers, useFormik} from "formik";
import {useStore} from "../../../store/useStore";
import {observer} from "mobx-react-lite";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
import IconButton from "@mui/material/IconButton";
import {ethers} from "ethers";
import {getProvider, getShopContract} from "../../../helpers/ethers.helper";

interface IValues {
    address: string
}

const initialValues: IValues = {
    address: ""
}

export const AccountTokenBalance = observer(() => {
    const {cryptoStore: {errorHandler}} = useStore();

    const [loading, setLoading] = useState(false);
    const [balance, setBalance] = useState<null | number>(null)

    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            if (window.ethereum) {
                setLoading(true);
                const provider = getProvider();
                const shopContract = getShopContract(provider);
                const tokensCount = await shopContract.tokenBalance(values.address);
                setBalance(tokensCount.toNumber());
            }
        } catch (e: any) {
            errorHandler(e);
        } finally {
            formikHelpers.resetForm();
            setLoading(false);
        }
    }
    const validate = ({address}: IValues): FormikErrors<IValues> => {
        const errors = {} as FormikErrors<IValues>;
        if (!address) {
            errors.address = "required";
        }
        if (address && !ethers.utils.isAddress(address)) {
            errors.address = "wrong format";
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <div className={style.accountTokenBalance}>
            <div className={style.top}>
                <Typography className={style.label}>Get account tokens balance</Typography>
                <Typography className={clsx(style.tokensCount, style.value)} component='div'>
                    {
                        (balance || (balance === 0)) && (
                            <>
                                <p>{balance}</p>
                                <div>
                                    <div>AAT</div>
                                </div>
                            </>
                        )
                    }
                </Typography>
            </div>


            <form onSubmit={formik.handleSubmit}
                  className={style.form}
            >
                <TextField fullWidth
                           size="small"
                           label="Account address"
                           {...formik.getFieldProps('address')}
                           disabled={!window.ethereum || loading}
                           error={formik.touched.address && Boolean(formik.errors.address)}
                           helperText={formik.touched.address && formik.errors.address}
                           className={style.field}
                           sx={{
                               "& .MuiFormHelperText-root": {
                                   position: "absolute",
                                   left: 0,
                                   bottom: "-20px",
                               }
                           }}
                />

                <IconButton type="submit"
                            color="primary"
                            className={style.btn}
                            disabled={!window.ethereum || loading}>
                    <SendIcon/>
                </IconButton>
            </form>


        </div>
    )
})
