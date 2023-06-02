/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "snap-white": "hsl(0, 0%, 98%)",
        "snap-gray": "hsl(0, 0%, 41%)",
        "snap-black": "hsl(0, 0%, 8%)",
        "snap-opaque": "rgba(0, 0, 0, 0.4)",
      },
      screens: {
        sm: "375px",
        md: "880px",
        lg: "1100px",
        xl: "1350px",
      },
      fontSize: {
        body: "18px",
      },
      width: {
        maxcontent: "max-content",
      },
    },
  },
  plugins: [],
};
