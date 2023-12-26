import React from "react"
import { marioadrian1, marioadrian2 } from "../assets"

const About = () => {
    return (
        <main id="about" className="xs:p-4 md:p-12 flex xs:flex-col xl:flex-row justify-around items-center flex-wrap gap-20">
            <section className="flex justify-center flex-col items-start gap-5 md:w-[420px] xs:w-full">
                <div className="text-primary1">
                    <h1 className="markazi_text font-medium xs:text-2xl md:text-3xl lg:text-4xl leading-10">
                        Little Lemon
                    </h1>
                    <h2 className="markazi_text xs:text-xl md:tetx-2xl lg:text-3xl">Chicago</h2>
                </div>
                <p>
                    Embrace the captivating allure of Little Lemon Restaurant, a family-owned haven
                    meticulously curated by brothers Mario and Adrian, nestled in the
                    Mediterranean-inspired enclave East of Chicago. Our culinary odyssey invites you
                    to savor an array of exquisite flavors, marrying tradition with innovation.
                    Immerse yourself in the warmth of genuine hospitality, where every visit becomes
                    an unforgettable journey for you and your cherished companions
                </p>
            </section>
            <section className="relative py-44 xs:left-24 xl:left-0">
                <div className="xs:w-[200px] md:w-[250px] xs:h-[250px] md:h-[300px] absolute top-[-10px] right-[-60px]">
                    <img
                        src={marioadrian1}
                        alt="marioadrian1"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="xs:w-[200px] md:w-[250px] xs:h-[250px] md:h-[300px] absolute top-[80px] right-[100px]">
                    <img
                        src={marioadrian2}
                        alt="marioadrian2"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </section>
        </main>
    )
}

export default About
