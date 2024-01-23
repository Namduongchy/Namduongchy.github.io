'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "a8ee58e0baf189ea639b99b69f83f638",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"version.json": "cfd9762f8e61dd74f8f7dc61a4348a8d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "3fc29f9294b755bca0378065b89e216e",
"index.html": "f26d7314685fcb13c00f816bf41fd2cf",
"/": "f26d7314685fcb13c00f816bf41fd2cf",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "86af6af1d2e03cfcff9623f0c45f4501",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "fad4b5600a78ba7d2991c1497cff1d89",
"assets/NOTICES": "8234ea4a33a00ddd241d2046bacc7f83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "e6284a383f23b1f56576982f2200169b",
"assets/AssetManifest.json": "ae16b8531699c75851a52360a729dac1",
"assets/assets/pineapple.jpg": "c6f0c5c3f959f6ed45e6f71a544adf2f",
"assets/assets/apple.jpg": "a239ab81eab581c549eed693de640d92",
"assets/assets/FoddFodd.jpeg": "0efe2f047afc990774003cdd2fc1ff62",
"assets/assets/1.png": "ad275c094a39f49cd0abb2d21fc4196a",
"assets/assets/Mangosteen.jpg": "f8c3afc473c3143dce916b1e4f57f846",
"assets/assets/south_korea.png": "02ed96f645c463627f9bdfe1943adbba",
"assets/assets/menu1.png": "0a9ebce79b1d0a45163755ffaa3b479d",
"assets/assets/uk.png": "e316c8551496904bf2da00f0b4178da3",
"assets/assets/menu.png": "f0f4d99d1a867f104e16565361f7d633",
"assets/assets/Pear.jpg": "005f22bede0eb65460364a2d676b6dab",
"assets/assets/vataa.jpeg": "bb5da612fbf29cced4c22f90f75c0297",
"assets/assets/Food.jpg": "a500dbe3db1ade4cd11b157f1584098d",
"assets/assets/banana.jpg": "f1e5ed4697eb7ba9594c1dc87415240b",
"assets/assets/day.png": "9f36c150e5b0297e20411999d5e27627",
"assets/assets/indonesia.png": "cb1239cc98b52f637175e17547c4c520",
"assets/assets/greece.png": "d8c44c47741e348927cec7e3d64a22ca",
"assets/assets/watermelon.jpg": "e94aded198347ce3cd7b3149b31cb541",
"assets/assets/Orange.jpg": "fd7815385e760ea4db29bf15fdefe43f",
"assets/assets/night.png": "f48bb8c2e3dc7a7544755506efb889b0",
"assets/assets/egypt.png": "a099e084c6fcccfa4032d58d17d63f27",
"assets/assets/board2.jpg": "65c2aff26b766f3ea02e207df66fe6e1",
"assets/assets/fodnamnam.jpg": "f579d1afda063545457e11d59b7dfd5e",
"assets/assets/mango.jpg": "bc224be7d49170863d8ef2745eb73ef7",
"assets/assets/germany.png": "d3b68fc65e16a603702c8324f6196a7f",
"assets/assets/kenya.png": "ec31c84f040e6a6a712081c3e38df4ac",
"assets/assets/board1board1.jpg": "1398b3aa3f2f63044759b5c720c324ed",
"assets/assets/cookook.png": "917aa68ef6a1608ff26a10c6f21613bb",
"assets/assets/2.png": "2311540577514a4a922a6874fbb1ba79",
"assets/assets/usa.png": "16ebcdfdfefbbecc4bada8f40f19f99f",
"assets/assets/cookccook.png": "cf5e29f37087b5d6ff79ecd6b8fdd3b9",
"assets/assets/iwewviwew.jpg": "9c5a2334f0f7a9786afbb2966ddbbddd",
"assets/assets/ava.jpg": "dfc4fee3305d330a31c9b46876d4ee38",
"assets/assets/iew.jpg": "f474887931f2a66f005f57ed82547556",
"assets/assets/FoodFood.jpg": "a3350ec3203431ae32fa64e1362ff698",
"assets/assets/TableFoodableFood.png": "f532a89f4db6472bd7ba754314173811",
"assets/assets/odder.png": "842ee84d58568a14f338bcbd025a6478"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
