import React from "react"
import { logofooter } from "../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLocationDot,
    faPhone,
    faEnvelope,
    faYoutube,
    faFacebook,
    faInstagram,
    faTwitter,
} from "../assets"

const Footer = () => {
    return (
        <main className="xs:p-4 md:p-12 bg-primary1 flex sm:justify-start md:justify-around items-start gap-20 flex-wrap">
            <section>
                <img src={logofooter} alt="logofooter" className="w-24" />
            </section>
            <section className="text-tertiary1">
                <h1 className="text-base font-bold text-primary2">Quick Links</h1>
                <a href="">
                    <li></li>Home
                </a>
                <a href="">
                    <li></li>About
                </a>
                <a href="">
                    <li></li>Menu
                </a>
                <a href="">
                    <li></li>Reservations
                </a>
                <a href="">
                    <li></li>Order online
                </a>
                <a href="">
                    <li></li>Login
                </a>
            </section>
            <section className="text-tertiary1">
                <h1 className="text-base font-bold text-primary2">Contact</h1>
                <a href="" className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <li></li>Little Lemon, 123 Main Street,Chicago
                </a>
                <a href="" className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faPhone} />
                    <li></li>(555) 123-4567
                </a>
                <a href="" className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <li></li>infor@littlelemon.com
                </a>
            </section>
            <section className="text-tertiary1">
                <h1 className="text-base font-bold text-primary2 ">Social Links</h1>
                <div className="flex justify-start items-center gap-4 text-lg social_links">
                    <a href="https://www.youtube.com/" target="_blank">
                        <li>
                            <FontAwesomeIcon icon={faYoutube} />
                        </li>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                    </a>
                    <a href="https://www.instagram.com/?hl=en" target="_blank">
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <li>
                            <FontAwesomeIcon icon={faTwitter} />
                        </li>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default Footer
