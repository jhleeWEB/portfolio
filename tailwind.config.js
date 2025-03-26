import { heroui } from '@heroui/react';
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./public/index.html',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				float: 'float 3s ease-in-out infinite',
				'float-slow': 'float 5s ease-in-out infinite',
				'float-fast': 'float 2s ease-in-out infinite',
			},
		},
	},
	darkMode: 'class',
	plugins: [heroui(), require('tailwindcss-animated')],
};
