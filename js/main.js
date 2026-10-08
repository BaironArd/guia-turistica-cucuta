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
    id: "parque-colon",
    name: "Parque Colón (Parque La Victoria)",
    category: "historico",
    categoryLabel: "Histórico y cultural",
    location: "Barrio La Playa · Cúcuta",
    description: "Espacio público también conocido como Parque La Victoria, contiguo a la Biblioteca Pública Julio Pérez Ferrero. Consulta su ubicación antes de iniciar el recorrido.",
    image: "assets/images/parque-colon.jpg",
    imageAlt: "Parque Colón, también llamado Parque La Victoria, en Cúcuta",
    mapQuery: "Parque Colón Parque La Victoria, Cúcuta, Colombia"
  },
  {
    id: "parque-juana-rangel",
    name: "Parque Juana Rangel de Cuéllar",
    category: "historico",
    categoryLabel: "Histórico y cultural",
    location: "Cúcuta",
    description: "Espacio público identificado con el nombre de Juana Rangel de Cuéllar. Consulta el mapa para verificar su ubicación y las condiciones de visita.",
    image: "assets/images/parque-juana-rangel.jpg",
    imageAlt: "Parque Juana Rangel de Cuéllar en Cúcuta",
    mapQuery: "Parque Juana Rangel de Cuéllar, Cúcuta, Colombia"
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
    id: "parque-mercedes-abrego",
    name: "Parque Mercedes Ábrego",
    category: "naturaleza",
    categoryLabel: "Parque urbano",
    location: "Cúcuta",
    description: "Parque urbano de Cúcuta. Consulta su ubicación y las condiciones actuales del espacio antes de visitarlo.",
    image: "assets/images/parque-mercedes-abrego.jpg",
    imageAlt: "Parque Mercedes Ábrego en Cúcuta",
    mapQuery: "Parque Mercedes Ábrego, Cúcuta, Colombia"
  },
  {
    id: "parque-nacional",
    name: "Parque Nacional",
    category: "naturaleza",
    categoryLabel: "Parque urbano",
    location: "Cúcuta",
    description: "Espacio público al aire libre en Cúcuta. Verifica en el mapa el punto de acceso correspondiente al parque.",
    image: "assets/images/parque-nacional.jpg",
    imageAlt: "Parque Nacional en Cúcuta",
    mapQuery: "Parque Nacional, Cúcuta, Colombia"
  },
  {
    id: "parque-los-pinos",
    name: "Parque Los Pinos",
    category: "naturaleza",
    categoryLabel: "Parque urbano",
    location: "Cúcuta",
    description: "Parque urbano identificado en la ciudad. Consulta el mapa para confirmar su ubicación antes de desplazarte.",
    image: "assets/images/parque-los-pinos.jpg",
    imageAlt: "Parque Los Pinos en Cúcuta",
    mapQuery: "Parque Los Pinos, Cúcuta, Colombia"
  },
  {
    id: "parque-barrio-popular",
    name: "Parque Barrio Popular",
    category: "naturaleza",
    categoryLabel: "Parque urbano",
    location: "Barrio Popular · Cúcuta",
    description: "Espacio público de barrio en Cúcuta. Consulta su ubicación y las condiciones del sector antes de visitarlo.",
    image: "assets/images/parque-barrio-popular.jpg",
    imageAlt: "Parque del barrio Popular en Cúcuta",
    mapQuery: "Parque Barrio Popular, Cúcuta, Colombia"
  },
  {
    id: "parque-bavaria",
    name: "Parque Bavaria",
    category: "naturaleza",
    categoryLabel: "Parque urbano",
    location: "Cúcuta",
    description: "Parque urbano identificado en Cúcuta. Revisa el mapa para ubicar el acceso y planear la visita.",
    image: "assets/images/parque-bavaria.jpg",
    imageAlt: "Parque Bavaria en Cúcuta",
    mapQuery: "Parque Bavaria, Cúcuta, Colombia"
  },
  {
    id: "parque-san-luis",
    name: "Parque principal de San Luis",
    category: "naturaleza",
    categoryLabel: "Parque urbano",
    location: "San Luis · Cúcuta",
    description: "Parque del sector de San Luis en Cúcuta. Consulta el mapa para confirmar la ubicación exacta.",
    image: "assets/images/parque-san-luis.jpg",
    imageAlt: "Parque principal del sector San Luis en Cúcuta",
    mapQuery: "Parque principal San Luis, Cúcuta, Colombia"
  },
  {
    id: "plaza-banderas",
    name: "Plaza de Banderas",
    category: "ocio",
    categoryLabel: "Ocio y recreación",
    location: "Cúcuta",
    description: "Espacio cívico abierto para hacer una pausa y recorrer el entorno urbano. Consulta su ubicación en el mapa antes de tu visita.",
    image: null,
    imageAlt: "",
    mapQuery: "Plaza de Banderas, Cúcuta, Colombia"
  },
  {
    id: "parque-del-agua",
    name: "Parque del Agua",
    category: "ocio",
    categoryLabel: "Ocio y recreación",
    location: "Cúcuta",
    description: "Espacio recreativo de la ciudad. Confirma con el operador o en fuentes locales si está abierto y consulta las condiciones de acceso.",
    image: "assets/images/parque-del-agua.jpg",
    imageAlt: "Parque del Agua en Cúcuta iluminado de noche",
    mapQuery: "Parque del Agua, Cúcuta, Colombia"
  },
  {
    id: "glorieta-indio-motilon",
    name: "Glorieta del Indio Motilón",
    category: "ocio",
    categoryLabel: "Espacio urbano",
    location: "Cúcuta",
    description: "Referente urbano identificado como Glorieta del Indio Motilón. Consulta el mapa para localizarla y planear el recorrido.",
    image: "assets/images/glorieta-indio-motilon.jpg",
    imageAlt: "Parque y glorieta del Indio Motilón en Cúcuta",
    mapQuery: "Glorieta Indio Motilón, Cúcuta, Colombia"
  },
  {
    id: "estadio-general-santander",
    name: "Estadio General Santander",
    category: "ocio",
    categoryLabel: "Deportivo y recreativo",
    location: "Cúcuta",
    description: "Escenario deportivo de Cúcuta. La realización de eventos, el ingreso y los horarios dependen de la programación vigente.",
    image: "assets/images/estadio-general-santander.jpg",
    imageAlt: "Estadio General Santander en Cúcuta",
    mapQuery: "Estadio General Santander, Cúcuta, Colombia"
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

const singularCategoryNames = {
  todos: "lugar",
  historico: "lugar histórico y cultural",
  naturaleza: "lugar de naturaleza",
  ocio: "lugar de ocio y recreación",
  comercio: "lugar de comercio"
};

const grid = document.querySelector("#destination-grid");
const searchInput = document.querySelector("#destination-search");
const status = document.querySelector("#result-status");
const emptyState = document.querySelector("#empty-state");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const dialog = document.querySelector("#place-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogImageFallback = document.querySelector("#dialog-image-fallback");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
let selectedCategory = "todos";
let lastDialogTrigger = null;
let failedDialogImage = null;

function mapUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function normalizeText(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

function renderPlace(place) {
  const imageMarkup = place.image
    ? `<img class="card-image" src="${place.image}" alt="${place.imageAlt}" width="1000" height="640" loading="lazy">`
    : `<div class="image-fallback" role="img" aria-label="Fotografía de ${place.name} no disponible en esta versión">Fotografía no disponible en esta versión</div>`;

  return `
    <article class="destination-card">
      <div class="card-image-wrap">
        ${imageMarkup}
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
  const query = normalizeText(searchInput.value.trim());
  const visiblePlaces = places.filter((place) => {
    const matchesCategory = selectedCategory === "todos" || place.category === selectedCategory;
    const searchableText = normalizeText(`${place.name} ${place.categoryLabel} ${place.location}`);
    return matchesCategory && searchableText.includes(query);
  });

  grid.innerHTML = visiblePlaces.map(renderPlace).join("");
  emptyState.hidden = visiblePlaces.length > 0;
  const resultCategory = visiblePlaces.length === 1 ? singularCategoryNames[selectedCategory] : categoryNames[selectedCategory];
  status.textContent = `${visiblePlaces.length} ${resultCategory}${query ? ` para “${searchInput.value.trim()}”` : ""}.`;

  grid.querySelectorAll(".card-image").forEach((image) => {
    image.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "image-fallback";
      fallback.textContent = "Fotografía no disponible";
      fallback.setAttribute("role", "img");
      fallback.setAttribute("aria-label", `Fotografía de ${image.alt} no disponible`);
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
  const showDialogImage = place.image && failedDialogImage !== place.image;
  dialogImage.hidden = !showDialogImage;
  dialogImageFallback.hidden = Boolean(showDialogImage);
  dialogImage.onerror = showDialogImage
    ? () => {
        failedDialogImage = place.image;
        if (dialogImage.getAttribute("src") === place.image) {
          dialogImage.hidden = true;
          dialogImageFallback.hidden = false;
        }
      }
    : null;
  if (showDialogImage) {
    dialogImage.alt = place.imageAlt;
    dialogImage.src = place.image;
  } else {
    dialogImage.removeAttribute("src");
    dialogImage.alt = "";
  }
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
  link.addEventListener("click", () => {
    searchInput.value = "";
    selectCategory(link.dataset.categoryLink);
  });
});
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  primaryNav.classList.toggle("is-open", !expanded);
});
primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    event.preventDefault();
    dialog.close();
    return;
  }
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
