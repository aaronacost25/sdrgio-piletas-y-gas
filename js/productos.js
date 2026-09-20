// ============================================================
// 💡 ARCHIVO DE DATOS - EDITALO PARA AGREGAR / CAMBIAR ARTICULOS
// ============================================================
// Cada articulo necesita:
//   nombre    : como se muestra en el catalogo
//   categoria : "productos"  o  "pileta"
//   descripcion : texto breve que explica el producto/servicio
//   etiqueta  : etiqueta opcional que aparece arriba de la tarjeta
//               (ej: "Mas pedido", "Nuevo") - dejalo vacio "" si no queres
//   imagen    : ruta de la imagen (subila a la carpeta /img)
//               PODES DEJAR "" para usar la imagen generica
//   mensaje   : (OPCIONAL) el texto que se manda por WhatsApp al tocar
//               "Consultar" en esa tarjeta. Si no lo cargas, se arma
//               uno automatico: "Hola! Queria consultar por: <nombre>"
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
    etiqueta: "Mas pedido",
    imagen: "img/garrafa-10.jpg",
    mensaje: "Hola! Quería consultar por una garrafa de gas de 10 kg."
  },
  {
    nombre: "Garrafa de gas 15 kg",
    categoria: "productos",
    descripcion: "Garrafa cargada de 15 kg, la opcion mas utilizada para uso residencial.",
    etiqueta: "",
    imagen: "img/garrafa-15.jpg",
    mensaje: "Hola! Quería consultar por una garrafa de gas de 15 kg."
  },
  {
    nombre: "Garrafa de gas 45 kg",
    categoria: "productos",
    descripcion: "Garrafa cargada de 45 kg para comercios, restaurantes y grandes consumos.",
    etiqueta: "",
    imagen: "img/garrafa-45.jpg",
    mensaje: "Hola! Quería consultar por una garrafa de gas de 45 kg."
  },
  {
    nombre: "Accesorios y repuestos",
    categoria: "productos",
    descripcion: "Picos, mangueras, reguladores y abrazaderas para tu instalacion de gas.",
    etiqueta: "Nuevo",
    imagen: "",
    mensaje: "Hola! Quería consultar por accesorios y repuestos de gas."
  },

  // ---------- SERVICIOS (MANTENIMIENTO DE PILETAS) ----------
  {
    nombre: "Mantenimiento general de pileta",
    categoria: "pileta",
    descripcion: "Limpieza, aspirado y balance del agua para que tu pileta este siempre lista para usar.",
    etiqueta: "",
    imagen: "img/pileta-mto-1.jpg",
    mensaje: "Hola! Quería consultar por el mantenimiento general de mi pileta."
  },
  {
    nombre: "Puesta en marcha de temporada",
    categoria: "pileta",
    descripcion: "Preparamos tu pileta para el verano: filtrado, cloro y equilibrio quimico completo.",
    etiqueta: "Mas pedido",
    imagen: "img/pileta-mto-2.jpg",
    mensaje: "Hola! Quería consultar por la puesta en marcha de mi pileta para esta temporada."
  },
  {
    nombre: "Reparacion de filtros y bombas",
    categoria: "pileta",
    descripcion: "Diagnostico y reparacion de equipos de filtrado, bombas y luminarias de pileta.",
    etiqueta: "",
    imagen: "img/pileta-mto-3.jpg",
    mensaje: "Hola! Quería consultar por la reparación de filtros/bombas de mi pileta."
  },
  {
    nombre: "Analisis y tratamiento de agua",
    categoria: "pileta",
    descripcion: "Control de pH, cloro y parametros del agua con tratamiento personalizado.",
    etiqueta: "",
    imagen: "img/pileta-mto-4.jpg",
    mensaje: "Hola! Quería consultar por un análisis y tratamiento del agua de mi pileta."
  },
  {
    nombre: "Pintura de piletas",
    categoria: "pileta",
    descripcion: "Reparacion de revoque y pintura especial para piletas. Renovamos tu pileta con materiales de calidad.",
    etiqueta: "",
    imagen: "img/pileta-mto-4.jpg",
    mensaje: "Hola! Quería consultar por la pintura de mi pileta."
  },
  {
    nombre: "Reparacion e instalacion de gas",
    categoria: "pileta",
    descripcion: "Instalacion y reparacion de conexiones de garrafa con certificado y garantia.",
    etiqueta: "",
    imagen: "img/garrafa-10.jpg",
    mensaje: "Hola! Quería consultar por reparación/instalación de gas."
  }
];