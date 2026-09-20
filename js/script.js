// ═══════════════════════════════════════════
// 🖥️ LÓGICA DEL SITIO - no hace falta editarlo
// ═══════════════════════════════════════════

// ── Menú mobile (hamburguesa) ──
const btnMenu = document.getElementById("btn-menu");
const menuMovil = document.getElementById("menu-movil");

if (btnMenu && menuMovil) {
  btnMenu.addEventListener("click", () => {
    const abierto = menuMovil.classList.toggle("header__nav--abierto");
    btnMenu.classList.toggle("header__burger--abierto", abierto);
    btnMenu.setAttribute("aria-expanded", String(abierto));
  });

  menuMovil.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menuMovil.classList.remove("header__nav--abierto");
      btnMenu.classList.remove("header__burger--abierto");
      btnMenu.setAttribute("aria-expanded", "false");
    });
  });
}

// ── Nombre del negocio (se define en index.html) ──
const marca = document.querySelector(".brand");
const nombreNegocio = marca ? marca.dataset.nombre : "Sergio Piletas y Gas";
document.getElementById("logo-texto").textContent = nombreNegocio;

// ── Catálogo ──
const contenedor = document.getElementById("catalogo");
const mensajeVacio = document.getElementById("vacio");
const botonesFiltro = document.querySelectorAll(".filtro");

const NOMBRE_GRUPO = {
  productos: "Gas en garrafa",
  pileta: "Mantenimiento de piletas",
};

// Mismo numero que usa el resto del sitio (header, hero, flotante)
const NUMERO_WSP = "543541610122";

const ICONO_WSP = `<svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.08-1.33A10 10 0 1 0 12 2zm0 18.3c-1.55 0-3.06-.42-4.38-1.22l-.31-.18-3.02.8.8-2.94-.2-.31a8.33 8.33 0 1 1 7.11 3.85z"/></svg>`;

// Si el articulo no trae "mensaje" propio en productos.js, se arma uno generico
function linkWhatsapp(articulo) {
  const texto =
    articulo.mensaje ||
    `Hola! Quería consultar por: ${articulo.nombre}`;
  return `https://wa.me/${NUMERO_WSP}?text=${encodeURIComponent(texto)}`;
}

function imagenGeneral(articulo) {
  return articulo.categoria === "productos"
    ? "img/producto-generico.svg"
    : "img/servicio-generico.svg";
}

function tarjetaHTML(a) {
  const img = a.imagen || imagenGeneral(a);
  const etiqueta = a.etiqueta
    ? `<span class="tarjeta__etiqueta">${a.etiqueta}</span>`
    : "";
  return `
    <article class="tarjeta" data-categoria="${a.categoria}">
      ${etiqueta}
      <img class="tarjeta__img" src="${img}" alt="${a.nombre}">
      <div class="tarjeta__cuerpo">
        <h3 class="tarjeta__titulo">${a.nombre}</h3>
        <p class="tarjeta__descripcion">${a.descripcion}</p>
        <a class="tarjeta__cta" href="${linkWhatsapp(a)}" target="_blank" rel="noopener">
          ${ICONO_WSP} Consultar
        </a>
      </div>
    </article>`;
}

function grupoHTML(categoria, articulos) {
  if (!articulos.length) return "";
  return `
    <h3 class="catalogo__grupo-titulo catalogo__grupo-titulo--${categoria}">
      ${NOMBRE_GRUPO[categoria]}
    </h3>
    ${articulos.map(tarjetaHTML).join("")}`;
}

function renderizar(filtro) {
  const articulos = PRODUCTOS.filter(
    (a) => filtro === "todos" || a.categoria === filtro
  );

  if (filtro === "todos") {
    const productos = articulos.filter((a) => a.categoria === "productos");
    const pileta = articulos.filter((a) => a.categoria === "pileta");
    contenedor.innerHTML =
      grupoHTML("productos", productos) + grupoHTML("pileta", pileta);
  } else {
    contenedor.innerHTML = articulos.map(tarjetaHTML).join("");
  }

  mensajeVacio.style.display = articulos.length ? "none" : "block";
}

function activarFiltro(boton) {
  botonesFiltro.forEach((b) => b.classList.remove("filtro--activo"));
  boton.classList.add("filtro--activo");
}

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    activarFiltro(boton);
    renderizar(boton.dataset.filtro);
  });
});

renderizar("todos");

// ── FAQ: cerrar una pregunta al abrir otra ──
const itemsFaq = document.querySelectorAll(".faq__item");
itemsFaq.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      itemsFaq.forEach((otro) => {
        if (otro !== item) otro.open = false;
      });
    }
  });
});

// ── Año del pie de página ──
const anio = document.getElementById("footer-anio");
if (anio) anio.textContent = new Date().getFullYear();