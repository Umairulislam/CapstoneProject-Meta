import React, { useState } from "react"

const TableForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    })

    const [errors, setErrors] = useState({
        date: "",
        time: "",
        guests: "",
        occasion: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: "" }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let valid = true
        if (!formData.date) {
            setErrors((prev) => ({ ...prev, date: "Please choose a date" }))
            valid = false
        }
        if (!formData.time || formData.time < "17:00" || formData.time > "22:00") {
            setErrors((prev) => ({
                ...prev,
                time: "Please choose a time between 5:00 PM and 10:00 PM",
            }))
            valid = false
        }
        if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
            setErrors((prev) => ({ ...prev, guests: "Please choose a guests between 1 and 10" }))
            valid = false
        }
        if (!formData.occasion) {
            setErrors((prev) => ({ ...prev, occasion: "Please choose an occasion" }))
            valid = false
        }
        if (valid) {
            // alert("Your reservation has been made")
            // setFormData({
            //     date: "",
            //     time: "",
            //     guests: "",
            //     occasion: "",
            // })
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
                        <label htmlFor="date">Choose Date</label>
                        <input
                            type="date"
                            name="date"
                            onChange={handleChange}
                            value={formData.date}
                            className="mt-1 p-2  rounded-md w-full"
                        />
                        {errors.date && <span className="text-red-500">{errors.date}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="time">Choose Time (5:00 - 10:00 PM)</label>
                        <input
                            type="time"
                            name="time"
                            onChange={handleChange}
                            value={formData.time}
                            className="mt-1 p-2 rounded-md w-full"
                        />
                        {errors.time && <span className="text-red-500">{errors.time}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="guests">Number of Guests</label>
                        <input
                            type="number"
                            name="guests"
                            onChange={handleChange}
                            value={formData.guests}
                            min="1"
                            max="10"
                            className="mt-1 p-2 rounded-md w-full"
                        />
                        {errors.guests && <span className="text-red-500">{errors.guests}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            name="occasion"
                            id="occasion"
                            value={formData.occasion}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                        >
                            <option value="Birthday">Select an Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                        {errors.occasion && <span className="text-red-500">{errors.occasion}</span>}
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <button
                            type="submit"
                            className="px-8 py-1.5 bg-tertiary2 text-tertiary1 hover:bg-primary2 hover:text-tertiary2 rounded-2xl font-bold"
                        >
                            Reserve a Table
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default TableForm
