/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "teal",
                    "primary-content": "#265073",
                    secondary: "#7AB2B2",
                    "secondary-content": "#344C64",
                    accent: "#538392",
                    neutral: "ACE2E1",
                    "base-100": "#E3FDFD",
                    "base-200": "#CBF1F5",
                    "base-300": "#80B9AD",
                    info: "#FFC96F",
                    success: "#BFEA7C",
                    warning: "#9BCF53",
                    error: "#FA7070",
                },
            },
            {
                mytheme2: {
                    primary: "#474b4f",
                    "primary-content": "#C39898",
                    secondary: "#8C6A5D",
                    "secondary-content": "#E7D4B5",
                    accent: "#A87676",
                    neutral: "#DBB5B5",
                    "base-100": "#3E3232",
                    "base-200":"#503C3C",
                    "base-300": "#A87C7C",
                    info: "#FFC96F",
                    success: "#BFEA7C",
                    warning: "#9BCF53",
                    error: "#FA7070",
                },
            },
        ],
    },
};

// !colors required 
/* 
?primary-content : text 
?secondary-content : inside box text
?primary : card 
?secondary : btns
?neutral : on click header btn 
?base-100 : for bg
?base-200 : footer on hover btn
?base-300 : shimmer
?accent : shadow
*/