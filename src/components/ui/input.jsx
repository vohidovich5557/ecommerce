import React from "react";
import clsx from "clsx";


export const Input = React.forwardRef((
    {
        name,
            placeholder,
            value,
            onChange,
            id,
            type,
            label,
            error,
            helperText,
            variant,
            clasname,
            ...resTprop
    },
    ref,
) => {
    return (
        <div className="flex flex-col  text-left">
                {label && <label htmlFor={id}>{label}</label>}
                <input
                    {...resTprop}
                    className={clsx("outline-none", {
                        "w-[421px] h-[40px] border-2 border-blue-500 pl-[10px] rounded-l-[7px]": variant == "smooth",
                    }, clasname)}
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    type={type}

                />
                {helperText && <p className=" text-red-700 text-xs text-left mt-[-15px]">{helperText}</p>}
            </div>
    )
})