```javascript
//The solution might involve updating PurgeCSS, adjusting the content array, or using a different purging strategy. 
//Example of adjusting the content array: add globs
// in tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```