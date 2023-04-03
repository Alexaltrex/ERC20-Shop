import {Typography} from "@mui/material";
import clsx from "clsx";
import React from "react";
import {observer} from "mobx-react-lite";
import style from "./CurrentAccountTokenBalance.module.scss"
import {useStore} from "../../../store/useStore";

export const CurrentAccountTokenBalance = observer(() => {
    const {cryptoStore: {currentAccountTokenBalance}} = useStore();

    return (
        <div className={style.currentAccountTokenBalance}>
            <Typography className={style.label}>Current account token balance</Typography>
            <Typography className={clsx(style.tokensCount, style.value)} component='div'>
                <p>{currentAccountTokenBalance}</p>
                <div>
                    <div>AAT</div>
                </div>
            </Typography>
        </div>
    )
})
