(self.__BUILD_MANIFEST = (function (e, r, s) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    __routerFilterStatic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: 0,
      numHashes: null,
      bitArray: [],
    },
    __routerFilterDynamic: {
      numItems: e,
      errorRate: 1e-4,
      numBits: e,
      numHashes: null,
      bitArray: [],
    },
    '/': [
      'static/chunks/5001-e5cbd64a2f73809f.js',
      'static/chunks/pages/index-4ccca252a4468932.js',
    ],
    '/_error': ['static/chunks/pages/_error-37539812ac3b83ec.js'],
    sortedPages: ['/', '/_app', '/_error'],
  };
})(0, 1e-4, null)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
