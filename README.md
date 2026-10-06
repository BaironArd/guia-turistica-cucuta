# Guía Turística de Cúcuta

Guía web informativa e independiente para explorar lugares históricos, culturales, espacios al aire libre y puntos de encuentro de Cúcuta, Norte de Santander. Versión base académica elaborada con HTML, CSS y JavaScript nativos.

## Características

- Navegación por secciones con menú adaptable a pantallas pequeñas.
- Rutas temáticas y tarjetas de destinos con detalles ampliados.
- Filtros por categoría y búsqueda por nombre, categoría o ubicación.
- Enlaces de búsqueda de lugares en Google Maps.
- Fotografías locales con créditos y licencias registrados en [`docs/fuentes-imagenes.md`](docs/fuentes-imagenes.md).
- Diseño adaptable, estados de foco visibles y respeto por la preferencia de movimiento reducido.

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

## Alcance y limitaciones

- La guía no es un sitio oficial ni sustituye la información publicada por cada establecimiento.
- Las ubicaciones enlazan búsquedas de Google Maps por nombre; verifica el resultado, la ruta y las condiciones antes de salir.
- Los horarios, actividades, acceso, precios y servicios pueden cambiar y no se presentan como datos confirmados.
- La sección de accesibilidad requiere una auditoría posterior con herramientas y pruebas manuales. El proyecto no declara una certificación ni una puntuación de conformidad.
- Las fotografías se distribuyen bajo las licencias de Wikimedia Commons indicadas en el registro de fuentes.
