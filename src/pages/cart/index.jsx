import React from "react";
import { useSelector } from "react-redux";
import { CartProduct } from "../../components/cards/store-card";
import { TotalCard } from "../../components/cards/total-card";



export const Cart = () => {
    const {product} = useSelector((state)=> state.cartProduct)
    return (
        <>
        <div className="container  flex flex-col mt-[30px] justify-start pl-[120px]">
        <h2 className="text-black text-2xl font-extrabold mb-[20px]">MyCart(<span>{product.length}</span>)</h2>
        <div className="flex items-start gap-[20px]">
       <div>
       {product?.map((item) => (
            <CartProduct 
            title={item.title}
            price={item.price}
            image={item.image}
            userCount={item.userCount}
            userPrice={item.userPrice}
            id={item.id}
            />
        ))}
       </div>
        <div className="w-[280px]  border-2 rounded-[6px] pt-[20px] pb-[21px] pl-[16px] pr-[16px]">
            <TotalCard />
        </div>
        </div>
        </div>
        </>
    )
};