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
      console.log('Intentando cachear archivos...');
      // Usamos map para intentar cargar uno a uno y que si uno falla no rompa todo
      return Promise.allSettled(
        assets.map(url => cache.add(url))
      ).then(() => console.log('Proceso de cache finalizado (con o sin errores individuales)'));
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