/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            margin: {
                'mt-133': '133.33%',
            },
            width: {
                'w-30': '7.5rem',
            },
            minWidth: {
                'min-w-135': '8.4375rem',
            },
            height: {
                'h-88': '22.5rem',
                'h-100': '25rem',
                'h-120': '31.3rem',
                'h-15': '3.875rem',
            },
        },
    },
    plugins: [],
}
