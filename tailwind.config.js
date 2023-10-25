/** @type {import('tailwindcss').Config} */

const { url } = require('inspector')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{tsx,ts,js,jsx}'],
}
