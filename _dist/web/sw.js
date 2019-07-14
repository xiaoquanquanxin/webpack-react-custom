const cacheName = "ydPWA-step-V1";
const filesToCache = [
    "app.cbd1d0d4.bundle.js",
    "app.css",
    'https://cdn.staticfile.org/mobx/5.9.4/mobx.umd.js',
    'https://cdn.staticfile.org/react-router-dom/5.0.0/react-router-dom.js',
    'https://cdn.staticfile.org/react/16.9.0-alpha.0/umd/react.development.js',

    'login.cbd1d0d4.bundle.js',
    'login.css',
    'img/timg.jpeg',
    '/login',

    // 'vendors~contentpage.cbd1d0d4.bundle.js',
    // 'contentpage.css',
    // 'contentpage.cbd1d0d4.bundle.js',
    '/contentPage',

    '/userBehavior',

    'favicon.ico',

    "/"
]
self.addEventListener("install", function (event) {
    console.log("安装成功");
    event.waitUntil(updateStaticCache());
});

function updateStaticCache() {
    return caches.open(cacheName)
        .then(function (cache) {
            return cache.addAll(filesToCache);
        }).then(() => self.skipWaiting());
}

self.addEventListener("activate", function (event) {
    console.log("激活成功")
    event.waitUntil(caches.keys().then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
            if (key !== cacheName) {
                return caches.delete(key);
            }
        }))
    }))
})
self.addEventListener("fetch", (event) => {
    // event.respondWith(new Response("123"))
    console.log(event.request)
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    )
})