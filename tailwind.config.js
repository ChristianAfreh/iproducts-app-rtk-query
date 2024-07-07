/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('./assets/photos/glasses-beauty-supplies-near-keyboard.jpg')",
        // Add other custom images here
      },
    },
  },
  plugins: [],
};
