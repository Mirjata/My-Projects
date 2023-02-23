const localConfig = {
  env: 'local',
};

const devConfig = {
  env: 'development',
};

const stagingConfig = {
  env: 'staging',
};

const productionConfig = {
  env: 'production',
};

module.exports = {
  local: localConfig,
  development: devConfig,
  staging: stagingConfig,
  production: productionConfig,
};
