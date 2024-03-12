import {configureStore} from "@reduxjs/toolkit";
import cart from "./reducer/cart";
import { saveState } from "../config/localstorage";


export const store = configureStore({
    reducer: {
        cartProduct: cart,
    }
});


store.subscribe(() => {
    saveState("users", store.getState().cartProduct);
})