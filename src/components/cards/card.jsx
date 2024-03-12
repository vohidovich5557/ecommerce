import React from "react";
import { useDispatch } from "react-redux";
import { Add } from "../../redux/reducer/cart";



export const Card = ({ title, price, image, id }) => {
    const dispatch = useDispatch();
    const addData = () => {
        dispatch(Add({ title, price, image, id }))
        console.log({ title, price, image, id });
    }
    return (
        <>
            <div className="flex flex-col justify-between h-[200px] pr-[16px] pl-[16px] pb-[10px]  pt-[20px]  border-2 hover:shadow-xl">
                <div className="flex justify-between items-center">
                    <div className="fle flex-col items-center">
                        <h2 className="mb-[9px] tex-md font-normal">{title.length > 16 ? title.slice(0, 16) + "..." : title}</h2>
                        <p className="text-gray-500">From <br />
                            USD <span>{price}</span>
                        </p>
                    </div>
                    <div className="w-[82px] h-[82px] object-contain">
                        <img src={image} alt="img" className="w-[82px] h-[82px]" />
                    </div>
                </div>
                <button onClick={addData} className="w-full h-[50px] bg-red-500 rounded-[20px] text-white font-extrabold text-xl active:scale-x-95">ADD Cart</button>
            </div>
        </>
    )
};