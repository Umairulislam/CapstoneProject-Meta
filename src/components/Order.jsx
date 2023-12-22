import React from "react"
import {restaurantchef} from "../assets"

const Order = () => {
    return (
        <main className="xs:p-4 md:p-12 bg-tertiary1 text-tertiary2">
            <section>
                <img
                    src={restaurantchef}
                    alt="restaurantchef"
                    className="w-full h-52 object-cover rounded-2xl object-bottom"
                />
            </section>
            <section>
                <h2 className="xs:text-xl md:text-2xl lg:text-3xl text-tertiary2">Order Online</h2>
            </section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Featured Items */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Featured Item"
                            className="w-full h-32 object-cover mb-4 rounded-md"
                        />
                        <h3 className="text-lg font-semibold mb-2">Featured Item</h3>
                        <p className="text-sm text-gray-600">
                            Discover our special and delicious featured item.
                        </p>
                        <button className="mt-4 bg-primary2 text-white px-4 py-2 rounded-md hover:bg-secondary2">
                            Add to Cart
                        </button>
                    </div>

                    {/* Special Offers */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Special Offers</h3>
                        <p className="text-sm text-gray-600">
                            Check out our exclusive online offers. Limited time only!
                        </p>
                        <button className="mt-4 bg-primary2 text-white px-4 py-2 rounded-md hover:bg-secondary2">
                            View Offers
                        </button>
                    </div>

                    {/* Online Ordering Process Overview */}
                    <div className="col-span-2 bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">How to Order Online</h3>
                        <p className="text-sm text-gray-600">
                            1. Browse our menu and select your favorite items.
                            <br />
                            2. Customize your order with preferred options.
                            <br />
                            3. Add items to your cart and proceed to checkout.
                            <br />
                            4. Choose delivery or pickup options.
                            <br />
                            5. Complete the payment securely.
                            <br />
                            6. Enjoy your delicious meal!
                        </p>
                    </div>
                </div>

                {/* Delivery Information */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-4">Delivery Information</h3>
                    <p className="text-base text-gray-600">
                        We deliver to your doorstep! Enjoy our flavorful dishes from the comfort of
                        your home.
                        <br />
                        Delivery Areas: [List of delivery areas]
                        <br />
                        Estimated Delivery Time: [Specify time range]
                        <br />
                        Delivery Fee: [Specify fee or mention if free]
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Order
