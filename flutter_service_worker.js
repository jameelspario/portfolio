'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "062d58a9b8f140562fed6036647807ab",
"assets/AssetManifest.bin.json": "8b25aba70c8f3687abf3d97739f712ba",
"assets/AssetManifest.json": "d62398c41625823dc41157cffa902c79",
"assets/assets/images/android.png": "7c9c21b339f5c13d53a7dd05b08adc77",
"assets/assets/images/android1.png": "2375eb2d107c02931aad0a577a615b0a",
"assets/assets/images/android2.png": "565ba819e6bd15415b8df0b1d62412f3",
"assets/assets/images/appstore.png": "a2770671edf79074662f0b46d555e4bf",
"assets/assets/images/dart.png": "9d3c9866010402554b552d1d7dddbd42",
"assets/assets/images/flutter.png": "e417bcfb1a718192ff6e2aa86799460a",
"assets/assets/images/github.png": "6f9cc8fca9f0051e711c42613d89d630",
"assets/assets/images/gitlab.png": "7c89f541f9d8c6239bce9f4b75589741",
"assets/assets/images/hrscreens/AIA001.png": "7d79043ccd8d8abb03b0ed1786c15b9b",
"assets/assets/images/hrscreens/HR01.jpeg": "1c8051c981f7451b6c742e88ace51ae3",
"assets/assets/images/hrscreens/HR02.jpeg": "e6fb0dd07ae6eb04e9071aee2b2062f8",
"assets/assets/images/hrscreens/HR03.jpeg": "4bb8aa232778d840507e95ab4c737546",
"assets/assets/images/hrscreens/HR04.jpeg": "e13ad30a8de6f9bbe179a3e8eccd3003",
"assets/assets/images/hrscreens/HR05.jpeg": "028a41a80207223b0c9d6c0d952c0b1d",
"assets/assets/images/hrscreens/HR06.jpeg": "a3368c637a68a6c4430b37534974575f",
"assets/assets/images/hrscreens/HR07.jpeg": "1a3c5b58252048218cce9adf5aab4ba8",
"assets/assets/images/hrscreens/HR08.jpeg": "2bbffef4d2c8b54c4f535ddf776f3221",
"assets/assets/images/hrscreens/HR09.jpeg": "94c143650275edbcd3cfd06c144a6f96",
"assets/assets/images/hrscreens/tc01.webp": "2ba76bc1baf3f93fd0d568a33d4a6689",
"assets/assets/images/hrscreens/tc02.webp": "46a118ff059801f230eb1248ece755cf",
"assets/assets/images/hrscreens/tc03.webp": "45f49264f4230ea25d623d6ef6efc979",
"assets/assets/images/hrscreens/tc04.webp": "c65428d0fa0384b3a0ac682ce9ea960c",
"assets/assets/images/hrscreens/tc05.webp": "9908fc19a3a6592ee2f6fd5baad9c436",
"assets/assets/images/hrscreens/tc06.webp": "41bae1e39b1109ff925c280a5a0ed0cd",
"assets/assets/images/hrscreens/tc07.webp": "8e639b95e7b26f81dface7b398c62211",
"assets/assets/images/hrscreens/tc08.webp": "eac7fa7d6dfce55dc25e68c77ba370db",
"assets/assets/images/hrscreens/tkt001.jpeg": "45ddab08b10f1e2f60504b929ff68586",
"assets/assets/images/icon-android-studio.png": "c65f6b93d595331ec362083c1760e6b2",
"assets/assets/images/icon-firebase.png": "4fa388a5508312f6fe76da2cf46c1351",
"assets/assets/images/icon-rest-api.png": "114da2330aa934a4260004fb3107cbb6",
"assets/assets/images/icon-sdk3.png": "e722b8942613c0188876100301e65cae",
"assets/assets/images/icon-vs-code.png": "b7869ab23ef9be0b1501b1a60c439f11",
"assets/assets/images/icon-webrtc.png": "ea93849e4543a33b5e5b357387cc5ec2",
"assets/assets/images/icon-websocket.png": "2ff2d8b1d654e688a442f8492d2bf4f7",
"assets/assets/images/ios.png": "19b05d9a97a36c54e89ad8567e773b8f",
"assets/assets/images/java-small.png": "220615ce77dbe4ed34c729bee3d55dfc",
"assets/assets/images/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/images/kotlin.png": "e0bf6a7fab2c25efd36e8d436556a2b7",
"assets/assets/images/location.png": "5e25b23e8a36e52ceae52ce219981bdf",
"assets/assets/images/playstore.png": "f9a9cc9e593d8e153b1fb6771ce890a4",
"assets/assets/images/resume.png": "31a79a4a7f896e7757a5e7b8fd9f41ee",
"assets/assets/images/sql.png": "9248d403f4914d9fae439a51365da8a9",
"assets/assets/svg/android.svg": "53507b2b9acfa23da1f3cdc317e9bc5f",
"assets/assets/svg/dart.svg": "20d7b82998ddc6f73a4310bf58e609df",
"assets/assets/svg/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/svg/git.svg": "631bfee78570c6e6931d654cc76b89c8",
"assets/assets/svg/github.svg": "4d56b3683c48ed7c70e76b81fb262a4a",
"assets/assets/svg/info.svg": "920ddb038c83eae9a44b3aec11c8306f",
"assets/assets/svg/internet.svg": "f71ae28c258d71ffd62aa3b8b7cfec48",
"assets/assets/svg/ios.svg": "4a0bb7b3e5ddc5d89d30b54cfdc414e6",
"assets/assets/svg/java.svg": "64f6e32092e90b8a7fb090d3d003ccb1",
"assets/assets/svg/kotlin.svg": "94e0a77ea6158d72c09683facdc057f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "117ff8a207ebcc65f5b2839842d165ee",
"assets/NOTICES": "c0bbe9f1a6ef4a0d70a142e385870194",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a09bd8a7434a0596fc81e2708987d718",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "70c057f42fbb8eb0833f611d059d622d",
"main.dart.mjs": "9bfc1e50db7e4ac9baafba2768498cca",
"main.dart.wasm": "da05758322b92dd6607865f3d1f369f5",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
