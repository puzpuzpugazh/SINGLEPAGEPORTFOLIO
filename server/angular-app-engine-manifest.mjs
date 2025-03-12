
export default {
  basePath: '/SINGLEPAGEPORTFOLIO',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
