const CACHE_NAME = 'better-you-v20';
const ASSETS = [
  './',
  './index.html',
  './css/global.css',
  './css/pages/home.css',
  './css/pages/dashboard.css',
  './css/pages/personal.css',
  './css/pages/habits.css',
  './css/pages/community.css',
  './css/pages/admin.css',
  './css/pages/more.css',
  './css/pages/profile.css',
  './css/pages/auth.css',
  './css/responsive.css',
  './js/data/community.js',
  './js/shared/state.js',
  './js/data/constants.js',
  './js/data/verses.js',
  './js/data/skills.js',
  './js/data/drives.js',
  './js/data/workouts.js',
  './js/shared/icons.js',
  './js/shared/utilities.js',
  './js/shared/ui.js',
  './js/shared/navigation.js',
  './js/shared/auth.js',
  './js/pages/skills.js',
  './js/pages/spiritual.js',
  './js/pages/habits.js',
  './js/pages/workouts.js',
  './js/pages/custom-exercises.js',
  './js/pages/personal.js',
  './js/pages/dashboard.js',
  './js/pages/community.js',
  './js/pages/admin.js',
  './js/pages/profile.js',
  './js/pages/boot.js',
  './supabase-config.js',
  './supabase-sync.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png'
];

// Install — cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// Fetch — cache-first, network fallback
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Let external requests (YouTube, Supabase later) go straight to network
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(cached =>
      cached || fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => caches.match('./index.html'))
    )
  );
});