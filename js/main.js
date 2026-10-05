const places = [
  {
    id: "parque-santander",
    name: "Parque Santander",
    category: "historico",
    categoryLabel: "Histórico y cultural",
    location: "Centro · Cúcuta",
    description: "Plaza urbana del centro de Cúcuta, un punto para empezar un recorrido a pie por los espacios cívicos del sector.",
    image: "assets/images/parque-santander.jpg",
    imageAlt: "Vista del Parque Santander en Cúcuta",
    mapQuery: "Parque Santander, Cúcuta, Colombia"
  },
  {
    id: "catedral-san-jose",
    name: "Catedral de San José",
    category: "historico",
    categoryLabel: "Histórico y cultural",
    location: "Centro · Cúcuta",
    description: "Templo catedralicio de la ciudad, ubicado en el centro. Consulta en el mapa cómo llegar y confirma las condiciones de visita.",
    image: "assets/images/catedral-san-jose.jpg",
    imageAlt: "Fachada de la Catedral de San José de Cúcuta",
    mapQuery: "Catedral San José, Cúcuta, Colombia"
  },
  {
    id: "torre-reloj",
    name: "Torre del Reloj",
    category: "historico",
    categoryLabel: "Histórico y cultural",
    location: "Centro · Cúcuta",
    description: "Edificio emblemático del centro cucuteño. Su reloj y su arquitectura hacen de esta torre una referencia reconocible del recorrido urbano.",
    image: "assets/images/torre-reloj.jpg",
    imageAlt: "Torre del Reloj de Cúcuta",
    mapQuery: "Torre del Reloj, Cúcuta, Colombia"
  },
  {
    id: "quinta-teresa",
    name: "Quinta Teresa",
    category: "historico",
    categoryLabel: "Histórico y cultural",
    location: "Cúcuta",
    description: "Casa quinta de valor arquitectónico y patrimonial. Revisa la ubicación y la información de acceso antes de planear la visita.",
    image: "assets/images/quinta-teresa.jpg",
    imageAlt: "Casa Quinta Teresa en Cúcuta",
    mapQuery: "Quinta Teresa, Cúcuta, Colombia"
  },
  {
    id: "biblioteca-julio-perez-ferrero",
    name: "Biblioteca Pública Julio Pérez Ferrero",
    category: "historico",
    categoryLabel: "Cultural",
    location: "Cúcuta",
    description: "Espacio público de lectura y encuentro cultural. Consulta sus canales de información para conocer actividades y horarios vigentes.",
    image: "assets/images/biblioteca.jpg",
    imageAlt: "Edificio de la Biblioteca Pública Julio Pérez Ferrero",
    mapQuery: "Biblioteca Pública Julio Pérez Ferrero, Cúcuta, Colombia"
  },
  {
    id: "cristo-rey",
    name: "Cristo Rey",
    category: "naturaleza",
    categoryLabel: "Naturaleza y paisaje",
    location: "Cúcuta",
    description: "Punto elevado y referente visual de la ciudad. La subida y las condiciones de acceso pueden variar; verifica la ruta antes de salir.",
    image: "assets/images/cristo-rey.jpg",
    imageAlt: "Monumento de Cristo Rey en Cúcuta",
    mapQuery: "Cristo Rey, Cúcuta, Colombia"
  },
  {
    id: "malecon",
    name: "Malecón de Cúcuta",
    category: "naturaleza",
    categoryLabel: "Aire libre",
    location: "Cúcuta",
    description: "Espacio abierto para caminar y disfrutar al aire libre. Consulta el mapa para ubicar sus accesos y revisa las condiciones locales.",
    image: "assets/images/malecon.jpg",
    imageAlt: "Zona de parque en el Malecón de Cúcuta",
    mapQuery: "Malecón, Cúcuta, Colombia"
  },
  {
    id: "plaza-banderas",
    name: "Plaza de Banderas",
    category: "ocio",
    categoryLabel: "Ocio y recreación",
    location: "Cúcuta",
    description: "Espacio cívico abierto para hacer una pausa y recorrer el entorno urbano. Consulta su ubicación en el mapa antes de tu visita.",
    image: "assets/images/parque-santander.jpg",
    imageAlt: "Espacio público urbano en Cúcuta",
    mapQuery: "Plaza de Banderas, Cúcuta, Colombia"
  },
  {
    id: "ventura-plaza",
    name: "Ventura Plaza",
    category: "comercio",
    categoryLabel: "Comercio",
    location: "Cúcuta",
    description: "Centro comercial de la ciudad con una oferta de tiendas y servicios. Comprueba horarios, eventos y servicios directamente con el establecimiento.",
    image: "assets/images/ventura-plaza.jpg",
    imageAlt: "Fachada del centro comercial Ventura Plaza en Cúcuta",
    mapQuery: "Ventura Plaza, Cúcuta, Colombia"
  }
];

const categoryNames = {
  todos: "todos los lugares",
  historico: "lugares históricos y culturales",
  naturaleza: "lugares de naturaleza",
  ocio: "lugares de ocio y recreación",
  comercio: "lugares de comercio"
};

const grid = document.querySelector("#destination-grid");
const searchInput = document.querySelector("#destination-search");
const status = document.querySelector("#result-status");
const emptyState = document.querySelector("#empty-state");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const dialog = document.querySelector("#place-dialog");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
let selectedCategory = "todos";
let lastDialogTrigger = null;

function mapUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderPlace(place) {
  return `
    <article class="destination-card">
      <div class="card-image-wrap">
        <img class="card-image" src="${place.image}" alt="${place.imageAlt}" width="1000" height="640" loading="lazy">
        <span class="card-category">${place.categoryLabel}</span>
      </div>
      <div class="card-content">
        <p class="card-location">${place.location}</p>
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <div class="card-actions">
          <button class="card-details" type="button" data-place-id="${place.id}">Conocer lugar <span aria-hidden="true">→</span></button>
          <a class="card-map" href="${mapUrl(place.mapQuery)}" target="_blank" rel="noopener noreferrer">Mapa <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>`;
}

function updatePlaces() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  const visiblePlaces = places.filter((place) => {
    const matchesCategory = selectedCategory === "todos" || place.category === selectedCategory;
    const searchableText = `${place.name} ${place.categoryLabel} ${place.location}`.toLocaleLowerCase("es");
    return matchesCategory && searchableText.includes(query);
  });

  grid.innerHTML = visiblePlaces.map(renderPlace).join("");
  emptyState.hidden = visiblePlaces.length > 0;
  status.textContent = `${visiblePlaces.length} ${categoryNames[selectedCategory]}${query ? ` para “${searchInput.value.trim()}”` : ""}.`;

  grid.querySelectorAll(".card-image").forEach((image) => {
    image.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "image-fallback";
      fallback.textContent = "Imagen no disponible";
      fallback.setAttribute("role", "img");
      fallback.setAttribute("aria-label", "Imagen no disponible");
      image.replaceWith(fallback);
    }, { once: true });
  });
  grid.querySelectorAll("[data-place-id]").forEach((button) => {
    button.addEventListener("click", () => openPlaceDialog(button.dataset.placeId, button));
  });
}

function selectCategory(category) {
  selectedCategory = category;
  filterButtons.forEach((button) => {
    const selected = button.dataset.filter === category;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  updatePlaces();
}

function openPlaceDialog(id, trigger) {
  const place = places.find((candidate) => candidate.id === id);
  if (!place) return;

  lastDialogTrigger = trigger;
  document.querySelector("#dialog-image").src = place.image;
  document.querySelector("#dialog-image").alt = place.imageAlt;
  document.querySelector("#dialog-category").textContent = `${place.categoryLabel} · ${place.location}`;
  document.querySelector("#dialog-title").textContent = place.name;
  document.querySelector("#dialog-description").textContent = place.description;
  document.querySelector("#dialog-map-link").href = mapUrl(place.mapQuery);
  dialog.showModal();
  dialog.querySelector(".dialog-close").focus();
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("is-open");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => selectCategory(button.dataset.filter));
});
searchInput.addEventListener("input", updatePlaces);
document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => selectCategory(link.dataset.categoryLink));
});
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  primaryNav.classList.toggle("is-open", !expanded);
});
primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") closeMenu();
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});
dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => lastDialogTrigger?.focus());

const sectionLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        const active = link.hash === `#${entry.target.id}`;
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
        link.classList.toggle("is-active", active);
      });
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#place-total").textContent = places.length;
document.querySelectorAll("[data-count]").forEach((count) => {
  const category = count.dataset.count;
  count.textContent = category === "todos" ? places.length : places.filter((place) => place.category === category).length;
});
updatePlaces();
