module.exports = {
    content: [
      "./src/**/*.{html,js,svelte}", // Adjust the paths according to your project structure
    ],
    theme: {
      extend: {
       
      },
    },
    plugins: [
        require('daisyui'), // Include DaisyUI as a plugin
      ],
  };