const CACHE = 'JS_Class'
const FILES = ['/JOsman/Counter.html', '/JOsman/CelciusFahrenheitCalculator.html', '/JOsman/Counting.html', '/JOsman/HW3.png', '/JOsman/CW4.html', '/JOsman/CW6.html', '/JOsman/CW7.html', '/JOsman/CW9.html', '/JOsman/CW8.html', '/JOsman/HomeWorks/Make_A_Table.html', '/JOsman/HomeWorks/Database.html', '/JOsman/HomeWorks/Database.js', '/JOsman/HomeWorks/Project/Object.html', '/JOsman/HomeWorks/Project/Scene.js', '/JOsman/HomeWorks/Project/style.css', '/JOsman/HomeWorks/Animation/kisspng-color-wheel-wikipedia-encyclopedia-wheel-of-fortune-5b0cd19a6f6435.0417165015275667464563.png', '/JOsman/HomeWorks/Animation/green-arrow-png-16646.png', '/JOsman/HomeWorks/Animation/style.css']

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