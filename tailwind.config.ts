import type { Config } from "tailwindcss";
import daisyui from "daisyui"


export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}", 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    require('preline/plugin'),
  ],
} satisfies Config;
