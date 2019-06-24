importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/37e4c81cf54fceaca72e.js",
    "revision": "c8df695172d6650e3ab2574786bdb614"
  },
  {
    "url": "/_nuxt/3b135b58e60d800749f3.js",
    "revision": "62b4922f92bb139dc074fcc72b06b1d5"
  },
  {
    "url": "/_nuxt/3db64cd2327dbb3824ac.js",
    "revision": "97c84dda574ad4573cd0756c46979154"
  },
  {
    "url": "/_nuxt/8b16485c5210a0e91a9b.js",
    "revision": "0adc914b5b91049a9d5280e02ee7ff75"
  },
  {
    "url": "/_nuxt/afe56f7fc42be7022d78.js",
    "revision": "cbface53a60fa65d5f0e642157390171"
  },
  {
    "url": "/_nuxt/f6d29456d3677002243b.js",
    "revision": "c55a498ea290b53a82db6f6daf12750d"
  }
], {
  "cacheId": "media",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
