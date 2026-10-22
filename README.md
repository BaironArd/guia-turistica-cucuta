# Guía Turística de Cúcuta

Sitio web informativo e independiente para explorar lugares históricos, culturales, naturales y recreativos de Cúcuta, Norte de Santander. El proyecto es una página estática construida con HTML, CSS y JavaScript nativos; no requiere framework, backend, instalación de dependencias ni compilación.

## Qué incluye

- Portada con fotografía panorámica y navegación interna por Inicio, Rutas, Destinos, Mapa y La guía.
- Tres accesos temáticos para comenzar por historia y cultura, espacios al aire libre u ocio y comercio.
- Catálogo interactivo de **20 lugares**, organizados en cuatro categorías:

  | Categoría | Lugares |
  |---|---:|
  | Histórico y cultural | 7 |
  | Naturaleza | 8 |
  | Ocio y recreación | 4 |
  | Comercio | 1 |

- Filtros por categoría con contadores y estado seleccionado.
- Búsqueda en el catálogo por nombre, categoría o ubicación; no distingue mayúsculas ni tildes.
- Fichas de destino en un diálogo con descripción, categoría, fotografía disponible y enlace de búsqueda en Google Maps.
- Fotografías locales. Cuando una foto no está disponible, se muestra un recurso de reserva; Plaza de Banderas no tiene una foto asignada en el catálogo.
- Diseño adaptable, menú móvil, enlace para saltar al contenido, foco visible, controles con estado accesible y soporte para movimiento reducido.
- Atajo `/` para enfocar la búsqueda; `Escape` cierra el diálogo o el menú móvil.

## Ejecutar localmente

No hay dependencias que instalar. Desde la raíz del repositorio, inicia un servidor estático:

```powershell
python -m http.server 8000
```

Abre <http://127.0.0.1:8000/> en el navegador. También se puede abrir `index.html` directamente, aunque el servidor local ofrece una experiencia más consistente para las rutas de recursos.

## Estructura del proyecto

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
└── docs/
    ├── auditorias/
    │   ├── 01-inicial/
    │   └── 02-posterior/
    ├── fuentes-imagenes.md
    ├── informe-tecnico-guia-turistica.md
    └── informe-accesibilidad-cambios-2.0.md
```

- [`index.html`](index.html): estructura semántica y contenido de las secciones.
- [`css/styles.css`](css/styles.css): estilos, diseño adaptable, estados de foco y presentación de componentes.
- [`js/main.js`](js/main.js): datos de los 20 lugares y lógica de búsqueda, filtros, tarjetas, diálogo, menú y navegación.
- [`assets/images/`](assets/images/): fotografías locales utilizadas por la guía.
- [`docs/fuentes-imagenes.md`](docs/fuentes-imagenes.md): fichas de origen, autoría y licencias de las fotografías.
- [`docs/informe-tecnico-guia-turistica.md`](docs/informe-tecnico-guia-turistica.md): alcance, arquitectura y comportamiento funcional.
- [`docs/informe-accesibilidad-cambios-2.0.md`](docs/informe-accesibilidad-cambios-2.0.md): correcciones, evidencias y cronología del proyecto.
- [`docs/auditorias/`](docs/auditorias/): reportes originales y posteriores de accesibilidad conservados como evidencia.

## Accesibilidad

La rama `develop` contiene las correcciones F01–F10 documentadas en el informe 2.0, incluidas mejoras de nombres accesibles, contraste, navegación por teclado, foco, diálogo, filtros y contenido alternativo para imágenes. El propietario del proyecto informa que ejecutó las revisiones finales con WAVE, axe DevTools y Lighthouse y que sus resultados fueron satisfactorios. Los reportes guardados dentro de `docs/auditorias/` son evidencia de las ejecuciones archivadas en esas fechas; para detalles y capturas, consulta el informe de accesibilidad.

## Alcance y fuentes

- Es una guía académica independiente; no es un sitio oficial ni sustituye los canales de los lugares.
- Los enlaces de mapa abren búsquedas externas de Google Maps; verifica el destino y la ruta antes de desplazarte.
- Horarios, acceso, precios, servicios y actividades pueden cambiar y no se presentan como datos confirmados.
- Las fotografías proceden de Wikimedia Commons y se distribuyen de acuerdo con las atribuciones y licencias indicadas en el registro de fuentes.
- Google Fonts requiere conexión a Internet para cargar las familias tipográficas externas; existen fuentes de reserva en CSS.
