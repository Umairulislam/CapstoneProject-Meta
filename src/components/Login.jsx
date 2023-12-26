import React, { useState } from "react"
import { login } from "../assets"

const LoginMenu = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })
    const [loggedIn, setLoggedIn] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials((prev) => ({ ...prev, [name]: value }))
    }

    const handleLogin = () => {
        // Add your authentication logic here
        // For simplicity, let's consider it as a successful login if both username and password are non-empty
        if (credentials.username && credentials.password) {
            setLoggedIn(true)
            alert("Login successful!")
        } else {
            alert("Invalid credentials. Please enter both username and password.")
        }
    }

    return (
        <main className="xs:p-4 md:p-12 bg-tertiary1">
            <section>
                <img
                    src={login}
                    alt="Login"
                    className="w-full h-52 object-cover rounded-2xl"
                />
            </section>

            <div className="mx-auto mt-10 lg:w-1/3 p-4 bg-white ounded-md shadow-md">
                {loggedIn ? (
                    <p className="text-tertiary2 font-semibold">Welcome, {credentials.username}!</p>
                ) : (
                    <>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            className="mb-3 p-2 w-full rounded-md border border-tertiary3 focus:outline-none focus:ring focus:border-primary2"
                        />

                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            className="mb-3 p-2 w-full rounded-md border border-tertiary3 focus:outline-none focus:ring focus:border-primary2"
                        />

                        <button
                            onClick={handleLogin}
                            className="py-1.5 w-full  bg-primary2 hover:bg-primary1 hover:text-tertiary1 rounded-2xl font-bold"
                        >
                            Login
                        </button>
                    </>
                )}
            </div>
        </main>
    )
}

export default LoginMenu
