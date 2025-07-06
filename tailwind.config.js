/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Ya tienes estos, déjalos si los usas para algo más,
    // pero el App Router usa 'app' en lugar de 'pages'
    // "./pages/**/*.{js,ts,jsx,tsx}", // Si no usas Pages Router, puedes quitarlo
    "./components/**/*.{js,ts,jsx,tsx}",

    // AÑADE ESTAS LÍNEAS BASADO EN TU ESTRUCTURA:
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Esto es crucial para el App Router
    "./app/globals.css", // Asegúrate de que Tailwind reconozca las clases en tu CSS global

    // Si tu proyecto usa una carpeta 'src' en la raíz (tu captura no la muestra, pero es común):
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.css', // Asegúrate de incluir esta línea si tienes CSS personalizado que Tailwind deba procesar para clases personalizadas
    './globals.css', // Asegúrate de incluir esta línea también
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Añadir aquí si bg-size-[...] no funciona por defecto
      backgroundSize: {
        '200%_auto': '200% auto', // Define un tamaño personalizado para el background
      },
    },
  },
  plugins: [],
}