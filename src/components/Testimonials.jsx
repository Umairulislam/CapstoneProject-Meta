import React from "react"
import BasicRating from "./HalfRating"
import { avatar1, avatar2, avatar3, avatar4 } from "../assets"

const Testimonials = () => {
    return (
        <main className="xs:p-4 md:p-12 bg-tertiary1">
            <h1 className="flex justify-center items-center xs:text-xl md:text-2xl lg:text-3xl text-tertiary1">
                Testimonials
            </h1>
            <section className="flex justify-around gap-10 flex-wrap mt-10">
                <div className="flex flex-col justify-start items-start gap-2 w-[300px] p-4 text-primary1 bg-white rounded-2xl">
                    <div>
                        <BasicRating  />
                    </div>
                    <div className="flex items-center gap-5">
                        <img
                            src={avatar1}
                            alt="avatar"
                            className="w-36 h-36 rounded-full object-cover object-top"
                        />
                        <p className="text-tertiary2 font-bold">David Malan</p>
                    </div>
                    <div>
                        <p>
                            "Little Lemon's flavors are an exquisite delight. Culinary perfection in
                            a cozy ambiance—undeniably wonderful!"
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-[300px] p-4 text-primary1 bg-white rounded-2xl">
                    <div>
                        <BasicRating />
                    </div>
                    <div className="flex items-center gap-5">
                        <img
                            src={avatar2}
                            alt="avatar"
                            className="w-36 h-36 rounded-full object-cover object-top"
                        />
                        <p className="text-tertiary2 font-bold">Ahsan Ali</p>
                    </div>
                    <div>
                        <p>
                            "At Little Lemon, indulge in a delightful journey of flavors and warmth.
                            Exceptional taste, inviting atmosphere—truly memorable."
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-[300px] p-4 text-primary1 bg-white rounded-2xl">
                    <div>
                        <BasicRating />
                    </div>
                    <div className="flex items-center gap-5">
                        <img
                            src={avatar3}
                            alt="avatar"
                            className="w-36 h-36 rounded-full object-cover object-top"
                        />
                        <p className="text-tertiary2 font-bold">Daniel Harris</p>
                    </div>
                    <div>
                        <p>
                            "Little Lemon's stand-out dishes and cozy ambiance promise a delightful
                            experience. Memorable dining awaits with joyous flavors."
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2 w-[300px] p-4 text-primary1 bg-white rounded-2xl">
                    <div>
                        <BasicRating />
                    </div>
                    <div className="flex items-center gap-5">
                        <img
                            src={avatar4}
                            alt="avatar"
                            className="w-36 h-36 rounded-full object-cover object-top"
                        />
                        <p className="text-tertiary2 font-bold">Brian Arthur</p>
                    </div>
                    <div>
                        <p>
                            "Savor Little Lemon's gastronomic delights—a culinary gem with
                            impeccable service and a warm, inviting atmosphere."
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Testimonials
