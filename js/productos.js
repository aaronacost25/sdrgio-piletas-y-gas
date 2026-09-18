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
// 👉 FOTOS TEMPORALES (banco de imágenes). El cliente las
//    reemplaza por fotos reales: solo cambia la ruta en "imagen".
// ============================================================

const PRODUCTOS = [
  // ---------- PRODUCTOS (GAS EN GARRAFA) ----------
  {
    nombre: "Garrafa de gas 10 kg",
    categoria: "productos",
    descripcion: "Garrafa liviana de 10 kg de gas licuado, ideal para cocina y uso hogareño.",
    etiqueta: "Mas pedido",
    imagen: "img/foto-garrafa-1.jpg"
  },
  {
    nombre: "Garrafa de gas 15 kg",
    categoria: "productos",
    descripcion: "Garrafa estandar de 15 kg, la opcion mas utilizada para uso residencial.",
    etiqueta: "",
    imagen: "img/foto-garrafa-5.jpg"
  },
  {
    nombre: "Garrafa de gas 45 kg",
    categoria: "productos",
    descripcion: "Garrafa industrial de 45 kg para comercios, restaurantes y grandes consumos.",
    etiqueta: "",
    imagen: "img/foto-garrafa-2.jpg"
  },
  {
    nombre: "Venta y recarga de garrafas",
    categoria: "productos",
    descripcion: "Vendemos garrafas nuevas y realizamos recargas de garrafas de todas las medidas.",
    etiqueta: "",
    imagen: "img/foto-garrafa-4.jpg"
  },
  {
    nombre: "Accesorios y repuestos",
    categoria: "productos",
    descripcion: "Picos, mangueras, reguladores y abrazaderas para tu instalacion de gas.",
    etiqueta: "Nuevo",
    imagen: "img/foto-garrafa-3.jpg"
  },

  // ---------- SERVICIOS (MANTENIMIENTO DE PILETAS) ----------
  {
    nombre: "Mantenimiento general de pileta",
    categoria: "servicios",
    descripcion: "Limpeza, aspirado y balance del agua para que tu pileta este siempre lista para usar.",
    etiqueta: "",
    imagen: "img/foto-pileta-1.jpg"
  },
  {
    nombre: "Puesta en marcha de temporada",
    categoria: "servicios",
    descripcion: "Preparamos tu pileta para el verano: filtrado, cloro y equilibrio quimico completo.",
    etiqueta: "Mas pedido",
    imagen: "img/foto-pileta-2.jpg"
  },
  {
    nombre: "Reparacion de filtros y bombas",
    categoria: "servicios",
    descripcion: "Diagnostico y reparacion de equipos de filtrado, bombas y luminarias de pileta.",
    etiqueta: "",
    imagen: "img/foto-pileta-3.jpg"
  },
  {
    nombre: "Analisis y tratamiento de agua",
    categoria: "servicios",
    descripcion: "Control de pH, cloro y parametros del agua con tratamiento personalizado.",
    etiqueta: "",
    imagen: "img/foto-pileta-4.jpg"
  },
  {
    nombre: "Reparacion e instalacion de gas",
    categoria: "servicios",
    descripcion: "Instalacion y reparacion de conexiones de garrafa con certificado y garantia.",
    etiqueta: "",
    imagen: "img/foto-garrafa-1.jpg"
  }
];