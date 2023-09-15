/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'image-1': "url('./assets/images/Illus.svg')",
			},
		},
	},
	plugins: [],
};
