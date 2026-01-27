// Output the current year in the first paragraph
document.getElementById("currentyear").innerHTML =
  "&#169; " + new Date().getFullYear() + " Cristian Moisés De La Hoz Escorcia";

// Output the last modified date in the second paragraph
document.getElementById("lastModified").innerHTML =
  "Last Modified: " + document.lastModified;

  // Temple data array
const temples = [
  {
    src: "../images/abuquerque.webp",
    alt: "AAlbuquerque New Mexico Temple",
    caption: "Albuquerque New Mexico Temple",
  },
  {
    src: "../images/atlanta.webp",
    alt: "Atlanta Georgia Temple",
    caption: "Atlanta Georgia Temple",
  },
  {
    src: "../images/bangkok_thailand.webp",
    alt: "Bangkok Thailand Temple",
    caption: "Bangkok Thailand Temple",
  },
  {
    src: "../images/barranquilla_colombia.webp",
    alt: "Barranquilla Colombia Temple",
    caption: "Barranquilla Colombia Temple",
  },
  {
    src: "../images/bogota_colombia.webp",
    alt: "Bogota Colombia Temple",
    caption: "Bogota Colombia Temple",
  },
  {
    src: "../images/brigham_city_utah.webp",
    alt: "Brigham City Utah Temple",
    caption: "Brigham City Utah Temple",
  },
  {
    src: "../images/campinas_brazil.webp",
    alt: "Campinas Brazil Temple",
    caption: "Campinas Brazil Temple",
  },
  {
    src: "../images/houston.webp",
    alt: "Houston Texas Temple",
    caption: "Houston Texas Temple",
  },
  {
    src: "../images/huntsville_alabama.webp",
    alt: "Huntsville Alabama Temple",
    caption: "Huntsville Alabama Temple",
  },
];

// Function to create temple cards
function createTempleCard(temple, isPlaceholder = false) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
// placeholder, usa la ruta del placeholder
  img.src = isPlaceholder ? "../images/placeholder.webp" : temple.src;
  img.alt = isPlaceholder ? "Cargando..." : temple.alt;
  img.loading = "lazy";

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = temple.caption;

  figure.appendChild(img);
  figure.appendChild(figcaption);

  return figure;
}

// Render all temples
function renderTemples(templeList, usePlaceholders = false) {
  const gallery = document.getElementById("temple-gallery");
  gallery.innerHTML = ""; // Limpiamos la galería

  templeList.forEach((temple) => {
    const card = createTempleCard(temple, usePlaceholders);
    gallery.appendChild(card);
  });
}

// --- Retraso Provisional para pruebas ---

/**
 * Esta función simula un tiempo de espera. 
 * Para quitar el retraso, llamar a renderTemples(temples) 
 * directamente al final del archivo.
 */
async function init() {
  // 1. Cargamos primero los placeholders
  renderTemples(temples, true);

  // 2. Retardo intencional de 2.5 segundos
  await new Promise(resolve => setTimeout(resolve, 2500));

  // 3. Cargamos las imágenes reales
  renderTemples(temples, false);
}

// Initialize the page with all temples
init();

