const reactLint = require('@garron/standard/dist/reactLint');

//react/no-children-prop
reactLint.rules['react/no-children-prop'] = 'off';
reactLint.rules['react/display-name'] = 'off';
// reactLint.rules['react/display-name'] = 'off';
module.exports = {
  ...reactLint
};
