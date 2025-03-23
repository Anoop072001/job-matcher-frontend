/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
          colors: {
            'grok-bg': '#1a1a1a',    // Main dark background
            'grok-text': '#e0e0e0',  // Light text
            'grok-box': '#1e1e1e',   // Code/response box background
            'grok-border': '#333',   // Subtle borders
            'grok-modal': '#212121', // Modal background
          },
          boxShadow: {
            'grok-glow': '0 0 8px rgba(255, 255, 255, 0.1)', // Subtle white glow
          },
        },
      },
    plugins: [],
  };