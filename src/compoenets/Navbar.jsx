import React from "react"
import { logo, faBarsStaggered, faXmark } from "../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false)
    const toggleMenu = () => setOpenMenu(!openMenu)

    return (
        <nav className="flex justify-center items-center gap-12 xs:p-4 md:p-6 ">
            <div>
                <a href="#">
                    <img src={logo} alt="logo" className="xs:w-36 lg:w-60" />
                </a>
            </div>

            {!openMenu ? (
                <ul className="hidden lg:flex justify-evenly items-center gap-10 text-xl">
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>About</li>
                    </a>
                    <a href="">
                        <li>Menu</li>
                    </a>
                    <a href="">
                        <li>Reservations</li>
                    </a>
                    <a href="">
                        <li>Order Online</li>
                    </a>
                    <a href="">
                        <li>Login</li>
                    </a>
                </ul>
            ) : (
                <ul className="absolute flex justify-center items-center flex-col gap-5 top-20 text-base border_bottom">
                    <a href="">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>About</li>
                    </a>
                    <a href="">
                        <li>Menu</li>
                    </a>
                    <a href="">
                        <li>Reservations</li>
                    </a>
                    <a href="">
                        <li>Order Online</li>
                    </a>
                    <a href="">
                        <li>Login</li>
                    </a>
                </ul>
            )}
            <div onClick={toggleMenu} className="block lg:hidden">
                {openMenu ? (
                    <FontAwesomeIcon icon={faXmark} className="absolute top-6 right-8 text-2xl" />
                ) : (
                    <FontAwesomeIcon
                        icon={faBarsStaggered}
                        className="absolute top-6 right-8 text-2xl"
                    />
                )}
            </div>
        </nav>
    )
}

export default Navbar
