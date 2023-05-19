/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              background: "var(--tw-prose-pre-bg)",
              padding: "2px 6px",
              color: "var(--tw-prose-pre-code)!important",
              "border-radius": "5px"
            },
            "code::before": { content: "" },
            "code::after": { content: "" }
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
