import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bw9OtOKD.mjs';
import { manifest } from './manifest_DTardS7c.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CoaBOzyd.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_CmtVgcJn.mjs')],
]);;

const _page0 = () => import('./pages/libro/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/libro/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2e2ee069-e9e3-45e5-baa1-b9aee89744ce",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };