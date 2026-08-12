const CACHE_NAME = 'razavox-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './audtovidlogo.jpg',
  'https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

