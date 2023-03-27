/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      textColor: {
        skin: "var(--color-toolbtn-color)"
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-toolbtn-bgcolor)",
          "toolbtnHover": "var(--color-toolbtn-bghover)",
          "treeItemFocus": "var(--color-treeitem-focus-bgcolor)",
        },
        
      }
    },
  },
  plugins: [],
}
