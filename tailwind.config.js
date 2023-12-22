/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "320px",
            sm: "425px",
            md: "768px",
            lg: "1024px",
            xl: "1220px",
        },
        fontSize: {
            sm: "16px",
            base: "18px",
            lg: "20px",
            xl: "24px",
            "2xl": "32px",
            "3xl": "40px",
            "4xl": "64px",
        },
        extend: {
            colors: {
                primary1: "#495E57",
                primary2: "#F4CE14",
                secondary1: "#EE9972",
                secondary2: "#FBDABB",
                tertiary1: "#EDEFEE",
                tertiary2: "#333333",
                tertiary3: "#D9D9D9",
            },
        },
    },
    plugins: [],
}
