import React from 'react';
import {Header} from "../A1_Header/Header";
import { Shop } from '../A2_Shop/Shop';
import {CustomAlert} from '../X_Common/CustomAlert/CustomAlert';
import style from "./app.module.scss";
import {Logs} from "../A3_Logs/Logs";

export const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <CustomAlert/>
            <main className={style.content}>
                <Shop/>
                <Logs/>
            </main>
        </div>
    );
}
