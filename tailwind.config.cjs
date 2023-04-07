/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'clear': "url('/clear.jpg')",
        'sunny': "url('/sunny.jpg')",
        'cloudy': "url('cloudy.jpg')",
        'rainy': "url('/rainy.jpg')",
        'thunder': "url('/thunder.jpg')",
        'snow': "url('/snowy.jpg')",
        'fog': "url('/fog.jpg')"
      }
    },
  },
  plugins: [],
}

