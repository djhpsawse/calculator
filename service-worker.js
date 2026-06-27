const CACHE_NAME = "money-pot-cache-v1";

const assetsToCache = [
  "index.html",
  "manifest.json",
  "service-worker.js",

  // Background images
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bank_of_England_£20_note_2020_obverse.jpg/640px-Bank_of_England_£20_note_2020_obverse.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Euro_banknotes_2002.jpg/640px-Euro_banknotes_2002.jpg"
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
