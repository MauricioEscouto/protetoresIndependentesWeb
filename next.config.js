const { PHASE_PRODUCTION_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
      reactStrictMode: true,
      serverRuntimeConfig: {
      },
      publicRuntimeConfig: {
      },
    };
  }

  return {
    ...defaultConfig,
    reactStrictMode: true,
  };
};
