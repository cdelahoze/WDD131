// Output the current year in the first paragraph
document.getElementById("currentyear").innerHTML =
  "&#169; " + new Date().getFullYear() + " Cristian Moisés De La Hoz Escorcia";

// Output the last modified date in the second paragraph
document.getElementById("lastModified").innerHTML =
  "Last Modified: " + document.lastModified;

// Menu toggle functionality
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });
}


// Temple data array

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg",
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-1029726-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 06",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg",
  },
  {
    templeName: "Colonia Juárez Chihuahua Mexico Temple",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999, March, 06",
    area: 6800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-chihuahua-mexico-temple-1543027-wallpaper.jpg",
  },
  {
    templeName: "Monticello Utah Temple",
    location: "Monticello, Utah, United States",
    dedicated: "1998, July, 26",
    area: 11225,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monticello-utah/400x250/monticello-temple-766559-wallpaper.jpg",
  },

  // Add more temple objects here...
];

// Filter helper: non-mutating, accepts criteria string
// Supported criteria: 'old' (<1900), 'new' (>2000), 'large' (>90000), 'small' (<10000)
function filterTemples(criteria) {
  if (!criteria) return temples.slice();
  const c = String(criteria).toLowerCase();

  return temples.filter((t) => {
    const year = Number((t.dedicated || "").split(",")[0]) || 0;
    if (c === "old") return year < 1900;
    if (c === "new") return year > 2000;
    if (c === "large") return typeof t.area === "number" && t.area > 90000;
    if (c === "small") return typeof t.area === "number" && t.area < 10000;
    return true;
  });
}

// Expose for console / other scripts
window.filterTemples = filterTemples;

// Function to create temple cards
function createTempleCard(temple, isPlaceholder = false) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = isPlaceholder ? "./images/placeholder.webp" : temple.imageUrl;
  img.alt = isPlaceholder ? "Cargando..." : `${temple.templeName} — ${temple.location}`;
  img.loading = "lazy";


  const figcaption = document.createElement("figcaption");

  const info = document.createElement("div");
  info.classList.add("temple-info");
  const locationP = document.createElement("p");
  const dedicatedP = document.createElement("p");
  const sizeP = document.createElement("p");

  figcaption.textContent = temple.templeName;
  const locationStrong = document.createElement("strong");
  locationStrong.textContent = "Location: ";
  const dedicatedStrong = document.createElement("strong");
  dedicatedStrong.textContent = "Dedicated: ";
  const sizeStrong = document.createElement("strong");
  sizeStrong.textContent = "Size: ";
  locationP.appendChild(locationStrong);
  locationP.appendChild(document.createTextNode(temple.location));
  dedicatedP.appendChild(dedicatedStrong);
  dedicatedP.appendChild(document.createTextNode(temple.dedicated));
  sizeP.appendChild(sizeStrong);
  sizeP.appendChild(
    document.createTextNode(`${temple.area.toLocaleString()} sq ft`),
  );

  info.appendChild(locationP);
  info.appendChild(dedicatedP);
  info.appendChild(sizeP);

  // add styles to elements

  figure.appendChild(img);
  figure.appendChild(figcaption);
  figure.appendChild(info);

  return figure;
}

// Render all temples
function renderTemples(templeList, usePlaceholders = false) {
  const gallery = document.getElementById("temple-gallery");
  if (!gallery) return;
  gallery.innerHTML = ""; // Limpiamos la galería

  templeList.forEach((temple) => {
    const card = createTempleCard(temple, usePlaceholders);
    gallery.appendChild(card);
  });
}


// Attach filter behavior to header navigation links (Old, New, Large, Small, Home)
const navLinks = document.querySelectorAll(".navigation a");
navLinks.forEach((link) => {
  const text = link.textContent.trim().toLowerCase();
  if (["old", "new", "large", "small"].includes(text)) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filtered = filterTemples(text);
      renderTemples(filtered);
      if (navigation.classList.contains("open"))
        navigation.classList.remove("open");
    });
  } else if (text === "home") {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      renderTemples(temples);
      if (navigation.classList.contains("open"))
        navigation.classList.remove("open");
    });
  }
});

// --- Retraso Provisional para pruebas ---

/**
 * Esta función simula un tiempo de espera. 
 * Para quitar el retraso, llamar a renderTemples(temples) 
 * directamente al final del archivo.
 */
async function init() {
  // 1. Cargamos primero los placeholders
  renderTemples(temples, true);

  // 2. Retardo intencional de 2.5 segundos (ajustado desde 10s)
  await new Promise((resolve) => setTimeout(resolve, 100));

  // 3. Cambio gradual de src
  const images = document.querySelectorAll("#temple-gallery img");

images.forEach((img, index) => {
    // Aplicamos clase de desvanecimiento antes del cambio
    img.classList.add("fade-out");

    // Esperamos un instante para que el navegador procese la clase
    setTimeout(() => {
      // Cambiamos al src real del array original (usar propiedades correctas)
      if (temples[index]) {
        img.src = temples[index].imageUrl;
        img.alt = `${temples[index].templeName} — ${temples[index].location}`;
      }

      // Cuando la imagen real cargue, quitamos el desvanecimiento
      img.onload = () => {
        img.classList.remove("fade-out");
        img.classList.add("fade-in");
      };
    }, 100 * index); // Efecto cascada opcional
  });
}



// Initialize the page with all temples
init();




