import React from "react"
import { logo, faBarsStaggered, faXmark } from "../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false)
    const toggleMenu = () => setOpenMenu(!openMenu)

    // const closeMenu = () => setOpenMenu(false)

    return (
        <nav className="xs:p-4 md:p-6 flex justify-around items-center gap-10 ">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" className="xs:w-36 lg:w-60" />
                </Link>
            </div>

            {!openMenu ? (
                <ul className="hidden lg:flex justify-evenly items-center gap-10 text-base font-medium navbar_item">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <a href="#menu">
                        <li>Menu</li>
                    </a>
                    <a href="#about">
                        <li>About</li>
                    </a>
                    <Link to="/reservations">
                        <li>Reservations</li>
                    </Link>
                    <Link to="/order">
                        <li>Order Online</li>
                    </Link>
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                </ul>
            ) : (
                <ul className="absolute flex justify-center items-center flex-col gap-5 top-14 text-sm border_bottom bg-white w-full h-full opacity-80 navbar_item">
                    <Link to="/" onClick={toggleMenu}>
                        <li>Home</li>
                    </Link>
                    <a href="#menu" onClick={toggleMenu}>
                        <li>Menu</li>
                    </a>
                    <a href="#about" onClick={toggleMenu}>
                        <li>About</li>
                    </a>
                    <Link to="/reservations" onClick={toggleMenu}>
                        <li>Reservations</li>
                    </Link>
                    <Link to="/order" onClick={toggleMenu}>
                        <li>Order Online</li>
                    </Link>
                    <Link to="/login" onClick={toggleMenu}>
                        <li>Login</li>
                    </Link>
                </ul>
            )}
            <div onClick={toggleMenu} className="block lg:hidden">
                {openMenu ? (
                    <FontAwesomeIcon icon={faXmark} className="absolute top-6 right-8 text-xl" />
                ) : (
                    <FontAwesomeIcon
                        icon={faBarsStaggered}
                        className="absolute top-6 right-8 text-xl"
                    />
                )}
            </div>
        </nav>
    )
}

export default Navbar
