import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/localstorage";

const initialState = loadState("users") || {
    product: [],
    count: 0,
    totalPrice: 0,
}

export const cart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setProductCount: (state, action) => {
            return { ...state, count: state.product.length }
        },
        setTotalPrice: (state, action) => {
            const newPrice = state.product.reduce((a, b) => {
                return a + Number(b.userPrice)
            }, 0);

            return { ...state, totalPrice: newPrice }
        },
        Add: (state, action) => {
            const products = state.product.find((item) =>
                item.id === action.payload.id
            );
            if (!products) {
                return { ...state, product: [...state.product, { ...action.payload, userCount: 1, userPrice: action.payload.price, totalPrice: 0 }] }
            }

            return state;
        },

        toggle: (state, action) => {
            if (action.payload.type === "increament") {
                const newProduct = state.product.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            userCount: item.userCount + 1,
                            userPrice: (item.price * (item.userCount + 1)).toFixed(2)
                        }
                    }
                    return item;
                });

                return { ...state, product: newProduct }
            }
            if (action.payload.type === "decreament") {
                const newProduct = state.product.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            userCount: item.userCount - 1,
                            userPrice: (item.price * (item.userCount - 1)).toFixed(2),
                        }
                    }
                    return item;
                });

                return { ...state, product: newProduct }
            }
        },

        delet: (state, action) => {
            return { ...state, product: state.product.filter((item) => item.id !== action.payload.id) }
        },
    }
});


export default cart.reducer;
export const { Add, toggle, delet, setProductCount, setTotalPrice } = cart.actions;