
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SINGLEPAGEPORTFOLIO/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SINGLEPAGEPORTFOLIO"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 523, hash: '69e050e412a691c1de5db74994c546efc00a67cf74e486d04b585a6a2a5655c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: 'c37773e7c2c487384022625a762e4de49a94dffda97dbc9e58709373c6bea242', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9308, hash: 'c45d2ecf072cc27c0e379bdac5db0a25f2ad52aa238d6ac85115262e0e5fe02d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
