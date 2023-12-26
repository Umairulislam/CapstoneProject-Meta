import React, { useState } from "react"
import {
    restaurantchef,
    greeksalad,
    lemondessert,
    caesarsalad,
    chocolatesdessert,
    faPersonBiking,
} from "../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Order = () => {
    const [orderItems, setOrderItems] = useState([])

    const handleOrder = (item) => {
        setOrderItems((prevItems) => [...prevItems, item])
    }

    const getTotalAmount = () => {
        return orderItems.reduce((total, item) => total + item.price, 0).toFixed(2)
    }
    return (
        <main className="xs:p-4 md:p-12 bg-tertiary1 text-tertiary2">
            <section>
                <img
                    src={restaurantchef}
                    alt="restaurantchef"
                    className="w-full h-52 object-cover rounded-2xl object-bottom"
                />
            </section>
            <h1 className="flex mt-20 justify-center items-start xs:text-xl md:text-2xl lg:text-3xl text-tertiary2">
                Salad
            </h1>
            <section className="flex justify-center gap-10 flex-wrap pt-10">
                <div className="w-[300px] bg-white">
                    <div className="w-full h-[200px]">
                        <img
                            src={greeksalad}
                            alt="greeksalad"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-5 p-4">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-tertiary2">Greek Salad</h1>
                            <p className="text-secondary1 font-bold">$10.99</p>
                        </div>
                        <div className="w-[210px]">
                            <p className="text-primary1">
                                The famous greek salad of crispy lettuce, peppers, olives and our
                                Chicago style feta cheese, garnished with crunchy garlic and
                                rosemary croutons.
                            </p>
                        </div>
                        <div
                            className="flex items-center gap-4 cursor-pointer"
                            onClick={() => handleOrder({ name: "Greek Salad", price: 10.99 })}
                        >
                            <h1 className="font-bold text-tertiary2">order a dilevery</h1>
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </div>
                    </div>
                </div>
                <div className="w-[300px] bg-white">
                    <div className="w-full h-[200px]">
                        <img
                            src={caesarsalad}
                            alt="bruchetta"
                            className="h-full w-full object-cover object-bottom"
                        />
                    </div>
                    <div className="flex flex-col gap-5 p-4">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-tertiary2">Caeser salad</h1>
                            <p className="text-secondary1 font-bold">$12.99</p>
                        </div>
                        <div className="w-[210px]">
                            <p className=" text-primary1">
                                Our Caesar Salad is made from crispy lettuce, peppers, olives, and
                                our Chicago-style feta cheese, garnished with crunchy garlic and
                                rosemary croutons.
                            </p>
                        </div>
                        <div
                            className="flex  items-baseline gap-4 cursor-pointer"
                            onClick={() => handleOrder({ name: "Greek Salad", price: 10.99 })}
                        >
                            <h1 className="font-bold text-tertiary2">order a dilevery</h1>
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </div>
                    </div>
                </div>
            </section>
            <h1 className="flex mt-20 justify-center items-start xs:text-xl md:text-2xl lg:text-3xl text-tertiary2">
                Dessert
            </h1>
            <section className="flex justify-center gap-10 flex-wrap pt-10">
                <div className="w-[300px] bg-white">
                    <div className="w-full h-[200px]">
                        <img
                            src={lemondessert}
                            alt="greeksalad"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-5 p-4">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-tertiary2">Lemon Dessert</h1>
                            <p className="text-secondary1 font-bold">$8.00</p>
                        </div>
                        <div className="w-[210px]">
                            <p className="text-primary1">
                                Our Lemon Dessert is a delightful treat, made with the finest
                                ingredients and crafted straight from grandma’s recipe book.
                            </p>
                        </div>
                        <div
                            className="flex items-center gap-4 cursor-pointer"
                            onClick={() => handleOrder({ name: "Greek Salad", price: 10.99 })}
                        >
                            <h1 className="font-bold text-tertiary2">order a dilevery</h1>
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </div>
                    </div>
                </div>
                <div className="w-[300px] bg-white">
                    <div className="w-full h-[200px]">
                        <img
                            src={chocolatesdessert}
                            alt="bruchetta"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-5 p-4">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-tertiary2">Chocolate Delight</h1>
                            <p className="text-secondary1 font-bold">$6.99</p>
                        </div>
                        <div className="w-[210px]">
                            <p className=" text-primary1">
                                Our Chocolate Delight is an indulgent dessert experience that
                                combines rich, velvety chocolate with a symphony of flavors.
                            </p>
                        </div>
                        <div
                            className="flex  items-baseline gap-4 cursor-pointer"
                            onClick={() => handleOrder({ name: "Greek Salad", price: 10.99 })}
                        >
                            <h1 className="font-bold text-tertiary2">order a dilevery</h1>
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white md:m-10 sm:m-5 p-10 flex justify-center items-center flex-col">
            <h1 className="flex mb-4 xs:text-xl md:text-2xl lg:text-3xl text-tertiary2">
                    Your Order
                </h1>
                {orderItems.length === 0 ? (
                    <p>Your order is empty. Add items from the menu.</p>
                ) : (
                    <>
                        <ul>
                            {orderItems.map((item, index) => (
                                <li key={index} className="mb-2">
                                    {item.name} - ${item.price.toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 font-semibold">Total: ${getTotalAmount()}</div>
                    </>
                )}
            </section>
        </main>
    )
}

export default Order
