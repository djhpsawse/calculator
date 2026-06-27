const CACHE_NAME = "money-pot-cache-v2";

const assetsToCache = [
  "./",
  "index.html",
  "manifest.json",
  "img/gbp.jpg",
  "img/eur.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
