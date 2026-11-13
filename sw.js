const CACHE_NAME = 'tat-control-v1';
const ARCHIVOS_CACHE = [
  '/family/',
  '/family/login.html',
  '/family/index.html',
  '/family/tema.css',
  '/family/comun.js',
  '/family/auth.js',
  '/family/buho.png',
  '/family/icono-192.png',
  '/family/icono-512.png',
  '/family/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARCHIVOS_CACHE).catch((err) => {
        console.log('Error al cachear:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('script.google.com')) return;
  
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        if (fetchResponse.status === 200 && event.request.url.includes('camiva737-commits.github.io')) {
          const responseClone = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return fetchResponse;
      });
    }).catch(() => {
      return caches.match('/family/index.html');
    })
  );
});