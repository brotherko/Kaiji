const rewireMobX = require('react-app-rewire-mobx');
const rewireSass = require('react-app-rewire-scss');
/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  config = rewireSass(config, env);
  return config;
}