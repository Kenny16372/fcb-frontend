import { join, dirname } from "path";
import { fileURLToPath } from "url";

export default {
  plugins: {
    tailwindcss: {
      config: join(
        dirname(fileURLToPath(import.meta.url)),
        "tailwind.config.js"
      ),
    },
    autoprefixer: {},
  },
};
