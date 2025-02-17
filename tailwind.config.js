/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#134e4a",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        gold: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#b45309",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        pearl: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        background: {
          primary: "#F8FAFC",
          secondary: "#F1F5F9",
        },
        accent: {
          primary: "#059669",
          secondary: "#047857",
        },
        text: {
          body: "#64748B",
          heading: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "serif"],
      },
      spacing: {
        nav: "280px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        elevated:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "geometric-pattern":
          "url('https://images.unsplash.com/photo-1584286595398-a59087c4d8de?q=80&w=2940&auto=format&fit=crop')",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
