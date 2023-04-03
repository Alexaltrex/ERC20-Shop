import React, {useState} from "react";
import {Button} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/useStore";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import {getProvider, getShopContract} from "../../../helpers/ethers.helper";

export const Pause = observer(() => {
    const {cryptoStore: {
        paused, getPaused, errorHandler, currentAccountAddress
    }} = useStore();

    const [loading, setLoading] = useState(false);

    const onClickHandler = async () => {
        try {
            if (currentAccountAddress) {
                setLoading(true);
                const provider = getProvider();
                const shopContract = getShopContract(provider);
                const signer = provider.getSigner(currentAccountAddress);

                const tx = paused
                    ? await shopContract.connect(signer).unpause()
                    :await shopContract.connect(signer).pause();
                await tx.wait(); // ждем ее завершения
                await getPaused(); //
            }
        } catch (e: any) {
            errorHandler(e);
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button onClick={onClickHandler}
                variant="contained"
                fullWidth={true}
                sx={{marginTop: "6px"}}
                size="small"
                color="warning"
                startIcon={
                    paused ? <PlayCircleOutlineIcon/> : <PauseCircleOutlineIcon/>
                }
                disabled={loading}

        >
            {paused ? "Unpause (only owner)" : "Pause (only owner)"}
        </Button>
    )
})
