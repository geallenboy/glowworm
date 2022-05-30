const path = require('path');
module.exports = {
  webpack: {
    extensions: ['.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
