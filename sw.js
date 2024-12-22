self.addEventListener("install", (e) => {
    e.waitUntil(
      caches.open("tic-tac-toe").then((cache) => {
        return cache.addAll([
          "./",
          "./index.html",
          "./css/styles.css",
          "./js/script.js",
          "./manifest.json",
          "./assets/icons/logo.png",
          "./assets/icons/logo.png"
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
  });
  