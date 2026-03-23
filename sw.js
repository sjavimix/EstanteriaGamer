const CACHE_NAME = 'gamershelf-v1';
const assets = [
  './',
  './index.html',
  './imagenes/ps1.png',
  './imagenes/ps2.png',
  './imagenes/ps3.png',
  './imagenes/ps4.png',
  './imagenes/ps5.png',
  './imagenes/xbox_clasica.png',
  './imagenes/xbox_360.png',
  './imagenes/xbox_one_series.png',
  './imagenes/gamecube.png',
  './imagenes/n_switch.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});