import {configureStore} from "@reduxjs/toolkit";
import cart from "./reducer/cart";
import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import { saveState } from "../config/localstorage";
import {delet, Add, toggle, setProductCount, setTotalPrice} from "../redux/reducer/cart";


const countMiddlleware = createListenerMiddleware();

countMiddlleware.startListening({
    matcher: isAnyOf(Add, delet, toggle),
    effect: (_, api) => {
        api.dispatch(setProductCount());
        api.dispatch(setTotalPrice());
    }
})


export const store = configureStore({
    reducer: {
        cartProduct: cart,
    },
    middleware: (defaultMiddleware) => 
        defaultMiddleware().concat(countMiddlleware.middleware),
});


store.subscribe(() => {
    saveState("users", store.getState().cartProduct);
})