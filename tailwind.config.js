const range = {
	'1/10': '10%',
	'2/10': '20%',
	'3/10': '30%',
	'4/10': '40%',
	'5/10': '50%',
	'6/10': '60%',
	'7/10': '70%',
	'8/10': '80%',
	'9/10': '90%',
	'10/10': '100%',
}
module.exports = {
	mode: 'jit',
	purge: [
		'./public/index.html',
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	darkMode: false,
	theme: {
		extend: {
			minWidth: range,
			maxWidth: range,
			width: range,

				screens: {
					'xs': {max:'474px'},
					'sm': '640px',
					// => @media (min-width: 640px) { ... }
			  
					'md': '768px',
					// => @media (min-width: 768px) { ... }
			  
					'lg': '1024px',
					// => @media (min-width: 1024px) { ... }
			  
					'xl': '1280px',
					// => @media (min-width: 1280px) { ... }
			  
					'2xl': '1536px'	
					// => @media (min-width: 1536px) { ... }
				  }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
