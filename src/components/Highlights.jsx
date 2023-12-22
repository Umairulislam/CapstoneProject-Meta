import React from "react"
import { greeksalad, bruchetta, lemondessert, faPersonBiking } from "../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Highlights = () => {
    return (
        <main id="menu" className="xs:p-4 md:p-16">
            <section className="flex xs:justify-evenly md:justify-between items-center gap-2 flex-wrap px-8">
                <h1 className="xs:text-xl md:text-2xl lg:text-3xl text-tertiary2">This weeks specials!</h1>
                <button className="px-8 py-1.5  bg-primary2 hover:bg-primary1 hover:text-tertiary1 rounded-2xl font-bold">
                    Online menu
                </button>
            </section>
            <section className="flex justify-around gap-10 flex-wrap pt-10">
                <div className="w-[300px] bg-tertiary1">
                    <div className="w-full h-[150px] object-cover">
                        <img src={greeksalad} alt="greeksalad" />
                    </div>
                    <div className="flex flex-col gap-5 mt-20 p-4">
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
                        <div className="flex items-center gap-4 cursor-pointer">
                            <h1 className="font-bold text-tertiary2">order a dilevery</h1>
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </div>
                    </div>
                </div>
                <div className="w-[300px] bg-tertiary1">
                    <div className="w-full h-[150px] object-cover">
                        <img src={bruchetta} alt="bruchetta" />
                    </div>
                    <div className="flex flex-col gap-5 mt-20 p-4">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-tertiary2">Bruschetta</h1>
                            <p className="text-secondary1 font-bold">$12.99</p>
                        </div>
                        <div className="w-[210px]">
                            <p className=" text-primary1">
                                Our Bruschetta is made from grilled bread that has been smeared with
                                garlic and seasoned with salt and olive oil and topped with tomatoes.
                            </p>
                        </div>
                        <div className="flex  items-baseline gap-4 cursor-pointer">
                            <h1 className="font-bold text-tertiary2">order a dilevery</h1>
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </div>
                    </div>
                </div>
                <div className="w-[300px] bg-tertiary1">
                    <div className="w-full h-[150px] object-cover">
                        <img src={lemondessert} alt="lemondessert" />
                    </div>
                    <div className="flex flex-col gap-5 mt-20 p-4">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-tertiary2">Lemon Dessert</h1>
                            <p className="text-secondary1 font-bold">$13.50</p>
                        </div>
                        <div className="w-[210px]">
                            <p className=" text-primary1">
                                This comes straight from grandma’s recipe book, every last
                                ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer">
                            <h1 className="font-bold text-tertiary2">order a dilevery</h1>
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Highlights
