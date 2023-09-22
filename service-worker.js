self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("libreng-sakay-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        /* Add other files you want to cache here */
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
