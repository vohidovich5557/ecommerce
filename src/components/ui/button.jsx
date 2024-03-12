import React from "react";
import clsx from "clsx";


export const Button = ({variant, children}) => {
    return(
        <button className={clsx("", {
            "w-[100px] h-[40px] bg-blue-500 rounded-r-[8px] text-white text-md font-medium": variant == "primary",
        })}>
            {children}
        </button>
    )
}