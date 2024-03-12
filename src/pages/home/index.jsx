import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/cards/card";



export const Home = () => {
    const [data,setData] = React.useState([]);
    React.useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setData(res.data);
            console.log(res.data);
        })
    }, [])

    return (
        <>
        <div className="container px-[50px] mt-[100px] text-center">
            <h2 className="text-3xl text-black font-extrabold mb-[20px]">Products</h2>
           <div className="grid grid-cols-4 gap-[10px] justify-center items-center">
           {data?.map((item) => (
                <Card 
                title={item.title}
                id={item.id}
                image={item.image}
                price={item.price}
                />
            ))}
           </div>
        </div>
        </>
    )
};