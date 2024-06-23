/** @type {import('tailwindcss').Config} */

// import preline from "@preline/overlay"
import preline from "preline/plugin"

export default {
  content: [
    './node_modules/preline/preline.js',
  "./src/**/*.{html,js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [
    preline
  ],
}

