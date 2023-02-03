const STATIC_CACHE ="static";
const APPS_SHELL =[

"/",
"index - copia.html",
"styles/style.css",
"js/main.js",
"img/4.jpg",

];

 self.addEventListener("install", (e) =>{
    const cacheStatic = caches 
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APPS_SHELL));

    e.waitUntill(cacheStatic);
 }
 
 );