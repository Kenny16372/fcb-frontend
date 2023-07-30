export default {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        blue: "#2e3085",
      },
    },
  },
};
