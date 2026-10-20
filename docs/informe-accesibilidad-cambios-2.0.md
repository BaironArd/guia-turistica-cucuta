# Informe de accesibilidad — cambios 2.0

## Propósito y alcance

Este informe registra las correcciones implementadas en unidades pequeñas, sus criterios de accesibilidad relacionados y la evidencia necesaria para verificar cada resultado. El registro distingue entre cambios aplicados, pruebas ejecutadas y comprobaciones aún pendientes. No constituye una certificación de conformidad WCAG.

**Proyecto:** Guía Turística de Cúcuta
**Rama de trabajo:** `develop`
**Versión base del informe:** auditorías iniciales conservadas en `docs/auditorias/01-inicial/`
**Estado del documento:** F01 está implementada y comprobada en el árbol accesible, pero queda pendiente una nueva auditoría porque Lighthouse posterior todavía vio los nombres personalizados anteriores. F02–F08 tienen mediciones/pruebas registradas en sus unidades; Lighthouse posterior aprobó el contraste estándar. La exportación textual WAVE posterior contiene 13 marcadores de contraste y 109 alertas “Very small text”; el CSS de contraste ya se había ajustado, y en esta revisión se aumentó a 12 px el texto visible menor que ese tamaño. También se añadieron roles de grupo a dos contenedores que tenían `aria-label` sobre un `div` genérico. Estas correcciones requieren una nueva ejecución WAVE/axe para confirmar su resultado automático. La alerta de `<noscript>` corresponde al fallback útil cuando JavaScript está desactivado. OBS-A11Y-09 (`.card-location`) no se confirma como incumplimiento; OBS-A11Y-10 (`.label-two`) está corregida por medición y pendiente de repetir axe. `aria-current` está corregido y comprobado en navegador. F10 requiere pruebas manuales con tecnología de asistencia y ampliación. El resumen WAVE indica “Errors: 1”, pero el texto exportado no identifica un nodo o causa para ese contador; queda pendiente de atribución. Las capturas inicial y posterior muestran estados distintos del interruptor Styles, pero esto por sí solo no permite deducir cómo se evaluaron los hallazgos ni atribuir la diferencia de conteos.

## Unidad F01 — Coincidencia del nombre accesible de la marca

### Hallazgo y origen

**ID interno:** ERR-A11Y-01
**Problema:** los enlaces de marca de la cabecera y del pie muestran el texto visible «Descubre Cúcuta», pero el atributo `aria-label` anterior comenzaba por «Guía Turística de Cúcuta» y omitía «Descubre».
**Fuentes originales:** `docs/auditorias/01-inicial/lighthouse-reporte.json` (Lighthouse 13.4.1, captura del 17 de octubre de 2026 a las 20:30:57Z) y `docs/auditorias/01-inicial/lighthouse-reporte.html` (Lighthouse 13.4.1, captura del 17 de octubre de 2026 a las 20:48:53Z). Ambas auditorías reportaron dos elementos en `label-content-name-mismatch`: la marca de cabecera y la marca del pie.
**Criterio relacionado:** WCAG 2.2, [2.5.3 Etiqueta en el nombre, nivel A](https://www.w3.org/TR/WCAG22/#label-in-name). El criterio es pertinente porque el nombre accesible del enlace debe incluir el texto visible; se conserva el texto de marca como su nombre.
**Prioridad:** P1 según el plan de trabajo, por afectar dos enlaces prominentes de navegación.
**Estado de implementación:** corregida inicialmente en `4271513` y refinada en los cambios locales: los enlaces de marca ya no tienen un `aria-label` innecesario, por lo que su nombre accesible procede del texto visible «Descubre Cúcuta». El monograma se mantiene como elemento decorativo vacío, oculto a tecnologías de asistencia.
**Estado de verificación:** Lighthouse anterior (`docs/auditorias/02-posterior/lighthouse-v2.json`, 21 de octubre de 2026) registró dos nodos `label-content-name-mismatch`, pero ese informe precede a los cambios locales actuales y no verifica su resultado. La inspección actual del árbol accesible del navegador muestra ambos enlaces nombrados «Descubre Cúcuta». No se ha ejecutado Lighthouse/axe de nuevo y por ello no se afirma que sus alertas automáticas hayan desaparecido.

### Código anterior y corrección

Archivo afectado: [`index.html`](../index.html).

En la cabecera, la versión anterior era:

```html
<a class="brand" href="#inicio" aria-label="Guía Turística de Cúcuta, inicio">
```

El nombre accesible personalizado omitía la palabra «Descubre», aunque esta forma parte del texto visible. Se conserva esa versión como comentario histórico junto al enlace. El enlace actual toma su nombre de su contenido visible, sin sustituirlo por un `aria-label`:

```html
<a class="brand" href="#inicio">
```

En el pie, la versión anterior era:

```html
<a class="brand footer-brand" href="#inicio" aria-label="Guía Turística de Cúcuta, volver al inicio">
```

También omitía «Descubre». Se retiró el nombre personalizado y el enlace usa ahora su texto visible:

```html
<a class="brand footer-brand" href="#inicio">
```

En ambos enlaces, el nombre accesible se deriva de los descendientes de texto «Descubre Cúcuta», coincidiendo con la etiqueta visual y evitando que un nombre personalizado sea fuente de discrepancia. El monograma decorativo se dibuja con CSS dentro de un elemento `aria-hidden="true"` sin texto DOM.

### Pruebas y estado

- **Revisión del informe guardado:** Lighthouse previo reporta dos enlaces, pero se ejecutó antes de la solución local actual; no se usa como prueba de resultado final.
- **Revisión estática y árbol accesible del navegador:** ambos enlaces se exponen como «Descubre Cúcuta», coincidiendo con el texto visible; el monograma está vacío en DOM y permanece oculto con `aria-hidden="true"`.
- **axe DevTools y Lighthouse:** no se volvieron a ejecutar en esta comprobación. axe DevTools está instalado en Chrome `Profile 1`, pero dicho perfil no está disponible en el navegador integrado; Lighthouse no está disponible como CLI y no fue posible controlar su panel DevTools desde el navegador de prueba.

La corrección está implementada y comprobada mediante inspección estática y del árbol accesible; la confirmación con una nueva auditoría Lighthouse/axe sigue pendiente.

### Evidencias manuales requeridas

Tomar capturas reales del mismo navegador, viewport y contenido para comparar cabecera con cabecera y pie con pie. No sustituir las capturas pendientes por imágenes recreadas ni marcar los marcadores de posición como evidencia.

1. **`F01-ERR-A11Y-01-codigo-antes.png`** — Mostrar el HTML anterior, donde la «C» era texto dentro de un elemento `aria-hidden`, junto a los `aria-label`.
2. **`F01-ERR-A11Y-01-codigo-despues.png`** — Mostrar los dos monogramas vacíos, los enlaces sin `aria-label` y la regla `::before` en CSS.
3. **`F01-ERR-A11Y-01-nombre-accesible-antes.png`** — Capturar el hallazgo original de Lighthouse o el árbol de accesibilidad anterior donde se vea el nombre de cada enlace y la discrepancia con «Descubre Cúcuta». Si la evidencia original no está disponible, indicarlo; no reconstruirla.
4. **`F01-ERR-A11Y-01-nombre-accesible-despues.png`** — Tras repetir Lighthouse/axe, mostrar los resultados nuevos y los nombres accesibles de cabecera y pie. No presentar la corrección de código como resultado de auditoría.

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F01-ERR-A11Y-01-codigo-antes.png` aquí. Debe mostrar los atributos originales de cabecera y pie.

> **Pendiente:** insertar `F01-ERR-A11Y-01-codigo-despues.png` aquí. Debe mostrar el monograma generado por CSS y los nombres accesibles activos.

> **Pendiente:** insertar `F01-ERR-A11Y-01-nombre-accesible-antes.png` aquí. Debe mostrar evidencia auténtica del hallazgo original.

> **Pendiente:** insertar `F01-ERR-A11Y-01-nombre-accesible-despues.png` aquí. Debe mostrar la nueva auditoría y los nombres accesibles observados.

## Unidad F02 — Contraste del texto de marca en cabecera

### Hallazgo y origen

**ID interno:** ERR-A11Y-02
**Problema:** el rótulo «Cúcuta» de la marca superior tenía contraste 4,49:1 sobre el fondo `#fbfaf7`, inferior al mínimo de 4,5:1 indicado para texto normal.
**Fuentes originales:** `docs/auditorias/01-inicial/axe-dev-tools-base.json` y `docs/auditorias/01-inicial/axe-dev-tools-completo.json` (exports idénticos, axe DevTools 4.13.0, 17 de octubre de 2026 a las 21:16:36Z); `docs/auditorias/01-inicial/lighthouse-reporte.json` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:30:57Z); `docs/auditorias/01-inicial/lighthouse-reporte.html` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:48:53Z). Las herramientas señalan el texto de marca de cabecera y reportan 4,49:1.
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum). El texto es pequeño y no se identifica como texto incidental ni como logotipo.
**Prioridad:** P2, por ser una instancia localizada de texto en la cabecera.
**Estado de implementación:** corregida en `css/styles.css` con una regla específica para la marca de cabecera.
**Estado de verificación:** el color renderizado se inspeccionó en navegador y dio 4,70:1; capturas manuales pendientes. Lighthouse posterior aprobó `color-contrast`, pero esa auditoría no comprobó los cambios locales posteriores en el nombre accesible de la marca.

### Código anterior y corrección

Archivo afectado: [`css/styles.css`](../css/styles.css).

Antes, el texto heredaba `--muted` desde la regla general de la marca:

```css
.brand-copy > span { color: var(--muted); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; }
```

`--muted` vale `#697770`, cuya relación con el fondo sólido `#fbfaf7` resulta 4,49:1. La regla histórica de color anterior está documentada junto a la nueva regla. La corrección añade una sobrescritura limitada al encabezado:

```css
.header-inner .brand-copy > span { color: #66746c; }
```

El nuevo color calculado contra `#fbfaf7` produce 4,70:1 y supera el umbral numérico de 4,5:1. La regla solo afecta a la marca dentro del encabezado; no cambia el color de la marca del pie ni otros usos de `--muted`. La inspección del navegador confirmó ese color y el fondo renderizados.

### Pruebas y estado

- **Revisión de código:** se confirmó que el color anterior procede de `--muted` (`#697770`) y que la sobrescritura nueva se limita a `.header-inner .brand-copy > span`.
- **Inspección en navegador:** Playwright obtuvo el color de texto renderizado `rgb(102, 116, 108)`, el fondo de cabecera `rgba(251, 250, 247, 0.96)` y el fondo de página `rgb(251, 250, 247)`. Al componer el fondo, la relación calculada fue **4,70:1** (texto normal, umbral 4,5:1).
- **Regresión de otras marcas:** la regla nueva está acotada al encabezado; el estilo existente del pie permanece sin cambios.
- **axe DevTools y Lighthouse:** no se repitieron después del cambio; no se afirma un resultado nuevo de esas herramientas.
- **Inspección del color/fondo renderizados:** realizada en navegador con la medición indicada arriba.
- **Capturas visuales de evidencia:** pendientes; se requieren para el informe, pero no se han inventado ni guardado.

La implementación está aplicada y la medición específica del color renderizado fue satisfactoria. Solo quedan por incorporar las capturas manuales indicadas.

### Evidencias manuales requeridas

Capturar el mismo navegador, viewport y estado de la cabecera antes y después. Las capturas no sustituyen la medición del ratio ni la auditoría automática.

1. **`F02-ERR-A11Y-02-codigo-antes.png`** — Mostrar la regla de la marca en la versión previa al cambio, obtenida con `git show 4271513:css/styles.css`; debe verse que el texto heredaba `var(--muted)`.
2. **`F02-ERR-A11Y-02-codigo-despues.png`** — Mostrar la regla específica `.header-inner .brand-copy > span` y el comentario `ERR-A11Y-02` en el archivo actual.
3. **`F02-ERR-A11Y-02-marca-antes.png`** — Capturar en el navegador el rótulo «Cúcuta» en la cabecera antes del cambio, con la marca y su fondo visibles. Usar una captura previa real; no reconstruirla. Si no existe, indicarlo.
4. **`F02-ERR-A11Y-02-marca-despues.png`** — Capturar la misma cabecera tras el cambio, con viewport equivalente y el mismo contenido.
5. **`F02-ERR-A11Y-02-contraste-despues.png`** — Capturar una medición posterior del color de primer plano y fondo efectivamente renderizados (mínimo 4,5:1).

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F02-ERR-A11Y-02-codigo-antes.png` aquí. Debe mostrar la regla de color anterior recuperada del commit base de F02.

> **Pendiente:** insertar `F02-ERR-A11Y-02-codigo-despues.png` aquí. Debe mostrar la regla limitada a la cabecera y el comentario histórico.

> **Pendiente:** insertar `F02-ERR-A11Y-02-marca-antes.png` aquí. Debe ser una captura previa real de «Cúcuta» en la marca superior.

> **Pendiente:** insertar `F02-ERR-A11Y-02-marca-despues.png` aquí. Debe mostrar el mismo componente tras el cambio.

> **Pendiente:** insertar `F02-ERR-A11Y-02-contraste-despues.png` aquí. Debe mostrar la medición real del contraste renderizado.

## Unidad F03 — Contraste de introducción y rutas

### Hallazgo y origen

**ID interno:** ERR-A11Y-03
**Problema:** en la sección de rutas, texto pequeño tenía contraste inferior a 4,5:1: número del kicker 4,23:1; texto del kicker 3,75:1; eyebrow 3,70:1; números de ruta 3,19:1 y descripciones de ruta 3,61:1. Los dos últimos casos se repiten en los tres accesos a rutas.
**Fuentes originales:** `docs/auditorias/01-inicial/axe-dev-tools-base.json` y `docs/auditorias/01-inicial/axe-dev-tools-completo.json` (exports idénticos, axe DevTools 4.13.0, 17 de octubre de 2026 a las 21:16:36Z); `docs/auditorias/01-inicial/lighthouse-reporte.json` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:30:57Z); `docs/auditorias/01-inicial/lighthouse-reporte.html` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:48:53Z). Axe/Lighthouse coinciden en los incumplimientos de contraste estándar en esta sección.
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum), aplicable a estos textos pequeños.
**Prioridad:** P2, ya que varios rótulos y descripciones de los accesos de rutas no alcanzaban el mínimo.
**Estado de implementación:** corregida en `css/styles.css` con reglas acotadas a `.intro`.
**Estado de verificación:** inspección del estado renderizado en navegador confirmó ratios superiores a 4,5:1 tanto normal como en hover; capturas manuales pendientes. Lighthouse posterior también aprobó `color-contrast`; el reporte es evidencia guardada de esa ejecución, no una auditoría del árbol local completo actual.

### Código anterior y corrección

Archivo afectado: [`css/styles.css`](../css/styles.css).

Antes, la sección heredaba los siguientes colores de las reglas generales:

```css
.section-kicker { color: #76847a; }
.section-kicker > span:first-child { color: #a96843; }
.eyebrow { color: #73867b; }
.route-number { color: #829087; }
.route-copy small { color: #7b867f; }
```

Estos valores daban ratios entre 3,19:1 y 4,23:1 según el texto, por debajo de 4,5:1. Se conserva el resumen de los colores anteriores en el comentario `ERR-A11Y-03` del CSS. La corrección aplica `#626f68` únicamente a kicker, número de kicker, eyebrow, número de ruta y descripción de ruta dentro de `.intro`; las reglas generales y otras secciones permanecen sin cambios.

El color `#626f68` da 5,04:1 sobre el fondo normal `#fbfaf7` y 4,76:1 sobre el fondo hover `#f4f4ed`. La inspección posterior en navegador confirmó esos colores renderizados y ratios en ambos estados. axe DevTools y Lighthouse no se repitieron y no se afirma conformidad global.

### Pruebas y estado

- **Revisión de código:** se comprobó que los overrides están limitados a la sección `.intro`; no se modificaron funciones ni contenido.
- **Inspección en navegador con Playwright:** el estado normal presentó texto `rgb(98, 111, 104)` sobre fondo `rgb(251, 250, 247)`, con ratio **5,04:1** en kicker, número, eyebrow y textos de las tres rutas.
- **Inspección de hover con Playwright:** los tres enlaces de ruta presentaron fondo `rgb(244, 244, 237)` y textos `rgb(98, 111, 104)`. En cada número y descripción se obtuvo un ratio de **4,76:1** sobre el fondo hover.
- **Capturas:** pendientes; no se han creado evidencias visuales en esta fase.

La implementación está aplicada y los colores de los elementos objetivo fueron medidos en navegador en estado normal y hover. Solo quedan por incorporar las capturas manuales indicadas.

### Evidencias manuales requeridas

Tomar las capturas con el mismo navegador, viewport y disposición, comparando sección completa con sección completa.

1. **`F03-ERR-A11Y-03-codigo-antes.png`** — Mostrar los colores anteriores en las reglas de `styles.css` obtenidas del commit base de F03 (`git show d5f0d7a:css/styles.css`).
2. **`F03-ERR-A11Y-03-codigo-despues.png`** — Mostrar el comentario histórico `ERR-A11Y-03` y los nuevos overrides limitados a `.intro`.
3. **`F03-ERR-A11Y-03-rutas-antes.png`** — Captura real previa de la sección Rutas, con kicker, eyebrow y tres accesos visibles. No reconstruir una captura anterior; indicar si no se dispone de ella.
4. **`F03-ERR-A11Y-03-rutas-despues.png`** — Captura de la misma sección después del cambio, con igual viewport y todos los textos afectados legibles en el estado normal.
5. **`F03-ERR-A11Y-03-rutas-hover-despues.png`** — Captura del enlace de ruta bajo hover, mostrando el fondo hover y sus textos; complementarla con la medición de contraste del color renderizado.
6. **`F03-ERR-A11Y-03-contraste-medido.png`** — Capturar los resultados reales de la inspección de color renderizado para kicker, eyebrow y enlaces en estado normal y hover.

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F03-ERR-A11Y-03-codigo-antes.png` aquí. Debe mostrar las declaraciones originales y sus colores.

> **Pendiente:** insertar `F03-ERR-A11Y-03-codigo-despues.png` aquí. Debe mostrar comentario histórico y overrides de `.intro`.

> **Pendiente:** insertar `F03-ERR-A11Y-03-rutas-antes.png` aquí. Debe ser una captura previa real; si no existe, señalarlo.

> **Pendiente:** insertar `F03-ERR-A11Y-03-rutas-despues.png` aquí. Debe mostrar la misma sección y viewport tras la implementación.

> **Pendiente:** insertar `F03-ERR-A11Y-03-rutas-hover-despues.png` aquí. Debe mostrar uno de los enlaces en estado hover; la medición inspeccionada en los tres fue 4,76:1, pero todavía debe incorporarse la captura real.

> **Pendiente:** insertar `F03-ERR-A11Y-03-contraste-medido.png` aquí. Debe mostrar la inspección real de colores renderizados; no presentarla como resultado de axe/Lighthouse.

## Unidad F04 — Contraste del encabezado y controles del catálogo

### Hallazgo y origen

**ID interno:** ERR-A11Y-04
**Problema:** nueve instancias de texto del explorador estaban bajo 4,5:1 sobre el fondo `#f1f0e9`: número y rótulo del kicker (3,87:1 y 3,43:1), eyebrow (3,38:1), nota del encabezado (4,17:1), cuatro filtros inactivos (4,17:1 cada uno) y estado de resultados (3,63:1).
**Fuentes originales:** `docs/auditorias/01-inicial/axe-dev-tools-base.json` y `docs/auditorias/01-inicial/axe-dev-tools-completo.json` (exports idénticos, axe DevTools 4.13.0, 17 de octubre de 2026 a las 21:16:36Z); `docs/auditorias/01-inicial/lighthouse-reporte.json` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:30:57Z); `docs/auditorias/01-inicial/lighthouse-reporte.html` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:48:53Z).
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum), aplicable al texto pequeño enumerado.
**Prioridad:** P2, por afectar títulos auxiliares y controles del explorador de destinos.
**Estado de implementación:** corregida en `css/styles.css` con reglas limitadas a `.destinations`; el filtro seleccionado conserva su color existente.
**Estado de verificación:** contraste de estados inactivos y seleccionados medido en navegador; interacción de filtro comprobada. Lighthouse posterior aprobó `color-contrast`; no se atribuye ese resultado a una auditoría nueva del árbol local completo actual. Solo quedan las capturas manuales indicadas abajo.

### Código anterior y corrección

Archivo afectado: [`css/styles.css`](../css/styles.css).

Antes, los componentes heredaban los colores `#76847a` (kicker), `#a96843` (número del kicker), `#73867b` (eyebrow), `#68766e` (nota y filtros inactivos) y `#718078` (estado de resultados). Sobre el fondo `#f1f0e9`, esos valores no alcanzaban 4,5:1. Las reglas históricas anteriores están registradas en el comentario `ERR-A11Y-04` del CSS.

La corrección usa `#5f6d65` para el texto auxiliar del encabezado, la nota, el estado y los filtros inactivos, con selectores específicos de `.destinations`. El filtro seleccionado no entra en la regla `:not(.is-selected)` y conserva el texto claro sobre el fondo verde. El nuevo texto `#5f6d65` medido sobre `#f1f0e9` alcanza **4,76:1**.

### Pruebas y estado

- **Revisión de alcance:** los overrides están limitados a `.destinations`; no se cambiaron el catálogo, los manejadores de filtros ni la estructura HTML.
- **Contraste renderizado:** Playwright comprobó texto `rgb(95, 109, 101)` sobre el fondo de sección `rgb(241, 240, 233)`, con ratio **4,76:1** en kicker, número, eyebrow, nota, estado y los cuatro filtros inactivos.
- **Estado seleccionado:** el filtro seleccionado mantuvo texto `rgb(255, 255, 255)` sobre fondo `rgb(21, 63, 56)`, con ratio **11,67:1**.
- **Interacción:** al seleccionar “Naturaleza”, se actualizaron `aria-pressed`, el mensaje de estado y las tarjetas a ocho lugares; al seleccionar “Todos”, se restauraron las veinte tarjetas y el estado inicial.
- **axe DevTools y Lighthouse:** no se repitieron después del cambio; los informes citados son las fuentes originales y no se presentan como resultados posteriores.
- **Capturas manuales:** pendientes; son la única evidencia solicitada al usuario.

El código está implementado y las comprobaciones específicas de contraste y comportamiento realizadas en navegador fueron satisfactorias. No se declara una conformidad global ni se atribuyen resultados nuevos a axe/Lighthouse.

### Evidencias manuales requeridas

Capturar el mismo viewport y los mismos estados antes y después. La versión inicial del informe y el cambio actual deben quedar diferenciados; no recrear capturas anteriores si no se conservan.

1. **`F04-ERR-A11Y-04-codigo-antes.png`** — Capturar las declaraciones CSS previas de `.section-heading`, `.filter-button` y `.result-status` desde `git show cc85053:css/styles.css`.
2. **`F04-ERR-A11Y-04-codigo-despues.png`** — Capturar los comentarios históricos ERR-A11Y-04 y los overrides limitados a `.destinations`.
3. **`F04-ERR-A11Y-04-explorador-antes.png`** — Captura auténtica previa del encabezado, nota, filtros inactivos y estado de resultados. Si no está disponible, indicarlo; no reconstruirla.
4. **`F04-ERR-A11Y-04-explorador-despues.png`** — Capturar la misma vista actual, con los cuatro filtros inactivos y el mensaje de resultados visible.
5. **`F04-ERR-A11Y-04-filtro-seleccionado.png`** — Mostrar un filtro seleccionado y el resultado filtrado para documentar que el estado y su contraste preexistente se conservan.

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F04-ERR-A11Y-04-codigo-antes.png` aquí. Debe mostrar las reglas CSS anteriores obtenidas del commit base F04.

> **Pendiente:** insertar `F04-ERR-A11Y-04-codigo-despues.png` aquí. Debe mostrar el código histórico comentado y los overrides activos.

> **Pendiente:** insertar `F04-ERR-A11Y-04-explorador-antes.png` aquí. Debe ser la captura previa real del explorador; si no existe, dejar constancia.

> **Pendiente:** insertar `F04-ERR-A11Y-04-explorador-despues.png` aquí. Debe mostrar la misma vista actual con filtros inactivos y resultados.

> **Pendiente:** insertar `F04-ERR-A11Y-04-filtro-seleccionado.png` aquí. Debe mostrar un filtro seleccionado y las tarjetas correspondientes.

## Unidad F05 — Contraste del texto auxiliar en tarjetas de destinos

### Hallazgo y origen

**ID interno:** ERR-A11Y-05
**Problema:** cada una de las veinte tarjetas de destinos presenta tres elementos de texto bajo el mínimo de 4,5:1 sobre el fondo `#fbfaf7`: ubicación (`#839087`, 3,19:1), descripción (`#6c7971`, 4,36:1) y enlace “Mapa” en reposo (`#77847b`, 3,74:1). Son 60 instancias en total, agrupadas en tres causas de estilo compartidas.
**Fuentes originales:** `docs/auditorias/01-inicial/axe-dev-tools-base.json` y `docs/auditorias/01-inicial/axe-dev-tools-completo.json` (exports idénticos; regla `color-contrast`, 60 instancias correspondientes a estas tres clases de elemento); `docs/auditorias/01-inicial/lighthouse-reporte.json` y `docs/auditorias/01-inicial/lighthouse-reporte.html` (hallazgos de contraste de la auditoría original).
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum), aplicable al texto pequeño de ubicación, descripción y enlace.
**Prioridad:** P2, por repetirse el mismo problema en las veinte tarjetas e incluir el enlace de acción.
**Estado de implementación:** corregida en `css/styles.css` mediante una regla acotada a `.destination-card`; se conserva el color del enlace al pasar el puntero.
**Estado de verificación:** mediciones renderizadas en navegador e inspección de estados normal y hover realizadas; capturas manuales pendientes. Lighthouse posterior aprobó `color-contrast`; el resultado corresponde a la versión/URL de esa ejecución guardada.

### Código anterior y corrección

Archivo afectado: [`css/styles.css`](../css/styles.css).

Las declaraciones anteriores usaban `#839087` en `.card-location`, `#6c7971` en la descripción y `#77847b` en `.card-map`. Quedaron consignadas como referencia histórica junto a la corrección. La nueva regla limitada a las tarjetas aplica `#5f6d65` a ubicación, descripción y enlace de mapa cuando no está bajo hover. Sobre el fondo `#fbfaf7`, el nuevo color da **5,21:1**. El hover conserva la regla existente `#a45f3a`, con contraste de **4,70:1**.

No se modificaron datos, estructura HTML, enlaces ni manejadores de eventos.

### Pruebas y estado

- **Revisión del alcance:** los selectores nuevos se restringen a `.destination-card` y a los tres tipos de texto identificados en los informes; no se cambiaron funciones.
- **Contraste renderizado:** comprobación con Playwright de ubicaciones, descripciones y enlaces de las veinte tarjetas en estado normal; texto `rgb(95, 109, 101)` sobre fondo `rgb(251, 250, 247)`, ratio **5,21:1**.
- **Estado hover del enlace:** inspección con Playwright del enlace de mapa; conserva el color `#a45f3a` con ratio **4,70:1** sobre el mismo fondo.
- **axe DevTools y Lighthouse:** no se repitieron después del cambio; no se afirma que los hallazgos de la auditoría original hayan desaparecido en una nueva ejecución.
- **Capturas manuales:** pendientes; son la única evidencia solicitada al usuario.

La implementación y las mediciones específicas de contraste están realizadas. No se declara conformidad global WCAG.

### Evidencias manuales requeridas

Tomar imágenes reales con el mismo navegador, viewport y tarjetas comparables. Si no existe una captura previa auténtica, dejarlo indicado sin reconstruir el estado anterior.

1. **`F05-ERR-A11Y-05-codigo-antes.png`** — Mostrar las declaraciones anteriores desde `git show 35bad14:css/styles.css`.
2. **`F05-ERR-A11Y-05-codigo-despues.png`** — Mostrar el comentario histórico ERR-A11Y-05 y los overrides activos, incluidos los selectores que conservan el hover.
3. **`F05-ERR-A11Y-05-tarjetas-antes.png`** — Captura original previa de las tarjetas que muestre ubicación, descripción y enlace de mapa; si no se conserva, señalarlo.
4. **`F05-ERR-A11Y-05-tarjetas-despues.png`** — Capturar tarjetas actuales con ubicación, descripción y enlace de mapa en estado normal.
5. **`F05-ERR-A11Y-05-enlace-mapa-hover.png`** — Capturar el enlace “Mapa” bajo hover, manteniendo visible la tarjeta y el estilo hover.
6. **`F05-ERR-A11Y-05-contraste-medido.png`** — Mostrar los colores efectivamente renderizados y la medición de 5,21:1 (normal) y 4,70:1 (hover).

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F05-ERR-A11Y-05-codigo-antes.png` aquí. Debe mostrar las reglas originales recuperadas del commit base F05.

> **Pendiente:** insertar `F05-ERR-A11Y-05-codigo-despues.png` aquí. Debe mostrar la referencia histórica y los selectores activos.

> **Pendiente:** insertar `F05-ERR-A11Y-05-tarjetas-antes.png` aquí. Debe ser una captura previa auténtica; si no existe, dejar constancia.

> **Pendiente:** insertar `F05-ERR-A11Y-05-tarjetas-despues.png` aquí. Debe mostrar el mismo tipo de tarjetas tras el cambio.

> **Pendiente:** insertar `F05-ERR-A11Y-05-enlace-mapa-hover.png` aquí. Debe mostrar el estado hover real del enlace.

> **Pendiente:** insertar `F05-ERR-A11Y-05-contraste-medido.png` aquí. Debe mostrar las mediciones realizadas en los estados normal y hover.

## Unidad F06 — Contraste del número en el kicker de mapas

### Hallazgo y origen

**ID interno:** ERR-A11Y-06
**Problema:** el número decorativo del kicker de la sección de mapas se renderizaba en `#a96843` sobre el fondo `#153f38`, con contraste de **2,63:1**, inferior al mínimo para texto pequeño.
**Fuente original:** `docs/auditorias/01-inicial/axe-dev-tools-base.json` y `docs/auditorias/01-inicial/axe-dev-tools-completo.json` (exports idénticos; regla `color-contrast`, selector `.section-kicker-light > span:nth-child(1)`). Lighthouse no enumeró este selector entre sus nodos fallidos; la relación se conserva atribuida a axe.
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum).
**Prioridad:** P2; se trata de un texto pequeño aislado dentro del encabezado de una sección.
**Estado de implementación:** corregida en `css/styles.css` con una regla exclusiva de `.map-section`.
**Estado de verificación:** color y fondo renderizados inspeccionados en navegador; capturas manuales pendientes. Lighthouse posterior aprobó `color-contrast`; no hay una auditoría nueva del árbol local completo tras las ediciones posteriores.

### Código anterior y corrección

Archivo afectado: [`css/styles.css`](../css/styles.css).

El primer `span` heredaba el color de acento `#a96843` de la regla global `.section-kicker > span:first-child`. Esa regla global sigue activa para las demás secciones; se añadió un override específico de mapas que utiliza el color claro existente `#c4d0c6`. El color activo mantiene la identidad visual clara del kicker y eleva el contraste sobre el fondo `#153f38`.

No se modificaron contenido, estructura ni comportamiento. Otros textos gráficos de la ilustración del mapa no forman parte de este cambio.

### Pruebas y estado

- **Revisión del alcance:** el nuevo selector está limitado a `.map-section .section-kicker-light`; no se cambió la regla global ni otras secciones.
- **Contraste renderizado:** Playwright confirmó texto `rgb(196, 208, 198)` sobre fondo `rgb(21, 63, 56)`, con ratio **7,32:1**.
- **axe DevTools y Lighthouse:** no se repitieron después del cambio; no se atribuyen resultados posteriores a esas herramientas.
- **Capturas manuales:** pendientes; son la única evidencia visual solicitada al usuario.

La implementación y la medición específica se completaron. No se declara conformidad global WCAG.

### Evidencias manuales requeridas

Tomar capturas reales con el mismo viewport y encuadre de la sección de mapas. Si la captura previa no se conserva, indicarlo en lugar de reconstruirla.

1. **`F06-ERR-A11Y-06-codigo-antes.png`** — Mostrar el estilo global del kicker antes del override, recuperado con `git show bb27957:css/styles.css`.
2. **`F06-ERR-A11Y-06-codigo-despues.png`** — Mostrar el comentario histórico y el selector específico `.map-section`.
3. **`F06-ERR-A11Y-06-mapas-antes.png`** — Captura previa auténtica de la sección de mapas y del kicker.
4. **`F06-ERR-A11Y-06-mapas-despues.png`** — Captura de la misma sección tras el cambio.
5. **`F06-ERR-A11Y-06-contraste-medido.png`** — Mostrar los colores renderizados y la medición posterior de contraste.

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F06-ERR-A11Y-06-codigo-antes.png` aquí. Debe mostrar la regla global anterior.

> **Pendiente:** insertar `F06-ERR-A11Y-06-codigo-despues.png` aquí. Debe mostrar el override limitado a mapas.

> **Pendiente:** insertar `F06-ERR-A11Y-06-mapas-antes.png` aquí. Debe ser una captura previa auténtica; si no existe, dejar constancia.

> **Pendiente:** insertar `F06-ERR-A11Y-06-mapas-despues.png` aquí. Debe mostrar el kicker corregido en el mismo encuadre.

> **Pendiente:** insertar `F06-ERR-A11Y-06-contraste-medido.png` aquí. Debe mostrar los colores renderizados y la medición real.

## Unidad F07 — Contraste del kicker y cifras de “Acerca del proyecto”

### Hallazgo y origen

**ID interno:** ERR-A11Y-07
**Problema:** los colores del número del kicker (`#a96843`, 4,23:1), su rótulo (`#76847a`, 3,75:1), el eyebrow (`#73867b`, 3,70:1) y las etiquetas de las cifras (`#78857d`, 3,69:1) no alcanzaban 4,5:1 sobre `#fbfaf7`. Lighthouse registra seis nodos fallidos (los tres rótulos del kicker/eyebrow y tres etiquetas de cifras); axe registra cinco en su export.
**Fuentes originales:** `docs/auditorias/01-inicial/axe-dev-tools-base.json` y `docs/auditorias/01-inicial/axe-dev-tools-completo.json` (exports idénticos; regla `color-contrast`, selectores de `.about-copy` y `.about-stats`); `docs/auditorias/01-inicial/lighthouse-reporte.json` y `docs/auditorias/01-inicial/lighthouse-reporte.html` (regla de contraste con seis nodos afectados).
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum).
**Prioridad:** P2, por afectar seis textos auxiliares del bloque de presentación.
**Estado de implementación:** corregida en `css/styles.css` mediante selectores limitados a `.about-copy` y `.about-stats`.
**Estado de verificación:** inspección y medición de colores renderizados en navegador; capturas manuales pendientes. Lighthouse posterior aprobó `color-contrast`; no hay una auditoría nueva del árbol local completo tras las ediciones posteriores.

### Código anterior y corrección

Archivo afectado: [`css/styles.css`](../css/styles.css).

Los textos afectados heredaban cuatro valores claros de las reglas generales o del bloque de estadísticas. Se conservaron esos valores en el comentario histórico `ERR-A11Y-07`; las reglas globales no se alteraron. Los cuatro tipos de texto de esta sección ahora usan `#5f6d65`, con contraste de **5,21:1** sobre `#fbfaf7`.

No se modificaron el texto, las cifras ni la estructura del componente.

### Pruebas y estado

- **Revisión del alcance:** las reglas nuevas se limitan al kicker y eyebrow de `.about-copy` y a los `span` de `.about-stats`.
- **Contraste renderizado:** Playwright comprobó el texto `rgb(95, 109, 101)` sobre `rgb(251, 250, 247)`, con ratio **5,21:1** en los elementos afectados.
- **Regresión visual/funcional:** no se cambiaron contenido, datos ni comportamiento de la sección.
- **axe DevTools y Lighthouse:** no se repitieron después del cambio; no se atribuyen resultados nuevos a esas herramientas.
- **Capturas manuales:** pendientes; son la única evidencia visual solicitada al usuario.

La implementación y la medición específica se realizaron. No se declara conformidad global WCAG.

### Evidencias manuales requeridas

Usar el mismo viewport y encuadre para las capturas de comparación. La vista previa debe proceder de una captura auténtica si existe; no reconstruirla.

1. **`F07-ERR-A11Y-07-codigo-antes.png`** — Mostrar los colores originales de las reglas generales y de `.about-stats span`, recuperados con `git show 35eaa87:css/styles.css`.
2. **`F07-ERR-A11Y-07-codigo-despues.png`** — Mostrar el comentario histórico y los nuevos selectores restringidos al bloque “Acerca del proyecto”.
3. **`F07-ERR-A11Y-07-acerca-antes.png`** — Captura auténtica previa que muestre el kicker, eyebrow y las etiquetas de estadísticas; si no se conserva, indicarlo.
4. **`F07-ERR-A11Y-07-acerca-despues.png`** — Capturar los mismos elementos después del cambio.
5. **`F07-ERR-A11Y-07-contraste-medido.png`** — Mostrar la inspección de color/fondo renderizados y el ratio posterior.

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F07-ERR-A11Y-07-codigo-antes.png` aquí. Debe mostrar las declaraciones previas recuperadas del commit base F07.

> **Pendiente:** insertar `F07-ERR-A11Y-07-codigo-despues.png` aquí. Debe mostrar el comentario histórico y los selectores activos.

> **Pendiente:** insertar `F07-ERR-A11Y-07-acerca-antes.png` aquí. Debe ser una captura previa auténtica; si no existe, dejar constancia.

> **Pendiente:** insertar `F07-ERR-A11Y-07-acerca-despues.png` aquí. Debe mostrar los mismos textos tras la corrección.

> **Pendiente:** insertar `F07-ERR-A11Y-07-contraste-medido.png` aquí. Debe mostrar la inspección real de los colores renderizados.

## Unidad F08 — Contraste del texto de fallback de imagen

### Hallazgo y origen

**ID interno:** ERR-A11Y-08
**Problema:** el texto del fallback de imagen usaba `#566a5d` sobre un degradado claro y la regla avanzada de axe registró contrastes entre **3,68:1 y 4,20:1**.
**Fuente original:** `docs/auditorias/01-inicial/axe-dev-tools-base.json` y `docs/auditorias/01-inicial/axe-dev-tools-completo.json` (exports idénticos; regla `advanced/text-contrast`, selector `.card-image-wrap > .image-fallback[role="img"]`).
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum), aplicable al texto visible de 18 px.
**Prioridad:** P2, porque el mensaje visible de reemplazo debe seguir siendo legible cuando falta una fotografía.
**Estado de implementación:** corregida en `css/styles.css`; el estilo compartido cubre el fallback de tarjeta y el del diálogo. La corrección fue comprometida en `9f53ffb`; esta regularización corrige el identificador ERR-A11Y-09 que se había consignado por error en el comentario y el informe anteriores, y la registra como F08/ERR-A11Y-08.
**Estado de verificación:** la validación actual de navegador confirmó el fallback visible en tarjeta y diálogo. El contraste del texto del fallback de la tarjeta se calculó en ambos extremos del degradado; el estilo del diálogo comparte esa regla. Axe inicial reportó el fallback con contraste bajo; el JSON axe posterior ya no lo incluye entre sus cuatro incidencias. Ese reporte posterior apoya la corrección, pero no sustituye una nueva auditoría del árbol local completo.

### Código anterior y corrección

Archivo afectado: [`css/styles.css`](../css/styles.css).

El color histórico `#566a5d` se conserva en un comentario y ahora está identificado como ERR-A11Y-08. Se cambió a `#3f5147` sin modificar el degradado, el texto ni la generación del fallback. Contra los extremos del degradado (`#dce4d8` y `#b8c8b3`), el nuevo color obtiene **6,51:1** y **4,82:1**, respectivamente; ambos superan el mínimo de 4,5:1.

### Pruebas y estado

- **Fallback visible:** Playwright encontró «Fotografía no disponible en esta versión» en una tarjeta y confirmó el estilo activo.
- **Contraste:** cálculo sobre ambos extremos del degradado computado: **6,51:1** en `#dce4d8` y **4,82:1** en `#b8c8b3`.
- **Diálogo:** se abrió Plaza de Banderas; `#dialog-image` quedó oculto y `#dialog-image-fallback` visible, con el nombre accesible «Fotografía no disponible».
- **Regresión:** no se cambió `js/main.js`, el texto alternativo, el `role="img"` ni el comportamiento que muestra el fallback.
- **Auditorías globales:** axe DevTools y Lighthouse no se repitieron después de la corrección.
- **Evidencias manuales:** capturas pendientes. No se conservan capturas dirigidas D0 previas a este cambio; no se reconstruirán como si fueran originales.

No se declara conformidad global WCAG ni se afirma que el hallazgo haya desaparecido de una nueva ejecución de axe.

### Evidencias pendientes

1. **`F08-ERR-A11Y-08-codigo-antes.png`** — Regla original `#566a5d` recuperada con `git show 2750104:css/styles.css`.
2. **`F08-ERR-A11Y-08-codigo-despues.png`** — Regla activa `#3f5147` y comentario ERR-A11Y-08.
3. **`F08-ERR-A11Y-08-fallback-antes.png`** — Captura previa auténtica de Plaza de Banderas; si no existe, dejar constancia, sin reconstruirla.
4. **`F08-ERR-A11Y-08-fallback-despues.png`** — Fallback real en la tarjeta actual.
5. **`F08-ERR-A11Y-08-dialogo-despues.png`** — Captura de evidencia visual del fallback del diálogo ya probado; no existe una captura guardada en esta validación.
6. **`F08-ERR-A11Y-08-contraste-medido.png`** — Colores computados y ratios de ambos extremos del degradado.

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F08-ERR-A11Y-08-codigo-antes.png` aquí.
>
> **Pendiente:** insertar `F08-ERR-A11Y-08-codigo-despues.png` aquí.
>
> **Pendiente:** insertar `F08-ERR-A11Y-08-fallback-antes.png` aquí; si no existe evidencia previa, dejar constancia.
>
> **Pendiente:** insertar `F08-ERR-A11Y-08-fallback-despues.png` aquí.
>
> **Pendiente:** insertar `F08-ERR-A11Y-08-dialogo-despues.png` aquí.
>
> **Pendiente:** insertar `F08-ERR-A11Y-08-contraste-medido.png` aquí.

## Unidad F09 — Semántica de encabezados y contraste del texto del mapa

**Hallazgos:** OBS-A11Y-09 (`.card-location`) y OBS-A11Y-10 (`.label-two`).
**Estado:** `.card-location` no requiere cambio semántico según la estructura actual; `.label-two` tenía contraste insuficiente y se corrigió el color. La comprobación conservadora del fondo estratificado en navegador/CSS da al menos 5.17:1; confirmar que axe deja de reportarlo requiere una nueva ejecución de la extensión.

- Para OBS-A11Y-09, axe DevTools 4.13.0 marcó tres `.card-location` mediante `advanced/heading-markup`. El código genera cada tarjeta como `<article>` con nombre del lugar en `<h3>` y ubicación auxiliar en `<p>`; convertir la ubicación en encabezado añadiría niveles redundantes y no corresponde a la jerarquía de contenido. No se cambia el marcado. Las alertas avanzadas no equivalen por sí solas a un fallo de WCAG 1.3.1.
- Para OBS-A11Y-10, el informe de axe DevTools 4.13.0 registró `.label-two` con contraste entre 4.13:1 y 4.30:1 sobre el fondo oscuro, inferior al mínimo 4.5:1 de texto normal. Se cambió el color a `#c4d0c6`, preservando su tamaño y ubicación visual. El texto está en el gráfico con `aria-hidden="true"`, pero sigue siendo visible y por ello debe mantener contraste legible.
- La corrección anterior fue retirada mientras faltaba evidencia concreta; el informe posterior de axe aporta ahora el selector, colores y ratios que respaldan la corrección aplicada.
- **Comprobación de contraste con las capas de fondo:** el color computado es `rgb(196, 208, 198)`. Sobre el fondo base `rgb(21, 63, 56)` da 7.32:1; aplicando conservadoramente las opacidades máximas simultáneas de las capas de trama/radial del mapa, el fondo estimado más claro es `rgb(47, 86, 74)` y el ratio es 5.17:1. Este cálculo cubre las capas CSS definidas, no es una lectura de píxeles de captura.
- **Revisión estructural:** cada tarjeta presenta el nombre del lugar con `<h3>` y la ubicación en `<p>`. No se cambia la semántica para silenciar una regla avanzada no determinista.
- **Prueba automática pendiente:** repetir axe DevTools/Lighthouse después del cambio para confirmar la desaparición de la alerta de contraste.

### Navegación y `aria-current`

El menú principal contiene dos enlaces distintos con `href="#destinos"` que aplican filtros. Marcar arbitrariamente el primero como ubicación actual anunciaba «Naturaleza» aunque el usuario no hubiese seleccionado esa categoría. Ahora `aria-current="location"` se aplica solo cuando hay un único enlace principal para la sección visible; para destinos duplicados no se declara una categoría como ubicación actual.

La inspección automatizada del navegador confirmó un único `aria-current` para «Inicio», «Rutas», «Mapa» y «La guía» al desplazarse a esas secciones; ninguno para `#destinos`, cuyos enlaces no identifican una categoría única. El filtro de Naturaleza conserva `aria-pressed="true"` y muestra ocho tarjetas. Al cerrar el diálogo, el foco vuelve al botón que lo abrió.

## Unidad F10 — Verificaciones manuales de Lighthouse

**Hallazgo:** VER-A11Y-11.
**Estado:** parcialmente comprobada con navegador automatizado; la lista manual de Lighthouse no equivale a aprobar o fallar la conformidad. Se verificó teclado para el enlace de salto, el diálogo y el menú móvil, además de landmarks/estructura y estados de controles. No se dispone de lector de pantalla ni de ejecución final de Lighthouse.

Comprobaciones realizadas: el enlace de salto recibe foco con Tab y se hace visible; el diálogo modal mantiene Tab dentro del diálogo y devuelve foco al disparador al cerrar; el menú móvil se abre con Enter y se cierra con Escape; se comprobó `aria-expanded`, `aria-pressed`, la región de resultados y los landmarks semánticos. También se observó que el contenido oculto del menú no se muestra cerrado.

Pendiente: recorrer la página completa solo con teclado para certificar el orden de tabulación y evaluar correspondencia visual/DOM en todos los breakpoints; probar lectura real con tecnología de asistencia. No se asigna estado aprobado a esas pruebas sin dicha verificación.

## Unidad F11 — Completar evidencia de WAVE

**Hallazgo:** SRC-A11Y-12.
**Estado:** la exportación textual de 14.566 caracteres/220 líneas fue examinada elemento por elemento. No incluye selectores DOM explícitos, pero las 13 anotaciones “CONTRAST ERRORS: Very low contrast” aparecen junto a textos/iconos identificables en el orden de lectura y se relacionaron con el HTML/CSS. El error separado del contador “Errors: 1” no está identificado en los archivos guardados. No se dispone de URL/versión/fecha verificable de WAVE en la exportación.

Los resúmenes WAVE muestran:

| Medida | Inicial | Posterior | Lectura |
|---|---:|---:|---|
| Errors | 1 | 1 | El error continúa, pero el resumen no identifica su nodo; no puede confirmarse que sea el mismo sin detalle por elemento. |
| Contrast Errors | 118 | 13 | Los totales por sí solos no demuestran la causa de la diferencia. La exportación textual posterior conserva 13 marcadores para analizar por elemento; el usuario aclara que desactivó la visualización de Styles para copiar los detalles. |
| Alerts | 110 | 110 | El total no cambia; `Very small text` requiere evaluación contextual y no es automáticamente un incumplimiento. |
| Features | 23 | 23 | Indicador informativo, no conteo de fallos. |
| Structure | 31 | 31 | Igual conteo general; no demuestra por sí solo equivalencia semántica. |
| ARIA | 89 | 90 | Conteo del panel; no implica que haya aparecido un fallo nuevo. |
| AIM Score | 1.7/10 | 6.2/10 | Cambió; los resúmenes no explican por sí solos las causas de cada diferencia, por lo que no se atribuye todo el cambio a una sola corrección. |

La exportación muestra 13 marcadores junto a estos elementos: la flecha de “Ver todos los lugares” (1); los tres pictogramas y las tres flechas decorativas de las rutas (6); los cuatro contadores de filtros no seleccionados (4); el placeholder de búsqueda (1); y el grupo ornamental “G·” de “La guía” (1). La revisión del CSS real encontró colores/opacidad insuficientes en esos componentes, pese a que la vista del navegador usada para comprobar el sitio exponía temporalmente valores contrastados en CSSOM que no estaban en el archivo fuente. Se actualizaron los valores del CSS fuente; los ratios y estados se detallan en el cierre del 22 de octubre. Esa edición del código no se declara como un nuevo resultado de WAVE.

La exportación también muestra dos `aria-current="location"` en «Naturaleza» y «Ocio y comercio», estado que ya no reproduce el JS actual. «Very small text» es una alerta, no incumplimiento automático. El gráfico del mapa está marcado `aria-hidden`; por ello WAVE no sirve en este caso para valorar el nombre accesible de `.label-two`, aunque el contraste visual sí debe ser legible.

Se corrigió el CSS fuente para los trece elementos identificados y se comprobaron sus colores computados después de recargar el servidor local. Pendiente: volver a evaluar WAVE sobre la página recargada y conservar la salida completa con sus detalles. El usuario aclara que Styles OFF se usó para copiar las anotaciones; ese estado de visualización no invalida el texto exportado ni demuestra por sí mismo que la evaluación omitiera estilos. La cifra “Errors: 1” del resumen permanece sin atribución; no se declara resuelta. No se reutiliza ni sobrescribe la captura anterior.

## Evidencias y límites pendientes

- Las capturas D0 dirigidas por componente no se tomaron antes de F01–F08. No presentar capturas del estado actual ni capturas reconstruidas desde CSS como si fueran evidencia visual anterior. Si se conserva una captura original auténtica, puede incorporarse; de lo contrario, documentar su ausencia y capturar D1.
- Las capturas D1 y de estados de interacción no se generaron; las verificaciones descritas son resultados de inspección automatizada del navegador, no capturas ni auditorías de extensión.
- Los cinco archivos originales y los cinco archivos posteriores de `docs/auditorias/` permanecen sin seguimiento y no fueron modificados. Se deben mantener fuera del commit de código; se propone un commit documental separado para los informes y este informe si se aprueba su incorporación al repositorio.
- Los dos JSON iniciales de axe eran idénticos. En cambio, la exportación textual de WAVE posterior sí permite ubicar las 13 anotaciones de contraste por su texto y orden, aunque no proporciona selectores CSS; el error único del resumen WAVE continúa sin identificar.
- El informe registra ratios y pruebas puntuales, pero no una nueva auditoría axe/Lighthouse/WAVE completa, lectura con tecnología de asistencia ni conformidad global WCAG.

## Validación final disponible en este entorno

Se confirmó la rama `develop` y que los dos JSON iniciales de axe son idénticos (182.583 bytes y mismo SHA-256). No hay `node`, `npm` ni `npx` instalados; el intento de ejecutar Lighthouse con `npx` falló porque el comando no existe. No se generaron archivos nuevos de axe/Lighthouse ni se alteraron los reportes almacenados.

### Comparación de resultados automáticos guardados

Los informes posteriores disponibles no fueron generados tras la última tanda de cambios locales; esta tabla compara exclusivamente los archivos guardados, no certifica el estado final del árbol de trabajo.

| Herramienta | Inicial guardado | Posterior guardado | Diferencia registrada y límite |
|---|---|---|---|
| axe DevTools | 91 incidencias: 86 `color-contrast`, 3 `advanced/heading-markup` y 2 `advanced/text-contrast`; versión 4.13.0, 17-oct-2026. | 4 incidencias: 3 `advanced/heading-markup` en `.card-location` y 1 `advanced/text-contrast` en `.label-two`; versión 4.13.0, 21-oct-2026. | Se redujeron las incidencias registradas; el contraste avanzado de `.label-two` persistía en el JSON posterior y se corrigió después. Los reportes son del mismo motor, pero distintas URL (`localhost`/`127.0.0.1`) y estados del código. |
| Lighthouse | Accesibilidad 0.96; `color-contrast` con 86 nodos y dos `label-content-name-mismatch`; versión 13.4.1, `localhost`, 17-oct-2026. | Accesibilidad 1.00; `color-contrast` aprobado y dos `label-content-name-mismatch`; versión 13.5.0, `127.0.0.1`, 21-oct-2026. | El contraste estándar dejó de figurar como fallo en el reporte guardado. Las dos marcas seguían reportadas en esa ejecución; los cambios locales posteriores simplificaron el nombre accesible. No es auditoría del código actual. |
| WAVE | 1 error, 118 contrast errors, 110 alerts, 23 features, 31 structure, 89 ARIA; Styles ON al capturar. | 1 error, 13 contrast errors, 110 alerts, 23 features, 31 structure, 90 ARIA; Styles OFF al copiar los detalles. | El estado del interruptor en la captura no basta para atribuir la diferencia de conteos ni para descartar los hallazgos exportados. El texto posterior permite examinar 13 marcadores de contraste; el error agregado sigue sin detalle individual. |

No se suman conteos entre herramientas: axe, Lighthouse y WAVE pueden registrar los mismos elementos, reglas o estados mediante métodos diferentes.

La ejecución de navegador contra `http://127.0.0.1:8000/` después de los cambios locales verificó:

- El árbol accesible expone las dos marcas como «Descubre Cúcuta», con links sin `aria-label` y monograma decorativo oculto.
- Existe un único `<h1>`, las tarjetas nombran cada lugar con `<h3>` y ninguna imagen carece del atributo `alt`.
- El enlace de salto recibe foco con Tab y se vuelve visible.
- Los enlaces únicos de navegación marcan `aria-current` para Inicio, Rutas, Mapa y La guía; para Destinos no se elige arbitrariamente entre dos filtros. En cada estado probado hubo como máximo un enlace actual.
- El filtro Naturaleza mantiene `aria-pressed="true"` y deja 8 tarjetas; la búsqueda de «cristo rey» deja una; una consulta inexistente muestra el estado vacío.
- El diálogo de Plaza de Banderas abre con el fallback visible, mantiene Tab dentro del diálogo, cierra con Escape y devuelve el foco al botón disparador.
- El menú móvil se abre con Enter, actualiza `aria-expanded`, y se cierra con Escape.
- No se registraron errores de consola ni errores de página durante esa ejecución.
- El contraste de `.label-two` con `#c4d0c6` fue calculado respecto al peor fondo compuesto por las capas CSS declaradas: 5.17:1 (el cálculo sobre el color base es 7.32:1). No sustituye una medición de píxeles ni axe.
- Después de actualizar el CSS para los 13 marcadores de WAVE, se recargó el sitio y se comprobó que el CSS servido contiene los nuevos valores: flechas 6.23:1; pictogramas 4.69:1; contadores inactivos 4.76:1 (seleccionado 11.67:1); placeholder 5.14:1; “G” ornamental 4.70:1. Son valores renderizados/cálculos del navegador, no una nueva ejecución de WAVE.

Estas comprobaciones automatizadas de interacción no sustituyen la auditoría completa de extensiones ni una revisión con lector de pantalla. Los informes guardados más recientes siguen siendo los de la fecha mostrada en sus metadatos, previos a los cambios locales finales.

## Cierre y revisión de verificación del 21–22 de octubre de 2026

Esta sección registra las comprobaciones realizadas sobre el árbol actual de `develop` el 21 y 22 de octubre de 2026 (UTC−05:00). Las auditorías guardadas se mantienen como evidencia histórica y no se reemplazan por las comprobaciones del navegador realizadas en estas fechas.

### Entorno y herramientas disponibles

- `node`, `npm`, `npx` y el ejecutable `lighthouse` no están disponibles en PATH ni en las ubicaciones comunes comprobadas. El repositorio tampoco contiene `package.json`, scripts de prueba o configuración de Playwright/Vitest/Jest.
- Chrome y Edge están instalados. En los directorios de extensiones del perfil predeterminado de ambos navegadores no aparecen axe DevTools ni WAVE.
- En Chrome `Profile 1` sí están instaladas **axe DevTools - Web Accessibility Testing 4.139.0** y **WAVE Evaluation Tool 3.3.1.0**. La página de este cierre se ejecutó en el navegador integrado de automatización, que no comparte ese perfil ni sus extensiones; por tanto, ninguna de esas dos extensiones se ejecutó en esta verificación.
- No se generó una nueva auditoría de Lighthouse. Aunque Chrome está instalado, no hay CLI de Lighthouse disponible y la interfaz de navegador expuesta para esta tarea no permite abrir ni controlar su panel DevTools Lighthouse.
- No se guardaron nuevos JSON, HTML ni capturas de auditoría. `docs/auditorias/01-inicial/` conserva sus cinco archivos y `docs/auditorias/02-posterior/` conserva los cinco archivos que ya existían. Los informes posteriores siguen siendo históricos y no representan esta ejecución ni el código final actual.

### Comprobaciones ejecutadas sobre el sitio

Se abrió `index.html` de la rama actual en el navegador integrado, se interactuó con la página y se inspeccionó su DOM/árbol accesible. Los resultados comprobables fueron:

- Hay un único `<h1>`, los encabezados observados siguen el orden H1–H2–H3 y las dos marcas exponen el nombre «Descubre Cúcuta». No se encontraron botones sin nombre ni imágenes sin atributo `alt`.
- El primer Tab enfoca «Saltar al contenido» y el enlace se muestra en pantalla.
- La búsqueda de un término inexistente deja cero tarjetas y expone el estado «0 todos los lugares…»; el filtro Naturaleza selecciona el botón mediante `aria-pressed="true"` y presenta ocho tarjetas.
- El diálogo de Plaza de Banderas presenta el fallback accesible «Fotografía no disponible», recibe el foco al abrirse, se cierra con Escape y devuelve el foco al botón disparador.
- A 360 px de ancho, el menú móvil pasa a `aria-expanded="true"` y se muestra; Escape lo cierra y restablece `aria-expanded="false"`.
- Se comprobó el ancho del documento en viewports de 320, 360, 390, 768, 1024 y 1280 px; en todos `scrollWidth` fue igual a `clientWidth`, sin desbordamiento horizontal.
- No se observaron errores de consola ni excepciones de página durante esa interacción.
- Se retiró `src=""` de la imagen del diálogo en `index.html`: antes de abrirse, el navegador resolvía el atributo vacío a la URL del documento. El JavaScript asigna `src` al mostrar una fotografía y lo elimina cuando debe mostrar el fallback; el atributo no es necesario en el HTML inicial. Es una corrección de marcado/comportamiento de carga, no se registra como incumplimiento WCAG confirmado.
- Tras retirar el atributo vacío, se comprobó que el diálogo sigue exponiendo el fallback y que la carga inicial no solicita el documento como imagen.
- Se recalcularon los contrastes de las correcciones de texto: marca `#66746c` sobre `#fbfaf7`, **4.70:1**; `.label-two` `#c4d0c6` frente al fondo compuesto más claro estimado por las capas CSS del mapa (`rgb(47, 86, 73)`), **5.17:1**; fallback `#3f5147` frente a los extremos del degradado, **6.51:1** y **4.82:1**. El cálculo del mapa es una composición conservadora de las capas CSS, no una lectura de píxeles ni un resultado de axe.

Las pruebas del navegador integrado son comprobaciones de interacción y estructura; **no son ejecuciones de axe DevTools, WAVE ni Lighthouse**, ni certifican conformidad WCAG. Tampoco sustituyen una prueba con lector de pantalla o ampliación real del texto al 200 %.

### Comprobación tras revisar el detalle de WAVE

La exportación textual posterior contiene **13 marcadores `Very low contrast`, 109 alertas `Very small text` y una alerta `Noscript element`**. En el texto exportado no aparece un marcador `ERRORS:` independiente del rótulo `CONTRAST ERRORS`; por eso el error único del resumen no puede atribuirse a un nodo con esta evidencia. No se eliminó el `<noscript>`: su texto explica qué hacer si JavaScript está desactivado. Los elementos `aria-hidden` señalados son iconos/flechas decorativos o una ilustración redundante; los enlaces y controles conservan nombres textuales.

En esta revisión se subieron a **12 px** los tamaños visibles menores de 12 px en `css/styles.css` y se agregó `role="group"` a `.route-list` y `.about-stats`, cuyos `div` tenían `aria-label` sin rol de grupo. Después de recargar la pestaña compartida, se comprobó en el DOM que ambos tienen `role="group"` y que no hay texto visible menor de 12 px. En anchos de 320, 360, 390, 768, 1024 y 1280 px no hubo desbordamiento horizontal. Se verificaron las interacciones del menú móvil (abrir y cerrar con Escape), filtro Naturaleza (8 tarjetas), búsqueda “cristo rey” (1 resultado), diálogo de Plaza de Banderas y retorno del foco; no se registraron errores JavaScript.

Los ratios recalculados en el navegador para los 13 elementos anotados son: flechas 6.23:1, pictogramas 4.69:1, contadores inactivos 4.76:1 y activo 11.67:1, placeholder 5.14:1, “G” 4.70:1 y punto 6.23:1. Son comprobaciones sobre colores computados y los fondos CSS declarados, no resultados de una ejecución nueva de WAVE. La pestaña integrada inicialmente conservaba el DOM anterior a los últimos cambios locales (no mostraba los roles/tamaños actualizados); tras recargar sí los reflejó. Esto hace posible que una evaluación lanzada antes de recargar haya usado CSS anterior, pero no demuestra qué ocurrió en la ejecución WAVE reportada por el usuario. La auditoría WAVE/axe actual sigue pendiente y los avisos de contraste no se declaran cerrados hasta comparar los nodos de esa ejecución.

### Estado final y pendientes específicos

| Estado | Resultado |
|---|---|
| Corregido y verificado | F02–F08; contrastes de marca, rutas, explorador, tarjetas, mapa y estadísticas medidos; Lighthouse posterior aprobó el contraste estándar; F08 validado en navegador y el fallback ya no aparece como incidencia en axe posterior. |
| Corregido pero pendiente de nueva auditoría | F01: el nombre accesible actual se comprobó en el árbol accesible, pero Lighthouse posterior aún reportó los dos enlaces antes de quitar sus nombres personalizados localmente. OBS-A11Y-10: `.label-two` cumple según el cálculo actual, pero axe posterior registró los colores anteriores. |
| No confirmado | OBS-A11Y-09: la alerta avanzada de `.card-location` no acredita que la ubicación deba ser un encabezado; el nombre del destino ya es `<h3>` y la ubicación es metadato en un párrafo. |
| Pendiente | F11: el único error WAVE del contador Errors no puede identificarse en la exportación/resúmenes guardados. Los totales de contraste 118/13 no se atribuyen como mejora comparable porque las capturas se tomaron con estados distintos del control Styles; los 13 marcadores textuales sí se analizan individualmente. |
| Pendiente | F10: prueba con lector de pantalla, recorrido completo del orden de foco y ampliación real del texto al 200 %. |

Para producir evidencia final comparable, ejecutar las herramientas sobre la misma URL, versión del código, viewport y estado de filtros; guardar los resultados con nombres y fecha nuevos dentro de `docs/auditorias/02-posterior/`, sin reemplazar los archivos existentes. Conservar la exportación completa de WAVE y anotar el estado de Styles al capturar/copiar los detalles, sin tratar el interruptor de visualización como sustituto del escaneo ni como razón para omitir los hallazgos concretos.

### Matriz final de hallazgos

| Hallazgo original / regla | Estado inicial y evidencia guardada | Corrección aplicada | Archivos del proyecto | Comprobación disponible | Estado final |
|---|---|---|---|---|---|
| F01 / ERR-A11Y-01 — `label-content-name-mismatch` | Lighthouse inicial reportó dos enlaces de marca cuyo nombre accesible omitía texto visible. Lighthouse posterior aún reportó ambos antes de que se quitaran localmente los `aria-label`. | Se quitaron los `aria-label` personalizados; los enlaces usan el texto visible «Descubre Cúcuta» y el monograma es decorativo. | `index.html`, `css/styles.css` | El árbol accesible del navegador actual muestra ambos enlaces con el texto de marca y sin `aria-label`. La auditoría posterior guardada no cubre este marcado local. | **Corregido pero pendiente de nueva auditoría** |
| F02 / ERR-A11Y-02 — contraste de marca | Axe/Lighthouse iniciales detectaron 4.49:1 en el texto de la marca. | Se oscureció el texto de marca a `#66746c`. | `css/styles.css` | Cálculo actual con el fondo `#fbfaf7`: 4.70:1. Lighthouse posterior aprobó `color-contrast`; el cambio de contraste consta en un commit anterior a esa ejecución. | **Corregido y verificado** |
| F03 / ERR-A11Y-03 — contraste de rutas | Se reportaron textos de kicker, eyebrow, números y descripciones de ruta bajo 4.5:1; quedan incluidos en los 86 nodos iniciales de contraste. | Se aplicaron colores de texto locales de mayor contraste en la sección de rutas, conservando estructura y presentación. | `css/styles.css` | Lighthouse posterior no registró fallo de `color-contrast` y obtuvo accesibilidad 1.00. Los cambios de esta unidad preceden a esa ejecución; URL `localhost`/`127.0.0.1` difiere entre informes. | **Corregido y verificado** |
| F04 / ERR-A11Y-04 — contraste del explorador | Se reportaron textos de encabezado, nota, controles y estado de resultados con contraste insuficiente. | Se ajustaron los textos auxiliares y filtros no seleccionados del explorador. | `css/styles.css` | Lighthouse posterior aprobó el chequeo estándar de contraste. La búsqueda y el estado vacío funcionan en navegador. | **Corregido y verificado** |
| F05 / ERR-A11Y-05 — contraste de tarjetas | Se reportaron ubicación, descripción y enlace de mapa en los 86 nodos iniciales de contraste. | Se oscurecieron los textos auxiliares y el enlace de mapa en reposo sin cambiar su estado hover. | `css/styles.css` | Lighthouse posterior aprobó `color-contrast`; tarjetas y acciones se inspeccionaron en navegador. | **Corregido y verificado** |
| F06 / ERR-A11Y-06 — contraste de la sección mapa | El kicker numerado del mapa tenía contraste insuficiente sobre el fondo oscuro. | Se cambió su color a `#c4d0c6`. | `css/styles.css` | Lighthouse posterior aprobó el contraste estándar; inspección del código confirma la regla aplicada al kicker. | **Corregido y verificado** |
| F07 / ERR-A11Y-07 — contraste de cifras de “La guía” | Los textos auxiliares de estadísticas estaban bajo el contraste mínimo en el informe inicial. | Se oscurecieron los textos pequeños de estadísticas preservando el diseño. | `css/styles.css` | Lighthouse posterior aprobó el chequeo estándar de contraste. | **Corregido y verificado** |
| F08 / ERR-A11Y-08 — fallback de imagen | Axe inicial marcó el texto del fallback sobre el degradado con 3.68:1–4.20:1. | Se cambió el texto a `#3f5147`; se conservó el fallback para tarjeta y diálogo. | `css/styles.css`, `js/main.js`, `index.html` | Ratios recalculados sobre ambos extremos del degradado: 6.51:1 y 4.82:1. El navegador mostró el fallback de tarjeta y diálogo y el diálogo devolvió el foco. Axe posterior ya no reportó este selector, aunque sí mantuvo el aviso avanzado de `.label-two`. | **Corregido y verificado** |
| F09 / OBS-A11Y-09 — `advanced/heading-markup` en `.card-location` | Axe inicial y posterior marcaron tres párrafos de ubicación en tarjetas. | No se convirtieron en encabezados: cada destino ya tiene su `<h3>`; la ubicación es metadato, no encabezado de sección. | Sin cambio por este hallazgo; marcado actual en `js/main.js` | Revisión del HTML generado confirma `<article>`, ubicación como `<p>` y nombre del lugar como `<h3>`. La regla es avanzada/no determinista y no demuestra por sí sola un fallo WCAG 1.3.1. | **No confirmado** |
| F09 / OBS-A11Y-10 — contraste de `.label-two` | Axe posterior reportó 4.13:1–4.30:1 con los colores anteriores. | Se cambió a `#c4d0c6`, sin alterar el gráfico decorativo. | `css/styles.css` | Composición conservadora de capas CSS: 5.17:1. El resumen de Axe posterior usa valores de texto anteriores a la regla actual; no se atribuye a la auditoría la corrección local. | **Corregido pero pendiente de nueva auditoría** |
| F10 / VER-A11Y-11 — verificaciones manuales | Lighthouse presenta verificaciones que no se reducen a una puntuación automática. | Se comprobaron interacciones realizables por navegador: enlace de salto, navegación por teclado, filtros, menú, diálogo, Escape y retorno del foco. | `index.html`, `css/styles.css`, `js/main.js` | En navegador, el enlace de salto se hizo visible, menú móvil abrió/cerró, diálogo mantuvo Tab dentro y devolvió foco. Sin errores de consola. | **Pendiente** — lector de pantalla, orden completo del foco y ampliación real al 200 % no se probaron. |
| F11 / SRC-A11Y-12 — 13 marcadores “Very low contrast” de la exportación WAVE | La exportación posterior identifica la flecha de “Ver todos”, tres pictogramas y tres flechas de rutas, cuatro contadores inactivos, placeholder y el grupo ornamental “G·”: 13 marcadores. La captura de resumen muestra Styles OFF; el usuario aclara que lo desactivó para copiar los detalles, que se consideran evidencia y se contrastan con el CSS. | Los colores/opacidades de esos componentes ya se habían ajustado en `css/styles.css`; en esta revisión se volvió a recargar y comprobar la hoja servida. | `css/styles.css` | Ratios calculados sobre colores/fondos CSS actuales: flechas 6.23:1; pictogramas 4.69:1; contadores inactivos 4.76:1; contador seleccionado 11.67:1; placeholder 5.14:1; “G” 4.70:1 y punto ornamental 6.23:1. El usuario informa que WAVE todavía marca los mismos avisos, pero no se adjuntó el detalle de esa ejecución actual; estos cálculos no la sustituyen. | **Pendiente de conciliación**: no cambiar colores a ciegas ni declarar resuelto mientras haya avisos actuales sin identificar por nodo. |
| F11 / SRC-A11Y-12 — error único del resumen WAVE | Las capturas inicial y posterior muestran Errors: 1, sin selector ni detalle que identifique su causa. | No se hizo un cambio especulativo para ese error. | Ninguno identificado | Las capturas de resumen y la exportación textual disponibles no exponen el elemento asociado al contador. | **Pendiente** — no se puede atribuir ni corregir con la evidencia guardada. |
| WAVE — `Very small text` | La exportación posterior contiene 109 anotaciones de texto muy pequeño asociadas a etiquetas y metadatos de la interfaz (rutas, controles, tarjetas, mapa, estadísticas y pie). | Se aumentaron a 12 px los estilos visibles que estaban por debajo de 12 px, manteniendo texto de solo lector de pantalla en su patrón oculto. | `css/styles.css` | Inspección DOM/CSS tras recarga: no se encontró texto visible inferior a 12 px en anchos de 320, 360, 390, 768, 1024 y 1280 px; no hubo desbordamiento horizontal. | **Corregido en código; pendiente de nueva auditoría WAVE** para comprobar que desaparezcan las alertas. |
| WAVE — atributos ARIA/nombres de grupos | La exportación muestra etiquetas ARIA en `route-list` y `about-stats`; ambos eran `div` genéricos con `aria-label`, sin rol que expresara el grupo. Los `ARIA hidden` restantes corresponden principalmente a iconos decorativos, flechas y gráficos ocultos intencionalmente. | Se agregó `role="group"` a ambos contenedores etiquetados. Se conservaron los elementos decorativos con `aria-hidden="true"` y sus nombres/relaciones funcionales. | `index.html` | DOM tras recarga expone ambas agrupaciones como `group`; inspección confirma que los `aria-hidden` señalados son glifos ornamentales o ilustración redundante. | **Corregido en código; pendiente de nueva auditoría WAVE/axe** para confirmar el resultado. |
| WAVE — alerta `Noscript element` | La exportación identifica el `<noscript>` que explica que JavaScript debe activarse para usar filtros. | Se conserva el aviso: informa una limitación real y ofrece una explicación cuando JavaScript está desactivado; eliminarlo empeoraría la comprensión. | Sin cambio | `index.html` contiene un párrafo explicativo dentro de `<noscript>`; el contenido solo se muestra sin JavaScript. | **No confirmado** como incumplimiento; alerta informativa esperada. |
| WAVE — `ARIA hidden`, texto alternativo, encabezados y controles | La exportación lista estados ARIA, alternativas de imagen y encabezados; incluye elementos decorativos ocultos y no marca en el texto exportado un error individual de nombre/alternativa. | Se conservan iconos puramente decorativos ocultos, textos alternativos de las fotos y nombres visibles de controles. | `index.html`, `js/main.js` | La exportación muestra textos alternativos y nombres de controles; el código actual mantiene un `<h1>`, `<h3>` por tarjeta, botones con texto y un enlace de búsqueda etiquetado. | **No confirmado** como incumplimiento por esas anotaciones; el resumen agregado no sustituye la revisión de interacción con tecnología asistencial. |

La puntuación Lighthouse posterior de 1.00 y la aprobación de `color-contrast` se refieren a la ejecución guardada del 21 de octubre a las 22:09Z, no a una auditoría nueva. Los valores CSS de contraste para los 13 marcadores ya estaban ajustados en el árbol local antes de esta revisión; se volvieron a comprobar tras recargar la página. En esta revisión, además, se corrigió el tamaño visible de los textos pequeños y la semántica de dos grupos ARIA. No se volvió a ejecutar WAVE, axe ni Lighthouse después de esos cambios; tampoco se certifica conformidad total con WCAG.

### Plan de trabajo consolidado y estado

| Orden | Unidad | Trabajo y alcance | Archivos | Criterio de cierre | Estado |
|---|---|---|---|---|---|
| 1 | Reconciliar los 13 marcadores WAVE | Contrastar los elementos identificados en la exportación posterior con el CSS fuente. Ya existen cambios en flechas, pictogramas de ruta, contadores, placeholder y monograma; el usuario informa que WAVE continúa señalando los mismos errores. | `css/styles.css`; nueva evidencia de evaluación actual por obtener | Volver a evaluar la página actual, revisar cada nodo en la pestaña Details y registrar selector, colores/fondo y ratio; comparar con los estilos realmente servidos y corregir la regla responsable si sigue fallando. Conservar la exportación textual completa como evidencia. | **Pendiente de confirmación**: los cambios CSS existentes no se consideran cierre mientras se reporten los mismos avisos sin conciliar los nodos de la evaluación actual. |
| 2 | Mejorar texto pequeño | Corregir las 109 anotaciones “Very small text” de la exportación WAVE elevando los estilos visibles menores de 12 px. | `css/styles.css` | Confirmar tamaño computado mínimo, legibilidad y ausencia de desbordamiento en anchos representativos; repetir WAVE para comprobar si sus alertas desaparecen. | **Código actualizado y comprobación de tamaño/desbordamiento realizada; WAVE pendiente.** |
| 3 | Marcas y navegación | Mantener texto visible como nombre accesible de marca y evitar más de un `aria-current` cuando existen destinos duplicados. | `index.html`, `css/styles.css`, `js/main.js` | Dos marcas con nombre coincidente y, como máximo, un enlace actual; los enlaces duplicados a destinos no anuncian una categoría arbitraria. | Comprobado en árbol accesible y navegador; auditoría Lighthouse/axe posterior a estos cambios pendiente. |
| 4 | Fallback y diálogo | Conservar el fallback de imagen en tarjeta y diálogo, sin `src` vacío; comprobar nombres, Escape y retorno del foco. | `index.html`, `js/main.js`, `css/styles.css` | Fallback visible cuando falta la imagen, controles con nombre y foco vuelve al activador tras cerrar. | Comprobado en navegador y CSS; no requiere otro cambio de código según evidencia actual. |
| 5 | Semántica ARIA de grupos | Dar un rol adecuado a los dos `div` etiquetados que agrupan rutas y estadísticas. | `index.html` | El árbol accesible expone ambos como grupos con sus nombres. | **Implementado y comprobado en DOM; auditoría axe/WAVE pendiente.** |
| 6 | Semántica de `.card-location` | Evaluar las tres alertas de `advanced/heading-markup` frente al marcado real; no elevar metadatos a encabezados para silenciar una regla avanzada. | `js/main.js` | Cada tarjeta mantiene `<h3>` para el destino y ubicación como párrafo, salvo que una evaluación contextual aporte evidencia de que es un encabezado real. | Revisado; no confirmado como incumplimiento, sin cambio. |
| 7 | Error WAVE no identificado | Determinar el elemento asociado al contador “Errors: 1” mediante el detalle de error de la extensión, no mediante el resumen numérico. | Ninguno hasta identificar el nodo | Obtener detalle del nodo, causa y condición; después corregir solo si se confirma problema en el código actual. | Pendiente: no aparece un marcador de error individual en la exportación textual disponible. |
| 8 | Pruebas de experiencia y cierre | Completar un recorrido de teclado, tecnología de asistencia, ampliación del texto y auditoría final en condiciones reproducibles. | Sin cambio de código previsto antes de los resultados | Registrar resultados reales; conservar informes anteriores y guardar cualquier evaluación nueva en un archivo distinto. | Parte de teclado/interacciones probada; lector de pantalla, 200 % y auditoría WAVE/axe posterior pendientes. |

Este orden separa las correcciones ya realizadas de las pruebas que solo pueden cerrar una incidencia pendiente. No se propone modificar componentes ni contenido para los que los informes no aportan un hallazgo confirmado.

### Plan operativo ante los avisos WAVE que persisten

La captura de resumen posterior guardada muestra **Styles: OFF**; el usuario aclara que desactivó la visualización para copiar las anotaciones. La exportación textual contiene los detalles que guían el trabajo: 13 marcadores de contraste, 109 avisos “Very small text”, referencias ARIA y la alerta `<noscript>`. El estado del interruptor no invalida esos detalles ni demuestra por sí mismo qué estilos usó WAVE durante la evaluación. El usuario reporta que WAVE todavía muestra los avisos de contraste tras los cambios, pero en esta sesión no se adjuntó una exportación nueva con los nodos de esa evaluación. Los valores CSS computados permiten comprobar el código servido, pero la discrepancia debe resolverse contra los nodos concretos que WAVE muestra ahora.

| Paso | Acción | Evidencia que debe quedar | Decisión |
|---|---|---|---|
| 1 | Recargar la versión actual de `develop` en `http://127.0.0.1:8000/` y volver a evaluar la página con WAVE. Mantener la exportación completa; si se desactiva Styles para copiar detalles, conservar ese archivo sin interpretar el interruptor como invalidación del escaneo. | Captura nueva del resumen y exportación textual/HTML completa, guardadas con nombre nuevo en `docs/auditorias/02-posterior/`. | Conservar la evidencia con nodos concretos y comparar el mismo criterio y estado de página. |
| 2 | Revisar individualmente los 13 elementos en el orden del reporte: flecha de “Ver todos los lugares”; 3 pictogramas y 3 flechas de rutas; 4 contadores inactivos; placeholder; monograma “G·”. Para cada uno, registrar selector/nodo, color de texto, fondo efectivo, estado (reposo/hover/seleccionado) y ratio de la nueva ejecución. | Tabla de correspondencia entre cada marcador nuevo y la regla CSS efectiva. | Si el nodo sigue fallando, corregir esa regla específica en `css/styles.css`; no repetir cambios de color sin identificar el valor que WAVE evalúa. Si no falla, registrar el marcador anterior como resuelto en la nueva ejecución. |
| 3 | Repetir la comprobación con botones de filtro no seleccionados y seleccionados, y con los enlaces de ruta en reposo. Confirmar que los estados reales no dependen de opacidad heredada ni de color de fondo inesperado. | Valores computados y ratios por estado, contrastados contra WCAG 2.2 AA cuando aplique. | Mantener separados los estados que tienen fondos/colores distintos; no extrapolar el ratio de un estado a los demás. |
| 4 | Inspeccionar la pestaña de errores de WAVE para identificar el contador “Errors: 1”. | Nodo, regla, causa y contexto visual de la incidencia. | Corregir únicamente si el detalle demuestra un problema real del código actual; si el contador no identifica el nodo, conservarlo pendiente. |
| 5 | Ejecutar axe sobre el CSS/marcado actual para revisar `.label-two`; conservar `.card-location` como metadato `<p>` mientras no exista evidencia contextual de que sea un encabezado. | Nuevo resultado axe que confirme el estado actual de `.label-two`; revisión estructural contextual para `.card-location`. | No cambiar la semántica de las ubicaciones para silenciar la regla avanzada. |
| 6 | Comprobar las alertas de texto pequeño (109), la alerta de `<noscript>` y referencias “ARIA hidden” contra el elemento y su función. | Lista de alertas clasificadas como corregibles, informativas/esperadas o no confirmadas, con nodo y motivo. | El tamaño pequeño visible ya se corrigió en CSS; confirmar tras nueva ejecución. Conservar el fallback `<noscript>` y el ocultamiento de elementos puramente decorativos. |
| 7 | Actualizar esta matriz con la evidencia nueva, conservando intactos los reportes iniciales y posteriores ya guardados. | Reporte final fechado, comparación de estados equivalente y archivos de auditoría nuevos sin sobrescribir los anteriores. | Marcar como corregido solo lo que haya dejado de fallar o tenga una comprobación estática suficiente para el criterio evaluado; dejar explícitas las limitaciones manuales. |

**Estado de este plan:** los cambios de contraste previos siguen en CSS; esta revisión elevó a 12 px todo texto visible que estaba por debajo de ese tamaño y añadió `role="group"` a los dos `div` con nombre. Tras recargar, se comprobaron roles, tamaños y ausencia de desbordamiento a seis anchos. La desaparición de alertas no se declara confirmada: hace falta una nueva evaluación y comparar los nodos exactos. La anotación `<noscript>` se conserva como aviso informativo y el Error agregado queda pendiente por falta de un marcador individual en el texto exportado.

### Archivos y Git

En el cierre previo se modificaron `index.html`, `css/styles.css`, `js/main.js` y este informe; en esta revisión, a partir del detalle WAVE, se aumentaron los tamaños de texto visibles pequeños en `css/styles.css`, se añadieron roles de grupo en `index.html` y se amplió la documentación. No se añadieron ni alteraron archivos de auditoría. La rama sigue siendo `develop`, adelantada 12 commits respecto de `origin/develop`; se conservaron los cambios existentes en `index.html`, `js/main.js` y la carpeta de auditorías sin seguimiento. No se creó ningún commit ni se cambió de rama.
