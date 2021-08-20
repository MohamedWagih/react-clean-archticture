import { createContext, useContext } from "react";
import { rootStore } from "./store";

const storeContext = createContext(rootStore);

export const RootStoreProvider = storeContext.Provider;

export const useStores = () => useContext(storeContext);
