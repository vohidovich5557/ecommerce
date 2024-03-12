import React from "react";
import { useDispatch } from "react-redux";
import { delet, toggle } from "../../redux/reducer/cart";



export const CartProduct = ({ title, id, image, userCount, userPrice }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="flex flex-col mb-[20px]">
                <div className="w-[840px] flex items-start justify-between h-[136px] pt-[5px] pr-[10px] pl-[5px] border-2">
                    <div className="flex items-center gap-[15px]">
                        <div className="w-[100px] h-[100px] rounded-[6px] flex items-center justify-center">
                            <img src={image} alt="img" className="w-full h-full" />
                        </div>
                        <div className="flex flex-col text-left">
                            <h2 className="text-md font-medium mb-[7px]">{title}</h2>
                            <div className="flex items-center gap-[20px]">
                                <button onClick={() => dispatch(delet({ id }))} className="w-[70px] px-[10px] flex justify-center py-[5px] text-red-600 items-center border-2 rounded-[8px]">Remove</button>
                                <button className="w-[130px] px-[10px] flex justify-center py-[5px] text-blue-600 items-center border-2 rounded-[9px]">Save for Later</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-black font-medium mb-[20px]">${userPrice}</p>
                        <div className="flex items-center gap-[4px]">
                            <button onClick={() => dispatch(toggle({ type: "increament", id }))} className="w-[30px] h-[30px] items-center justify-center border-2 rounded-[8px]">+</button>
                            <span>{userCount}</span>
                            {userCount <= 1 ? <button className="w-[30px] h-[30px] items-center justify-center border-2 rounded-[8px]">-</button> :
                                <button onClick={() => dispatch(toggle({ type: "decreament", id }))} className="w-[30px] h-[30px] items-center justify-center border-2 rounded-[8px]">-</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};