import React from "react"
import { restauranfood } from "../assets"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <main className="xs:p-4 md:p-12 bg-primary1 flex justify-around items-center flex-wrap gap-10">
            <section className="flex justify-center flex-col items-start gap-10 w-[420px]">
                <div>
                    <h1 className="markazi_text text-primary2 font-medium xs:text-2xl md:text-3xl lg:text-4xl leading-10">
                        Little Lemon
                    </h1>
                    <h2 className="markazi_text text-tertiary1 xs:text-xl md:tetx-2xl lg:text-3xl">
                        Chicago
                    </h2>
                </div>
                <p className=" text-tertiary1 xs:text-sm md:text-base">
                    Little Lemon is a charming neighborhood bistro that serves simple food and
                    classic cocktails in a lively but casual environment. The restaurant features a
                    locally-sourced menu with daily specials.
                </p>
                <Link to="/reservations">
                    <button className="px-8 py-1.5  bg-primary2 hover:bg-tertiary1 rounded-2xl font-bold">
                        Reserve a table
                    </button>
                </Link>
            </section>
            <section className="w-[420px] h-[456px]">
                <img
                    src={restauranfood}
                    alt="restaurant"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </section>
        </main>
    )
}

export default Hero
