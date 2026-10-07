# Guía Turística de Cúcuta

Guía web informativa e independiente para explorar lugares históricos, culturales, espacios al aire libre y puntos de encuentro de Cúcuta, Norte de Santander. Versión base académica elaborada con HTML, CSS y JavaScript nativos.

## Características

- Navegación por secciones con menú adaptable a pantallas pequeñas.
- Rutas temáticas y tarjetas de destinos con detalles ampliados.
- Catálogo de 20 lugares de Cúcuta distribuidos en cuatro categorías.
- Filtros por categoría y búsqueda por nombre, categoría o ubicación.
- Enlaces de búsqueda de lugares en Google Maps.
- Fotografías locales con créditos y licencias registrados en [`docs/fuentes-imagenes.md`](docs/fuentes-imagenes.md).
- Diseño adaptable, estados de foco visibles y respeto por la preferencia de movimiento reducido.
- Aviso para quienes desactiven JavaScript y respaldo visual cuando una fotografía no esté disponible o verificada.
- Informe funcional y técnico detallado en [`docs/informe-tecnico-guia-turistica.md`](docs/informe-tecnico-guia-turistica.md).

## Ejecutar

Abre `index.html` en un navegador moderno. Para una vista local con servidor estático, desde la raíz del proyecto puedes ejecutar:

```powershell
python -m http.server 8000
```

Después visita `http://localhost:8000`. No se necesita instalar dependencias ni compilar.

## Estructura

```text
index.html
css/styles.css
js/main.js
assets/images/
docs/fuentes-imagenes.md
README.md
.gitignore
```

## Organización y arquitectura

La página es un sitio estático de una sola vista: `index.html` contiene la estructura semántica, `css/styles.css` concentra la presentación responsive y `js/main.js` mantiene el catálogo de destinos y sus interacciones. Las imágenes son locales y su atribución se documenta por separado. Esta organización evita dependencias, pasos de compilación y complejidad innecesaria para el alcance actual; si el catálogo o el número de páginas crece, convendrá separar los datos de destinos de la lógica de interfaz.

El catálogo y los controles interactivos dependen de JavaScript. Si está desactivado, la página muestra un aviso en la sección de destinos.

## Alcance y limitaciones

- La guía no es un sitio oficial ni sustituye la información publicada por cada establecimiento.
- Las ubicaciones enlazan búsquedas de Google Maps por nombre; verifica el resultado, la ruta y las condiciones antes de salir.
- Los horarios, actividades, acceso, precios y servicios pueden cambiar y no se presentan como datos confirmados.
- La sección de accesibilidad requiere una auditoría posterior con herramientas y pruebas manuales. El proyecto no declara una certificación ni una puntuación de conformidad.
- Las fotografías se distribuyen bajo las licencias de Wikimedia Commons indicadas en el registro de fuentes.
