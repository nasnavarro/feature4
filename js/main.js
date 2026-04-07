///////////////////////////////////////
// Importación de plantillas comunes //
///////////////////////////////////////

//Importamos el header y el footer desde el archivo de plantillas comunes.
import { headCommonElements, header, footer } from './templates/template.js';

// Colocamos los elementos comunes del head al principio del head de la página
document.head.insertAdjacentHTML('afterbegin', headCommonElements);

// Colocamos el headeral principio del body para que se muestre al inicio de la página
const pagecode = document.body.getAttribute('data-page') || 'index';
document.body.insertAdjacentHTML('afterbegin', header(pagecode));

// Colocamos el footer al final del body para que se muestre al final de la página
document.body.insertAdjacentHTML('beforeend', footer());

