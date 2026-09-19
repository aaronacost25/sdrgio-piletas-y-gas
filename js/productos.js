// ============================================================
// 💡 ARCHIVO DE DATOS - EDITALO PARA AGREGAR / CAMBIAR ARTICULOS
// ============================================================
// Cada articulo necesita:
//   nombre    : como se muestra en el catalogo
//   categoria : "productos"  o  "servicios"
//   descripcion : texto breve que explica el producto/servicio
//   etiqueta  : etiqueta opcional que aparece arriba de la tarjeta
//               (ej: "Mas pedido", "Nuevo") - dejalo vacio "" si no queres
//   imagen    : ruta de la imagen (subila a la carpeta /img)
//               PODES DEJAR "" para usar la imagen generica
// ============================================================
// 👉 LAS FOTOS DEL CLIENTE se guardan en la carpeta /img con los
//    nombres que figuran abajo en "imagen" (garrafa-10.jpg, etc.)
// ============================================================

const PRODUCTOS = [
  // ---------- PRODUCTOS (GAS EN GARRAFA) ----------
  // Solo venden garrafas ya cargadas (sin servicio de recarga)
  {
    nombre: "Garrafa de gas 10 kg",
    categoria: "productos",
    descripcion: "Garrafa cargada de 10 kg de gas licuado, ideal para cocina y uso hogareño.",
    etiqueta: "",
    imagen: "img/garrafa-10.jpg"
  },
  {
    nombre: "Garrafa de gas 15 kg",
    categoria: "productos",
    descripcion: "Garrafa cargada de 15 kg, la opcion mas utilizada para uso residencial.",
    etiqueta: "",
    imagen: "img/garrafa-15.jpg"
  },
  {
    nombre: "Garrafa de gas 45 kg",
    categoria: "productos",
    descripcion: "Garrafa cargada de 45 kg para comercios, restaurantes y grandes consumos.",
    etiqueta: "",
    imagen: "img/garrafa-45.jpg"
  },
  {
    nombre: "Accesorios y repuestos",
    categoria: "productos",
    descripcion: "Picos, mangueras, reguladores y abrazaderas para tu instalacion de gas.",
    etiqueta: "",
    imagen: ""
  },

  // ---------- PRODUCTOS PARA MANTENIMIENTO DE PILETAS ----------
  {
    nombre: "Cloro granulado / tabletas",
    categoria: "productos",
    descripcion: "Desinfectante esencial para mantener el agua libre de bacterias y algas.",
    etiqueta: "",
    imagen: "img/pileta-mto-4.jpg"
  },
  {
    nombre: "Alguicida",
    categoria: "productos",
    descripcion: "Previene y elimina algas verdes, negras y mostaza en la pileta.",
    etiqueta: "",
    imagen: "img/pileta-mto-3.jpg"
  },
  {
    nombre: "Clarificador / Floculante",
    categoria: "productos",
    descripcion: "Agrupa partículas finas para que el filtro las retenga y el agua quede cristalina.",
    etiqueta: "",
    imagen: "img/pileta-mto-2.jpg"
  },
  {
    nombre: "Elevador y reductora de pH",
    categoria: "productos",
    descripcion: "Para ajustar el pH entre 7.2 y 7.6 y que el cloro actúe correctamente.",
    etiqueta: "",
    imagen: "img/pileta-mto-1.jpg"
  },
  {
    nombre: "Kit de test (tiras / gotero)",
    categoria: "productos",
    descripcion: "Medí cloro, pH y alcalinidad en minutos. Fácil de usar.",
    etiqueta: "",
    imagen: ""
  },
  {
    nombre: "Boyas dosificadoras",
    categoria: "productos",
    descripcion: "Liberan cloro de forma gradual. Ideales para piletas sin dosificador automático.",
    etiqueta: "",
    imagen: ""
  },
  {
    nombre: "Cepillos, barrefondos y redes",
    categoria: "productos",
    descripcion: "Accesorios de limpieza manual: cepillo de paredes, barrefondo y red recogehojas.",
    etiqueta: "",
    imagen: ""
  },
  {
    nombre: "Equipos de filtrado y bombas",
    categoria: "productos",
    descripcion: "Filtros de arena, cartucho y bombas centrifugas. Entrega e instalación disponible.",
    etiqueta: "",
    imagen: ""
  },

  // ---------- SERVICIOS (MANTENIMIENTO DE PILETAS) ----------
  {
    nombre: "Mantenimiento general de pileta",
    categoria: "servicios",
    descripcion: "Limpieza, aspirado y balance del agua para que tu pileta este siempre lista para usar.",
    etiqueta: "",
    imagen: "img/pileta-mto-1.jpg"
  },
  {
    nombre: "Puesta en marcha de temporada",
    categoria: "servicios",
    descripcion: "Preparamos tu pileta para el verano: filtrado, cloro y equilibrio quimico completo.",
    etiqueta: "",
    imagen: "img/pileta-mto-2.jpg"
  },
  {
    nombre: "Reparacion de filtros y bombas",
    categoria: "servicios",
    descripcion: "Diagnostico y reparacion de equipos de filtrado, bombas y luminarias de pileta.",
    etiqueta: "",
    imagen: "img/pileta-mto-3.jpg"
  },
  {
    nombre: "Analisis y tratamiento de agua",
    categoria: "servicios",
    descripcion: "Control de pH, cloro y parametros del agua con tratamiento personalizado.",
    etiqueta: "",
    imagen: "img/pileta-mto-4.jpg"
  },
  {
    nombre: "Pintura de piletas",
    categoria: "servicios",
    descripcion: "Reparacion de revoque y pintura especial para piletas. Renovamos tu pileta con materiales de calidad.",
    etiqueta: "",
    imagen: "img/pileta-mto-4.jpg"
  },
  {
    nombre: "Reparacion e instalacion de gas",
    categoria: "servicios",
    descripcion: "Instalacion y reparacion de conexiones de garrafa con certificado y garantia.",
    etiqueta: "",
    imagen: "img/garrafa-10.jpg"
  }
];