import React, { useState } from "react"

const PersonForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        specialRequest: "",
    })

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        specialRequest: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: "" }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let valid = true
        if (!formData.fullName) {
            setErrors((prev) => ({ ...prev, fullName: "Please enter your full name" }))
            valid = false
        }
        if (!formData.email) {
            setErrors((prev) => ({
                ...prev,
                email: "Please enter your email address",
            }))
            valid = false
        }
        if (!formData.phoneNumber) {
            setErrors((prev) => ({ ...prev, phoneNumber: "Please enter your phone number" }))
            valid = false
        }
        if (valid) {
            onSubmit(formData)
        }
    }

    return (
        <main>
            <section className="flex items-center justify-center">
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className=" xs:w-full md:w-1/2 text-tertiary2 md:text-base"
                >
                    <div className="mb-4 w-full">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            onChange={handleChange}
                            value={formData.fullName}
                            className="mt-1 p-2 rounded-md w-full"
                        />
                        {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            className="mt-1 p-2 rounded-md w-full"
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={formData.phoneNumber}
                            className="mt-1 p-2 rounded-md w-full"
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-500">{errors.phoneNumber}</span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="specialRequest">Special Request</label>
                        <textarea
                            name="specialRequest"
                            onChange={handleChange}
                            value={formData.specialRequest}
                            rows={6}
                            className="mt-1 p-2 rounded-md w-full border border-black"
                        />
                        {errors.specialRequest && (
                            <span className="text-red-500">{errors.specialRequest}</span>
                        )}
                    </div>

                    <div className="flex justify-center items-center mt-10">
                        <button
                            type="submit"
                            className="px-8 py-1.5 bg-tertiary2 text-tertiary1 hover:bg-primary2 hover:text-tertiary2 rounded-2xl font-bold"
                        >
                            Confirm Reservation
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default PersonForm
