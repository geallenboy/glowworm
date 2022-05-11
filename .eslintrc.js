const reactLint = require('@garron/standard/dist/reactLint');

reactLint.rules['react/no-children-prop'] = 'off';
reactLint.rules['react/display-name'] = 'off';
reactLint.rules['react/no-unescaped-entities'] = 'off';
module.exports = {
  ...reactLint
};
