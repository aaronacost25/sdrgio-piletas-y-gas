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