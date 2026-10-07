# Informe técnico y funcional
## Guía Turística de Cúcuta

**Tipo de documento:** Informe descriptivo del programa web  
**Versión revisada:** rama `develop`  
**Fecha de elaboración:** 16 de octubre de 2026  
**Ubicación del proyecto:** Cúcuta, Norte de Santander, Colombia  
**Naturaleza del proyecto:** guía informativa académica independiente

> Este informe describe la implementación existente en el código. No constituye una certificación de accesibilidad, una auditoría de seguridad, una validación oficial de los lugares ni una afirmación de que la guía sea un servicio turístico oficial.

## 1. Resumen ejecutivo

La Guía Turística de Cúcuta es un sitio web estático de una sola página que presenta una selección de lugares de interés histórico, cultural, natural, recreativo y comercial de Cúcuta. Permite recorrer las secciones mediante navegación interna, explorar nueve destinos, filtrarlos por categoría, buscarlos por nombre, categoría o ubicación, consultar sus detalles en una ventana emergente y abrir búsquedas de ubicación en Google Maps.

El programa se implementa con HTML5, CSS3 y JavaScript nativos. No utiliza un servidor de aplicación, una base de datos, un framework ni un proceso de compilación. Las fotografías disponibles se almacenan localmente; el crédito y la licencia de cada una se registran en un documento aparte. La ficha de Plaza de Banderas muestra deliberadamente un recurso visual de reserva porque en el catálogo no hay una fotografía identificada como verificada para ese sitio.

## 2. Propósito, público y alcance

### 2.1 Propósito

Facilitar una primera exploración de lugares de Cúcuta en una interfaz sencilla y adaptable. El sitio reúne información descriptiva breve, categorías, fotografías, una ventana de detalles y enlaces que permiten consultar ubicaciones externas.

### 2.2 Público al que se dirige

- Habitantes que desean consultar lugares de la ciudad.
- Visitantes que buscan ideas para organizar un recorrido.
- Personas que necesitan acceder a enlaces de ubicación y verificar información antes de desplazarse.

### 2.3 Alcance funcional

El programa ofrece navegación y contenido dentro de la página, filtros y búsqueda ejecutados en el navegador, fichas de destinos, un enlace general de mapas para Cúcuta y enlaces de búsqueda individuales para cada sitio. No ofrece geolocalización del usuario, itinerarios calculados, reservas, mapas propios con coordenadas, información en tiempo real, autenticación ni almacenamiento de datos.

La información sobre horarios, acceso, eventos, precios y servicios no se presenta como confirmada. El usuario debe consultar directamente las fuentes correspondientes antes de visitar un lugar.

## 3. Organización del proyecto

```text
guia-turistica-cucuta/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
├── docs/
│   ├── fuentes-imagenes.md
│   └── informe-tecnico-guia-turistica.md
├── README.md
└── .gitignore
```

| Archivo o carpeta | Responsabilidad |
| --- | --- |
| `index.html` | Contenido, estructura semántica, enlaces, controles y elementos vacíos que JavaScript completa. |
| `css/styles.css` | Sistema visual, componentes, estados interactivos y reglas responsive. |
| `js/main.js` | Catálogo de destinos, renderizado de tarjetas, filtros, búsqueda, menú, diálogo y actualización de indicadores. |
| `assets/images/` | Copias locales de las fotografías empleadas por la guía. |
| `docs/fuentes-imagenes.md` | Registro de fichas de origen, autores y licencias de las imágenes. |
| `docs/informe-tecnico-guia-turistica.md` | Este informe funcional y técnico. |
| `README.md` | Presentación breve del proyecto e instrucciones de ejecución. |
| `.gitignore` | Exclusiones básicas de archivos del entorno local y del sistema operativo. |

### 3.1 Arquitectura

La aplicación sigue una separación sencilla en tres capas:

1. **Estructura y contenido base:** HTML semántico con encabezado, navegación, secciones, pie de página y diálogo.
2. **Presentación:** una hoja de estilos centralizada con variables CSS, componentes reutilizables y puntos de quiebre para pantallas diferentes.
3. **Interacción y catálogo:** un arreglo local de objetos JavaScript representa los destinos; funciones del mismo archivo generan tarjetas y mantienen los controles.

Esta arquitectura es adecuada para el alcance actual de una página informativa sin backend ni dependencias de ejecución. Como el catálogo y la lógica se encuentran en el mismo archivo JavaScript, un crecimiento considerable del número de destinos o la incorporación de más páginas justificaría separar los datos y módulos. Actualmente no es necesario añadir esa complejidad.

## 4. Tecnologías y recursos

- **HTML5:** estructura y contenido del documento.
- **CSS3:** presentación visual y diseño responsive.
- **JavaScript nativo:** renderizado del catálogo y comportamiento de la interfaz.
- **Google Maps:** destino externo para consultas de ubicación por texto.
- **Google Fonts:** carga remota de DM Sans y Playfair Display; existen familias de reserva en la hoja de estilos si no se pueden cargar.
- **Wikimedia Commons:** fichas de origen de las fotografías, cuyo registro se encuentra en [`fuentes-imagenes.md`](./fuentes-imagenes.md).

No se requieren instalaciones ni compilación. El servidor estático se utiliza solo para servir los archivos durante la vista local; no constituye un backend de la aplicación.

## 5. Descripción de la interfaz y funcionamiento por apartados

### 5.1 Encabezado y navegación

El encabezado se mantiene visible durante el desplazamiento y presenta la identidad textual “Descubre Cúcuta”. Incluye enlaces a Inicio, Rutas, Naturaleza, Ocio y comercio, Mapa y La guía, además de un botón de exploración.

En pantallas pequeñas, la navegación se presenta mediante un botón de menú. JavaScript actualiza el estado `aria-expanded`, muestra u oculta el menú y lo cierra al seguir un enlace. En escritorio, la navegación se presenta en línea. Cuando está disponible la API `IntersectionObserver`, la sección que entra en la zona de lectura se refleja en el enlace correspondiente.

**Evidencia visual sugerida**

> "[INSERTAR CAPTURA 1: encabezado y navegación de escritorio; si se desea, incluir también el menú desplegado en móvil.]"

### 5.2 Portada o hero

La portada abre la página con una fotografía panorámica local, el título “Descubre Cúcuta”, la referencia geográfica “Norte de Santander · Colombia” y dos acciones: explorar destinos o ir a las rutas. La imagen principal tiene texto alternativo, dimensiones declaradas y prioridad de carga para favorecer su presentación inicial.

**Evidencia visual sugerida**

> "[INSERTAR CAPTURA 2: portada completa, incluyendo título, imagen y botones principales.]"

### 5.3 Rutas temáticas

La sección de rutas presenta tres accesos:

- **Historia y cultura:** filtra el catálogo a lugares de la categoría histórica.
- **Aire libre:** filtra los destinos naturales.
- **Ocio y comercio:** dirige a la categoría de ocio y recreación.

Al seleccionar uno de estos enlaces, el programa limpia el texto de búsqueda, actualiza la categoría activa y lleva al visitante a la sección de destinos mediante un ancla de la página. El enlace “Ver todos los lugares” dirige también al catálogo.

**Evidencia visual sugerida**

> "[INSERTAR CAPTURA 3: las tres rutas temáticas y su descripción.]"

### 5.4 Explorador de destinos

El catálogo se genera en el navegador a partir de los objetos definidos en `js/main.js`. Cada tarjeta presenta categoría, ubicación declarada, nombre, descripción, acción “Conocer lugar” y enlace “Mapa”.

El catálogo actual contiene **nueve destinos**:

| Categoría interna | Cantidad | Destinos |
| --- | ---: | --- |
| Histórico y cultural (`historico`) | 5 | Parque Santander; Catedral de San José; Torre del Reloj; Quinta Teresa; Biblioteca Pública Julio Pérez Ferrero. |
| Naturaleza (`naturaleza`) | 2 | Cristo Rey; Malecón de Cúcuta. |
| Ocio y recreación (`ocio`) | 1 | Plaza de Banderas. |
| Comercio (`comercio`) | 1 | Ventura Plaza. |
| **Total** | **9** | — |

La categoría comercial se distingue de ocio y recreación, aunque ambas aparecen juntas en algunos accesos de navegación. La biblioteca se agrupa bajo la categoría histórica en los filtros y usa “Cultural” como rótulo particular de su tarjeta.

#### Filtrado

Los botones disponibles son Todos, Histórico y cultural, Naturaleza, Ocio y recreación y Comercio. Al seleccionar uno, JavaScript:

1. Actualiza la categoría seleccionada.
2. Cambia el estado visual y el valor `aria-pressed` de los botones.
3. Vuelve a generar las tarjetas coincidentes.
4. Actualiza el número de resultados y el mensaje anunciado en la región de estado.

Los recuentos junto a los filtros se calculan desde el mismo catálogo para evitar mantener cifras duplicadas manualmente.

#### Búsqueda

El campo permite buscar por nombre del lugar, categoría visible o ubicación. La comparación ignora mayúsculas y diacríticos, por lo que una consulta sin tilde puede coincidir con un nombre que la tenga. La búsqueda se combina con el filtro activo y no recarga la página.

Si no hay coincidencias, las tarjetas se ocultan y aparece un mensaje que sugiere cambiar el texto o la categoría. El número y los criterios aplicados se comunican también en un elemento con `aria-live`.

#### Fotografías

Las ocho fotografías actualmente asignadas a destinos tienen rutas locales. Las tarjetas cargan de forma diferida sus imágenes y declaran dimensiones para limitar cambios de diseño durante la carga. Si una imagen falla, se sustituye por un bloque alternativo. Plaza de Banderas usa un aviso de imagen pendiente de verificación y no reutiliza la foto de otro destino.

**Evidencia visual sugerida**

> "[INSERTAR CAPTURA 4: catálogo con filtros, búsqueda, cantidad de resultados y varias tarjetas visibles.]"

### 5.5 Detalle de un destino

El botón “Conocer lugar” abre un elemento HTML `<dialog>` con el nombre, categoría, ubicación, descripción, imagen si está disponible y enlace de Google Maps. La ventana puede cerrarse con el botón de cierre, con Escape o pulsando sobre el área exterior del diálogo.

Al abrirla, el foco se mueve al botón de cierre; al cerrarla, se devuelve al botón que abrió el detalle. Si no existe una fotografía verificada o su carga falla, se muestra una alternativa visual en vez de una imagen ajena al lugar.

**Evidencia visual sugerida**

> "[INSERTAR CAPTURA 5: ventana de detalles de un destino abierta; se recomienda mostrar el nombre, la descripción y el enlace a Maps.]"

### 5.6 Mapa y ubicación

La sección Mapa incluye una explicación y un enlace que abre una búsqueda general de Cúcuta en Google Maps. El gráfico decorativo que acompaña el texto está marcado como oculto para tecnologías de asistencia; no pretende representar coordenadas ni una cartografía precisa.

Cada destino, tanto en su tarjeta como en el detalle, genera un enlace individual de búsqueda en Maps mediante una consulta URL codificada. Estos enlaces abren un servicio externo en una pestaña nueva. El programa no calcula rutas ni garantiza que el resultado externo sea una ficha oficial; se recomienda revisar el resultado y la información vigente.

**Evidencia visual sugerida**

> "[INSERTAR CAPTURA 6: sección de mapa de la página y el botón para abrir Cúcuta en Google Maps.]"

### 5.7 Acerca de la guía

La sección describe el propósito informativo del proyecto, su público y su alcance geográfico. También aclara que se trata de un proyecto académico independiente y que no es una publicación oficial. Las cifras de alcance se actualizan desde el catálogo para mostrar nueve destinos y una ciudad; se indican cuatro categorías.

### 5.8 Pie de página

El pie de página contiene la identidad de la guía, enlaces de navegación secundaria, un acceso para volver al inicio, el año que obtiene el navegador y un enlace al registro de fuentes de las imágenes. También identifica el carácter académico e independiente del proyecto.

### 5.9 Ayudas de teclado

- El enlace “Saltar al contenido” permite pasar directamente al área principal.
- Al presionar `/` fuera de campos de texto, se enfoca la búsqueda de destinos.
- Escape cierra el diálogo abierto o el menú móvil.
- Los enlaces, botones y campos tienen estilos de foco visibles.

## 6. Presentación visual y adaptación a pantallas

La identidad visual combina verde oscuro, tonos vegetales y arena con fondos claros. La tipografía serif se usa para títulos y la tipografía sans serif para lectura y controles. La hoja de estilos declara variables CSS para colores y medidas compartidas y concentra los estilos del sitio en un archivo.

El diseño adapta la composición mediante puntos de quiebre para escritorio, tableta y móvil. Entre los cambios observables están el menú desplegable, la reorganización de las cuadrículas, el apilamiento de los controles y el ajuste de las tarjetas e imágenes. La hoja de estilos incorpora además una regla para reducir las transiciones y el desplazamiento suave si el sistema operativo solicita movimiento reducido.

El diseño adaptable y estas medidas de interfaz no equivalen por sí solos a una auditoría ni a una conformidad certificada con WCAG.

**Evidencia visual sugerida**

> "[INSERTAR CAPTURA 7: vista móvil de la página; se recomienda mostrar el menú y una tarjeta de destino en anchura de teléfono.]"

## 7. Contenido gráfico, fuentes y licencias

Las imágenes se guardan en `assets/images/` para no depender de una solicitud a Wikimedia Commons en cada visita. El documento [`fuentes-imagenes.md`](./fuentes-imagenes.md) relaciona archivos locales con las fichas de Commons, autores y licencias Creative Commons declaradas allí.

Las licencias indicadas incluyen condiciones de atribución y compartir bajo la misma licencia para determinados usos o adaptaciones. Antes de redistribuir o adaptar una fotografía, se debe consultar su ficha y cumplir las condiciones aplicables.

La fotografía de Plaza de Banderas está pendiente de verificación. Hasta que se documente una imagen apropiada, la guía muestra una reserva identificable; no se presenta otra fotografía como si correspondiera a ese sitio.

## 8. Accesibilidad implementada y evaluación pendiente

### 8.1 Medidas observables en el código

- Idioma del documento declarado como español.
- Regiones semánticas de encabezado, navegación, contenido principal y pie de página.
- Enlace para saltar al contenido principal.
- Textos alternativos para imágenes con contenido; decoración marcada como tal.
- Etiquetas accesibles para búsqueda, navegación, filtros y controles del diálogo.
- Estados de filtros comunicados con `aria-pressed`.
- Mensajes de resultados con región `aria-live`.
- Apertura del diálogo con retorno del foco al control de origen.
- Controles operables mediante teclado y contorno de foco visible.
- Respeto declarado por la preferencia de movimiento reducido.
- Mensaje de aviso dentro de la sección de destinos cuando JavaScript está desactivado.

### 8.2 Límites de evaluación

No se declara que la aplicación haya superado Lighthouse, axe, WAVE, pruebas completas con lectores de pantalla ni una auditoría WCAG. Para afirmar resultados de esas evaluaciones se deben ejecutar las herramientas y documentar sus hallazgos. El aviso sin JavaScript comunica una limitación: las tarjetas y la exploración dependen del script y no se imprimen como contenido HTML completo cuando JavaScript está desactivado.

## 9. Privacidad, conectividad y dependencias externas

La guía no solicita datos personales, no tiene cuentas y no almacena preferencias del usuario en un servidor. La búsqueda y los filtros se procesan en el navegador sobre el catálogo local.

Para usar todas las funciones y recursos externos se requiere conectividad: las tipografías pueden descargarse de Google Fonts y los enlaces de ubicación abren Google Maps. Las fotografías de la guía son locales. La operación de esos servicios externos y sus políticas de privacidad no están controladas por este programa.

## 10. Ejecución local

Desde la carpeta raíz del proyecto, se puede abrir `index.html` directamente en un navegador moderno. Como alternativa, en PowerShell se puede iniciar un servidor estático con:

```powershell
python -m http.server 8000
```

Después, abrir `http://localhost:8000` en el navegador. No es necesario instalar paquetes ni generar archivos compilados.

## 11. Verificación funcional realizada

Durante la revisión local de la interfaz se comprobaron en navegador las operaciones siguientes:

| Comprobación | Resultado |
| --- | --- |
| Renderizado inicial del catálogo | Se verificó que aparecen nueve destinos. |
| Filtros | Se comprobó que las categorías muestran el conjunto correspondiente; por ejemplo, Naturaleza presenta dos destinos y Comercio, uno. |
| Búsqueda y combinación con rutas | Se comprobó la búsqueda por texto y que seleccionar una ruta limpia la consulta anterior y aplica el filtro. |
| Resultados vacíos | Se comprobó que una consulta sin coincidencias muestra el mensaje previsto. |
| Diálogo | Se comprobó su apertura, cierre con Escape y retorno del foco al botón que lo abrió. |
| Enlaces de mapas | Se comprobó que el diálogo actualiza el enlace al destino seleccionado. |
| Respaldo de imágenes | Se comprobó mediante una respuesta de imagen simulada como fallida que las tarjetas y el diálogo muestran un bloque alternativo. |

Estas comprobaciones son pruebas funcionales manuales/locales y no un conjunto automatizado de pruebas. No se reporta una puntuación de rendimiento, una validación integral en diferentes navegadores ni una evaluación formal de accesibilidad.

## 12. Límites y aspectos pendientes identificados

1. **Fotografía de Plaza de Banderas:** completar la verificación y el registro de la fuente antes de sustituir la reserva visual.
2. **Profundidad de contenido:** las descripciones son breves; no se proporcionan horarios, tarifas ni condiciones de acceso confirmadas.
3. **Verificación de ubicaciones:** los enlaces abren búsquedas de texto en Maps, por lo que el usuario debe confirmar el resultado exacto.
4. **Contenido sin JavaScript:** existe un aviso, pero el catálogo dinámico no aparece si el script está deshabilitado.
5. **Auditoría de accesibilidad:** faltan mediciones y pruebas especializadas antes de formular una declaración de conformidad.
6. **Pruebas automatizadas:** no hay un conjunto de pruebas automatizadas incluido en la estructura revisada.
7. **Fuentes tipográficas:** Google Fonts es un servicio remoto; si no hay conexión se usan las familias de reserva configuradas.

## 13. Capturas sugeridas para anexar

Los espacios siguientes son opcionales. Sustituir cada marcador por una captura propia de la aplicación si se requiere evidencia visual en una entrega académica.

1. **Portada:** `"[INSERTAR CAPTURA: portada completa en escritorio.]"`
2. **Rutas:** `"[INSERTAR CAPTURA: accesos a Historia y cultura, Aire libre y Ocio y comercio.]"`
3. **Catálogo:** `"[INSERTAR CAPTURA: destinos con filtros y búsqueda visibles.]"`
4. **Filtro o búsqueda:** `"[INSERTAR CAPTURA: una categoría seleccionada o una consulta con resultados.]"`
5. **Detalle de destino:** `"[INSERTAR CAPTURA: diálogo de información abierto.]"`
6. **Mapa y acerca de:** `"[INSERTAR CAPTURA: sección de mapa o descripción del proyecto.]"`
7. **Diseño móvil:** `"[INSERTAR CAPTURA: sitio abierto en viewport de teléfono con el menú desplegado.]"`
8. **Respaldo de imagen:** `"[INSERTAR CAPTURA: reserva visible de Plaza de Banderas o respaldo al simular una imagen no disponible.]"`

## 14. Conclusión

La implementación actual cumple la función de una guía turística informativa estática: organiza nueve lugares de Cúcuta en categorías, permite encontrarlos mediante filtros y búsqueda y enlaza a consultas externas de ubicación. La separación entre estructura, estilos, lógica, recursos e información documental es clara y proporcional al tamaño presente del programa.

Las limitaciones principales son la falta de una fotografía verificada para Plaza de Banderas, la dependencia de JavaScript para mostrar el catálogo y la ausencia de auditorías especializadas o pruebas automatizadas. El sitio identifica su carácter independiente y evita presentar horarios, precios o condiciones variables como información garantizada.
