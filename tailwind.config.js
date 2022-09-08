/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
    purge: ["./resources/js/**/*.{vue,js}", "./resources/views/**/*.blade.php"],
};
