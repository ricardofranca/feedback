this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/assets/',
        '/assets/css/main.css',
        '/assets/js/localstoragedb.min.js',
        '/assets/js/bundle.js',
        '/assets/images/smile.ico',
        '/assets/images/smile16.png',
        '/assets/images/smile24.png',
        '/assets/images/smile32.png',
        '/assets/images/smile64.png',
        '/assets/images/smile128.png',
        '/assets/images/smile256.png'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  var response;
  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(r) {
    debugger;
    response = r;
    caches.open('v1').then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }).catch(function() {
    return caches.match('/assets/images/smile.ico');
  }));
});