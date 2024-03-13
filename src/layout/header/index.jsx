import React from "react";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Profile } from "../../assets/icons/profile";
import { Messages } from "../../assets/icons/messages";
import { Like } from "../../assets/icons/like";
import { MyCart } from "../../assets/icons/mycart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



export const Header = () => {
    const {count} = useSelector((state)=> state.cartProduct);
    return (
        <>
            <div className="container flex items-center justify-between px-[50px] mt-[20px]">
                <div className="flex items-center gap-[69px]">
                    <img src={logo} alt="img" className="w-[150px] h-[46px]" />
                    <form className="flex items-center">
                        <Input variant="smooth" placeholder="Search" />
                        <select name="Category" className="outline-none w-[145px] h-[40px] border-2 border-blue-500 pr-[5px] pl-[10px] ">
                            <option value="All Category">All Category</option>
                            <option value="SmartPhone">SmartPhone</option>
                            <option value="Accesuaries">Accesuaries</option>
                        </select>
                        <Button variant="primary">Search</Button>
                    </form>
                </div>
                <div className="flex items-center gap-[18px]">
                    <div className="flex flex-col items-center">
                        <Profile className="w-[20px] h-[19px]" />
                        <p className="text-gray-500 font-normal">Profile</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Messages className="w-[20px] h-[19px]" />
                        <p className="text-gray-500 font-normal">Message</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Like className="w-[20px] h-[19px]" />
                        <p className="text-gray-500 font-normal">Orders</p>
                    </div>
                    <Link to="/cart">
                        <div className="flex flex-col items-center">
                            <MyCart className="w-[20px] h-[19px]" />
                            <p className="text-gray-500 font-normal">My cart <span>{count}</span></p>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
};