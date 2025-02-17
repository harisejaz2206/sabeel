/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#F8FAFC',
          secondary: '#F1F5F9',
        },
        accent: {
          primary: '#059669',
          secondary: '#047857',
        },
        text: {
          body: '#64748B',
          heading: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
      spacing: {
        nav: '256px',
      },
      boxShadow: {
        card: '0 2px 4px rgba(0,0,0,0.05)',
        interactive: '0 1px 2px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'geometric-pattern': "url('https://images.unsplash.com/photo-1584286595398-a59087c4d8de?q=80&w=2940&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};