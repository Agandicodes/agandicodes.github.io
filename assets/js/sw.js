const CACHE_NAME = "agandicodes-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/vendor/bootstrap/css/bootstrap.min.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
