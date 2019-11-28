navigator.serviceWorker.register('/JS/sw.js')



const CACHE ='JSOsman'
const FILES = ['JSOsman/Counter.html','/JSOsman//CelciusFahrenheitCalculator.html', '/JSOsman/Counting.html', 
'/JSOsman/HW3.png', '/JSOsman/CW4.html', '/JSOsman/CW6.html'
,'/JSOsman/CW7.html']

function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)



function cacheCB(e) { //cache first
    let req = e.request
    e.respondWith(
      caches.match(req)
      .then(r1 => r1 || fetch(req))
      .catch(console.log)
    )
  }
  self.addEventListener('fetch', cacheCB)

  

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
    e.respondWith(
      fetch(req).then(r2 => save(req, r2))
      .catch(() => { return caches.match(req).then(r1 => r1) })
    )
  }
  self.addEventListener('fetch', fetchCB)
  