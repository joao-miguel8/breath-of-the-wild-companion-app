/** @type {import('tailwindcss').Config} */

const fontSizes = {};
const minFontSize = 12;
const maxFontSize = 70;
const base = 16;
let i = minFontSize;
while (i <= maxFontSize) {
    fontSizes[i] = `${i / base}rem`;
    i += 2;
}

module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        fontSize: fontSizes,
        fontFamily: {
            poppins: "poppins",
        },
        extend: {
            colors: {
                accent: "#47CDC3",
            },
        },
    },
    plugins: [],
};
