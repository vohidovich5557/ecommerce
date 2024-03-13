import React from "react";
import { useSelector } from "react-redux";



export const TotalCard = () => {
    const { totalPrice } = useSelector((state) => state.cartProduct);
    return (
        <>
            <div className="flex items-center justify-between">
                <h2>SubTotal:</h2>
                <p>${Math.ceil(totalPrice ? totalPrice : 0)}</p>
            </div>
            <div className="flex items-center justify-between">
                <h2>Discount:</h2>
                <p className="text-red-600">- $60.00</p>
            </div>
            <div className="flex items-center justify-between">
                <h2>Tax:</h2>
                <p className="text-green-600">+ $14.00</p>
            </div>
        </>
    )
}