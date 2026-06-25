/// <reference types="vite/client" />

// Swiper expone sus estilos como imports de CSS sin tipos; los declaramos para tsc
declare module "swiper/css";
declare module "swiper/css/*";
