// Elementos comunes del <head>
export const headCommonElements = `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <meta name="author" content="Ignacio Navarro" />
  <link rel="icon" type="image/x-icon" href="./img/common/favicon.ico"/>
`;

// Importamos los elementos del menú de navegación desde el módulo de datos
import { menuItems } from '../data/menu.js';

// Constante para el Header de la página. Se le pasa como parámetro un código de página (por defecto, "index")
export const header = (pagecode = 'index') => `
    <header>
      <!-- Logo de la página con enlace a la home-->
      <a href="index.html" title="Volver al inicio">
        <img class="logo"src="./img/common/logo_valdecantos_235x50.png" alt="Logo de la págia"/>
      </a>

      <!-- Menú Hamburguesa -->
      <input type="checkbox" id="menu-toggle" class="menu-toggle">
      <label for="menu-toggle" class="hamburger" aria-label="Abrir menú de navegación">
        <span></span>
      </label>

      <!--Inicio del Menú de navegación superior-->
      ${renderNavMenu(pagecode, menuItems)}
      <!--Fin del Menú de navegación superior-->
    </header>
`;

// Función para renderizar el menú de navegación. Se le pasa como parámetro un código de página y un array de elementos del menú
const renderNavMenu = (pagecode, menuItems) => {
  const nav = document.createElement('nav');

  menuItems.forEach(item => {
    if (pagecode === item.pagecode) {
      const span = document.createElement('span');
      span.className = 'nav-active';
      span.textContent = item.label;
      nav.appendChild(span);
    } else {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      nav.appendChild(a);
    }
  });

  //Devolvemos el HTML del menú de navegación como una cadena de texto
  return nav.outerHTML;
}

//Constante para el Footer de la página
export const footer = (year = new Date().getFullYear()) => `
    <footer>
        Ignacio Navarro &copy;${year}
        · Realizado por <a href="https://www.websoluzion.com" target="_blank">WebSoluzion</a>
    </footer>
`;
