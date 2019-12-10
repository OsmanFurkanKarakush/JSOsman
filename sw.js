const CACHE ='JS_Class'
const FILES = ['/JOsman/Counter.html', '/JOsman/CelciusFahrenheitCalculator.html', '/JOsman/Counting.html', '/JOsman/HW3.png', '/JOsman/CW4.html','/JOsman/CW6.html','/JOsman/CW7.html','/JOsman/CW9.html', '/JOsman/CW8.html']

function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)

function save(req, resp) {
  return caches.open(CACHE)
  .then(cache => {
    cache.put(req, resp.clone());
    return resp;
  })
  .catch(console.log)
}
function fetchCB(e) { //fetch first
  let req = e.request
  console.log('JS_Class', req.url);
  e.respondWith(
    fetch(req).then(r2 => save(req, r2))
    .catch(() => { return caches.match(req).then(r1 => r1) })
  )
}
self.addEventListener('fetch', fetchCB)