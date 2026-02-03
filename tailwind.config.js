/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                coffee: {
                    primary: '#8B4513',
                    secondary: '#D2691E',
                    dark: '#2C1810',
                    body: '#5D4037',
                    bg: '#FAF9F6',
                    accent: '#A1887F',
                    gold: '#FFB74D',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')",
            }
        },
    },
    plugins: [],
}
