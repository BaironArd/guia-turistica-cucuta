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
  }
];

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
  const grid = document.querySelector("#destination-grid");
  grid.innerHTML = places.map(renderPlace).join("");
  document.querySelector("#result-status").textContent = `${places.length} lugares para explorar.`;
  document.querySelector("#place-total").textContent = places.length;
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  document.querySelectorAll("[data-count]").forEach((count) => {
    const category = count.dataset.count;
    count.textContent = category === "todos"
      ? places.length
      : places.filter((place) => place.category === category).length;
  });
  grid.querySelectorAll("[data-place-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const place = places.find((candidate) => candidate.id === button.dataset.placeId);
      if (!place) return;

      document.querySelector("#dialog-image").src = place.image;
      document.querySelector("#dialog-image").alt = place.imageAlt;
      document.querySelector("#dialog-category").textContent = `${place.categoryLabel} · ${place.location}`;
      document.querySelector("#dialog-title").textContent = place.name;
      document.querySelector("#dialog-description").textContent = place.description;
      document.querySelector("#dialog-map-link").href = mapUrl(place.mapQuery);
      document.querySelector("#place-dialog").showModal();
    });
  });
}

document.querySelector(".dialog-close").addEventListener("click", () => {
  document.querySelector("#place-dialog").close();
});

updatePlaces();
