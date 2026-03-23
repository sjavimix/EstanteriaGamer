const CACHE_NAME = 'gamershelf-v1.1'; // He subido la versión para forzar la actualización
const assets = [
  './', // Este ya cuenta como index.html, no hace falta ponerlo de nuevo
  './imagenes/ps1.png',
  './imagenes/ps2.png',
  './imagenes/ps3.png',
  './imagenes/ps4.png',
  './imagenes/ps5.png',
  './imagenes/xbox_clasica.png',
  './imagenes/xbox_360.png',
  './imagenes/xbox_one_series.png',
  './imagenes/gamecube.png',
  './imagenes/n_switch.png',
  './imagenes/titulo.png',
  './imagenes/skin1.png',
  './imagenes/escudo.png', // Añadidos los que faltaban según tu código
  './imagenes/pocion.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache abierto y limpiando duplicados...');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});