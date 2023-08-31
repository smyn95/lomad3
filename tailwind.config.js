/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    plugins: [],
    theme: {
        extend: {
            fontFamily: {
                nanumGothic: ['NanumGothic', 'sans-serif'],
            },
            keyframes: {
                slideUp: {
                    'from': { top: '3.125rem', zIndex: '2' },
                    'to': { top: '-140px', zIndex: '-50' },
				},
                slideDown: {
                    'from': { top: '-140px'},
                    'to': { top: '3.125rem', zIndex: '10' },
				}
			},
            animation: {
                slideUp: 'slideUp 0.3s forwards normal',
                slideDown: 'slideDown 0.3s forwards normal',
            },
        },
        fontSize: {
        headline1: [
            '50px',
            {
                lineHeight: '60px',
                fontWeight: '700',
            },
        ],
        headline2: [
            '40px',
            {
                lineHeight: '48px',
                fontWeight: '700',
            },
        ],
        headline3: [
            '38px',
            {
                lineHeight: '36px',
                fontWeight: '700',
            },
        ],
        title1: [
            '26px',
            {
                lineHeight: '36.4px',
                fontWeight: '700',
            },
        ],
        title2: [
            '23px',
            {
                lineHeight: '32.2px',
                fontWeight: '700',
            },
        ],
        title3: [
            '20px',
            {
                lineHeight: '28px',
                fontWeight: '700',
            },
        ],
        title4: [
            '17px',
            {
                lineHeight: '23.8px',
                fontWeight: '700',
            },
        ],
        body1: [
            '16px',
            {
                lineHeight: '25.6px',
                fontWeight: '400',
            },
        ],
        body2: [
            '14px',
            {
                lineHeight: '22.4px',
                fontWeight: '400',
            },
        ],
        body3: [
            '13px',
            {
                lineHeight: '22.1px',
                fontWeight: '400',
            },
        ],
        body4: [
            '12px',
            {
                lineHeight: '20.4px',
                fontWeight: '400',
            },
        ],
        caption: [
            '11px',
            {
                lineHeight: '17.6px',
                fontWeight: '400',
            },
        ],
        label: [
            '10px',
            {
                lineHeight: '16px',
                fontWeight: '400',
            },
        ],
        button1: [
            '19px',
            {
                lineHeight: '30.4px',
                fontWeight: '700',
            },
        ],
        button2: [
            '16px',
            {
                lineHeight: '25.6px',
                fontWeight: '700',
            },
        ],
        button3: [
            '14px',
            {
                lineHeight: '22.4px',
                fontWeight: '400',
            },
        ],
        button4: [
            '12px',
            {
                lineHeight: '20.4px',
                fontWeight: '400',
            },
        ],
        },
        colors: {
        gray: {
            10: '#fff',
            20: '#f6f6f6',
            30: '#e8e8e8',
            40: '#e1e1e1',
            50: '#bebebe',
            60: '#8e8e8e',
            70: '#646464',
            80: '#3c3c3c',
            90: '#1e1e1e',
            100: '#000',
        },
        red: {
            10: '#feecee',
            20: '#fcd0d3',
            30: '#f1aba9',
            40: '#e98380',
            50: '#e95f55',
            60: '#ed523d',
            70: '#df4a3c',
            80: '#cd4036',
            90: '#c03a2f',
            100: '#b03225',
        },
        yellow: {
            10: '#fcf7e1',
            20: '#f8e9b3',
            30: '#f3da83',
            40: '#efcd53',
            50: '#ecc132',
            60: '#e9b71f',
            70: '#e9ac19',
            80: '#e89915',
            90: '#e78911',
            100: '#e56d0c',
        },
        blue: {
            10: '#e4f1f8',
            20: '#bcdcee',
            30: '#94c7e4',
            40: '#70b1d8',
            50: '#55a1d2',
            60: '#3e93cb',
            70: '#3486bf',
            80: '#2974ae',
            90: '#21649c',
            100: '#13487d',
        },
        green: {
            10: '#e8f6ea',
            20: '#c7e7cb',
            30: '#a4d8ab',
            40: '#7eca89',
            50: '#62bf71',
            60: '#46b358',
            70: '#3da44e',
            80: '#329243',
            90: '#298138',
            100: '#166126',
        },
        primaryBlack: '#000',
        primaryWhite: '#fff',
        transparent: 'transparent',
        },
        backgroundImage: {
        check: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.00006 14.41L4.29006 9.7C3.90006 9.31 3.90006 8.68 4.29006 8.29C4.68006 7.9 5.31006 7.9 5.70006 8.29L8.99006 11.58L14.2801 6.29C14.6701 5.9 15.3001 5.9 15.6901 6.29C16.0801 6.68 16.0801 7.31 15.6901 7.7L8.98006 14.41H9.00006Z'/%3E%3C/svg%3E%0A")`,
        pageSearch: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.8502 17.15L13.4102 12.71C14.3802 11.57 14.9702 10.11 14.9702 8.5C14.9702 4.92 12.0502 2 8.47021 2C4.89021 2 1.97021 4.92 1.97021 8.5C1.97021 12.08 4.89021 15 8.47021 15C10.0902 15 11.5702 14.4 12.7102 13.42L17.1502 17.86C17.2502 17.96 17.3802 18.01 17.5002 18.01C17.6202 18.01 17.7602 17.96 17.8502 17.86C18.0502 17.66 18.0502 17.35 17.8502 17.15ZM8.47021 14C5.44021 14 2.97021 11.53 2.97021 8.5C2.97021 5.47 5.44021 3 8.47021 3C11.5002 3 13.9702 5.47 13.9702 8.5C13.9702 11.53 11.5002 14 8.47021 14Z' /%3E%3C/svg%3E%0A")`,
        searchDelete: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10Z' fill='%23E1E1E1'/%3E%3Cpath d='M10.7102 9.99999L13.8602 6.84999C14.0602 6.64999 14.0602 6.33999 13.8602 6.13999C13.6602 5.93999 13.3502 5.93999 13.1502 6.13999L10.0002 9.28999L6.85023 6.13999C6.65023 5.93999 6.34023 5.93999 6.14023 6.13999C5.94023 6.33999 5.94023 6.64999 6.14023 6.84999L9.29023 9.99999L6.14023 13.15C5.94023 13.35 5.94023 13.66 6.14023 13.86C6.24023 13.96 6.37023 14.01 6.49023 14.01C6.61023 14.01 6.75023 13.96 6.84023 13.86L9.99023 10.71L13.1402 13.86C13.2402 13.96 13.3702 14.01 13.4902 14.01C13.6102 14.01 13.7502 13.96 13.8402 13.86C14.0402 13.66 14.0402 13.35 13.8402 13.15L10.6902 9.99999H10.7102Z' fill='white' /%3E%3C/svg%3E%0A")`,
        },
    },
};
