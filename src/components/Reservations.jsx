import React, { useState } from "react"
import { restaurant, faCircleCheck } from "../assets"
import TableForm from "./TableForm"
import PersonForm from "./PersonForm"
import Modal from "./Modal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Reservations = () => {
    const [currentForm, setCurrentForm] = useState("table") // "table" or "person"
    const [tableFormData, setTableFormData] = useState({})
    const [personFormData, setPersonFormData] = useState({})
    const [showConfirmationModal, setShowConfirmationModal] = useState(false)

    const handleTableFormSubmit = (formData) => {
        setTableFormData(formData)
        setCurrentForm("person")
    }

    const handlePersonFormSubmit = (formData) => {
        setShowConfirmationModal(true)
        // Handle PersonForm submission logic if needed
        setPersonFormData(formData)
        // alert("Your reservation has been confirmed. Check your email.")
        // Reset forms and navigate back to the table form
        setTableFormData({})
        setCurrentForm("table")
    }
    const closeConfirmationModal = () => {
        setShowConfirmationModal(false)
    }

    return (
        <main className="xs:p-4 md:p-12 bg-tertiary1">
            <section>
                <img
                    src={restaurant}
                    alt="restaurant"
                    className="w-full h-52 object-cover rounded-2xl"
                />
            </section>
            <section className="mt-5 flex justify-center text-tertiary2 xs:text-xl md:text-2xl lg:text-3xl">
                <h1>Book Your Table Now</h1>
            </section>
            <section>
                {currentForm === "table" && (
                    <TableForm
                        personFormData={personFormData}
                        onSubmit={handleTableFormSubmit}
                        setCurrentForm={setCurrentForm}
                    />
                )}
                {currentForm === "person" && (
                    <PersonForm
                        tableFormData={tableFormData}
                        onSubmit={handlePersonFormSubmit}
                        setCurrentForm={setCurrentForm}
                    />
                )}
            </section>
            {showConfirmationModal && (
                <Modal onClose={closeConfirmationModal}>
                    <div className="text-center">
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            style={{ color: "#f4ce14" }}
                            className="text-4xl"
                        />
                        <p className="text-lg font-bold mt-4">Reservation Confirmed!</p>
                        <p>Your reservation has been confirmed. Check your email for details.</p>
                    </div>
                </Modal>
            )}
        </main>
    )
}

export default Reservations
