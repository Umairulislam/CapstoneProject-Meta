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
        extend: {
            colors: {
                primary1: "#495E57",
                primary2: "#F4CE14",
                secondary1: "#EE9972",
                secondary2: "#FBDABB",
                tertiary1: "#EDEFEE",
                tertiary2: "#333333",
            },
        },
    },
    plugins: [],
}
