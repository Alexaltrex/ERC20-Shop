import {rootStore, RootStore} from "../../store/RootStore";
import React, {createContext} from "react";
import { App } from "./App";

export const StoreContext = createContext<RootStore>({} as RootStore);

export const AppContainer = () => {
    return (
        <StoreContext.Provider value={rootStore}>
            <App/>
        </StoreContext.Provider>
    )
}
