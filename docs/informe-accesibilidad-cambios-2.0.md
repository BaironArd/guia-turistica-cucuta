# Informe de accesibilidad — cambios 2.0

## Propósito y alcance

Este informe registra las correcciones implementadas en unidades pequeñas, sus criterios de accesibilidad relacionados y la evidencia necesaria para verificar cada resultado. El registro distingue entre cambios aplicados, pruebas ejecutadas y comprobaciones aún pendientes. No constituye una certificación de conformidad WCAG.

**Proyecto:** Guía Turística de Cúcuta
**Rama de trabajo:** `develop`
**Versión base del informe:** auditorías iniciales guardadas en `docs/`
**Estado del documento:** F01–F08 implementadas y comprobadas de forma específica en navegador; capturas manuales y nueva pasada completa de herramientas pendientes. F09–F11 siguen pendientes de evaluación manual, nueva verificación de Lighthouse y detalle de WAVE.

## Unidad F01 — Coincidencia del nombre accesible de la marca

### Hallazgo y origen

**ID interno:** ERR-A11Y-01
**Problema:** los enlaces de marca de la cabecera y del pie muestran el texto visible «Descubre Cúcuta», pero el atributo `aria-label` anterior comenzaba por «Guía Turística de Cúcuta» y omitía «Descubre».
**Fuentes originales:** `docs/lighthouse-reporte.json` (Lighthouse 13.4.1, captura del 17 de octubre de 2026 a las 20:30:57Z) y `docs/lighthouse-reporte.html` (Lighthouse 13.4.1, captura del 17 de octubre de 2026 a las 20:48:53Z). Ambas auditorías reportaron dos elementos en `label-content-name-mismatch`: la marca de cabecera y la marca del pie.
**Criterio relacionado:** WCAG 2.2, [2.5.3 Etiqueta en el nombre, nivel A](https://www.w3.org/TR/WCAG22/#label-in-name). El criterio es pertinente porque los enlaces tienen texto visible y un nombre accesible personalizado que debe incluirlo.
**Prioridad:** P1 según el plan de trabajo, por afectar dos enlaces prominentes de navegación.
**Estado de implementación:** corregida en el código fuente.
**Estado de verificación:** comprobación específica en navegador realizada; capturas manuales pendientes. No se repitieron axe DevTools ni Lighthouse, por lo que el resultado se limita a los nombres accesibles inspeccionados y no representa una auditoría global.

### Código anterior y corrección

Archivo afectado: [`index.html`](../index.html).

En la cabecera, la versión anterior era:

```html
<a class="brand" href="#inicio" aria-label="Guía Turística de Cúcuta, inicio">
```

El nombre accesible personalizado omitía la palabra «Descubre», aunque esta forma parte del texto visible. Se conserva esa versión como comentario histórico junto al enlace. El atributo activo ahora es:

```html
<a class="brand" href="#inicio" aria-label="Descubre Cúcuta, inicio">
```

En el pie, la versión anterior era:

```html
<a class="brand footer-brand" href="#inicio" aria-label="Guía Turística de Cúcuta, volver al inicio">
```

También omitía «Descubre». Se conserva como comentario histórico junto al enlace. El atributo activo ahora es:

```html
<a class="brand footer-brand" href="#inicio" aria-label="Descubre Cúcuta, volver al inicio">
```

En ambos casos, el nombre accesible conserva la indicación de destino y ahora incluye el texto visible completo «Descubre Cúcuta». No se modificaron destinos, contenido visible ni comportamiento de los enlaces.

### Pruebas y estado

- **Revisión del código fuente:** los dos enlaces continúan presentes y sus nombres accesibles incluyen «Descubre Cúcuta». Resultado: comprobación estática del marcado realizada.
- **Revisión de alcance:** solo se modificaron los dos atributos `aria-label` y se añadieron comentarios históricos asociados.
- **Árbol de accesibilidad del navegador:** inspección con Playwright confirmó que el enlace de cabecera se expone como «Descubre Cúcuta, inicio» y que el pie conserva el nombre «Descubre Cúcuta, volver al inicio».
- **axe DevTools y Lighthouse:** no se repitieron después del cambio; la validación registrada es específica a los dos nombres accesibles y no afirma resultado global de dichas herramientas.

La corrección está implementada y la comprobación específica del nombre accesible está realizada. Solo quedan por incorporar las capturas manuales indicadas.

### Evidencias manuales requeridas

Tomar capturas reales del mismo navegador, viewport y contenido para comparar cabecera con cabecera y pie con pie. No sustituir las capturas pendientes por imágenes recreadas ni marcar los marcadores de posición como evidencia.

1. **`F01-ERR-A11Y-01-codigo-antes.png`** — Abrir la versión base con `git show 5e92065:index.html` en un editor y capturar los dos `aria-label` anteriores, incluyendo contexto suficiente para identificar cabecera y pie.
2. **`F01-ERR-A11Y-01-codigo-despues.png`** — Capturar en el editor los dos `aria-label` activos corregidos en el `index.html` actual, con contexto que permita ver las ubicaciones.
3. **`F01-ERR-A11Y-01-nombre-accesible-antes.png`** — Capturar el hallazgo original de Lighthouse o el árbol de accesibilidad anterior donde se vea el nombre de cada enlace y la discrepancia con «Descubre Cúcuta». Si la evidencia original no está disponible, indicarlo; no reconstruirla.
4. **`F01-ERR-A11Y-01-nombre-accesible-despues.png`** — Mostrar la inspección del árbol de accesibilidad actualizado con el nombre de las marcas de cabecera y pie («Descubre Cúcuta» más la indicación de destino).

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F01-ERR-A11Y-01-codigo-antes.png` aquí. Debe mostrar los atributos originales de cabecera y pie.

> **Pendiente:** insertar `F01-ERR-A11Y-01-codigo-despues.png` aquí. Debe mostrar los atributos activos y los comentarios históricos asociados.

> **Pendiente:** insertar `F01-ERR-A11Y-01-nombre-accesible-antes.png` aquí. Debe mostrar evidencia auténtica del hallazgo original.

> **Pendiente:** insertar `F01-ERR-A11Y-01-nombre-accesible-despues.png` aquí. Debe mostrar los nombres accesibles verificados en el navegador.

## Unidad F02 — Contraste del texto de marca en cabecera

### Hallazgo y origen

**ID interno:** ERR-A11Y-02
**Problema:** el rótulo «Cúcuta» de la marca superior tenía contraste 4,49:1 sobre el fondo `#fbfaf7`, inferior al mínimo de 4,5:1 indicado para texto normal.
**Fuentes originales:** `docs/axe-dev-tools-base.json` y `docs/axe-dev-tools-completo.json` (exports idénticos, axe DevTools 4.13.0, 17 de octubre de 2026 a las 21:16:36Z); `docs/lighthouse-reporte.json` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:30:57Z); `docs/lighthouse-reporte.html` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:48:53Z). Las herramientas señalan el texto de marca de cabecera y reportan 4,49:1.
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum). El texto es pequeño y no se identifica como texto incidental ni como logotipo.
**Prioridad:** P2, por ser una instancia localizada de texto en la cabecera.
**Estado de implementación:** corregida en `css/styles.css` con una regla específica para la marca de cabecera.
**Estado de verificación:** el color renderizado se inspeccionó en navegador y dio 4,70:1; capturas manuales pendientes. No se repitieron axe DevTools ni Lighthouse, así que la verificación se limita a esta combinación de color y fondo.

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
**Fuentes originales:** `docs/axe-dev-tools-base.json` y `docs/axe-dev-tools-completo.json` (exports idénticos, axe DevTools 4.13.0, 17 de octubre de 2026 a las 21:16:36Z); `docs/lighthouse-reporte.json` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:30:57Z); `docs/lighthouse-reporte.html` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:48:53Z). Axe/Lighthouse coinciden en los incumplimientos de contraste estándar en esta sección.
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum), aplicable a estos textos pequeños.
**Prioridad:** P2, ya que varios rótulos y descripciones de los accesos de rutas no alcanzaban el mínimo.
**Estado de implementación:** corregida en `css/styles.css` con reglas acotadas a `.intro`.
**Estado de verificación:** inspección del estado renderizado en navegador confirmó ratios superiores a 4,5:1 tanto normal como en hover; capturas manuales pendientes. No se repitieron axe DevTools ni Lighthouse, así que no se afirma un resultado nuevo de esas herramientas.

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
**Fuentes originales:** `docs/axe-dev-tools-base.json` y `docs/axe-dev-tools-completo.json` (exports idénticos, axe DevTools 4.13.0, 17 de octubre de 2026 a las 21:16:36Z); `docs/lighthouse-reporte.json` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:30:57Z); `docs/lighthouse-reporte.html` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:48:53Z).
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum), aplicable al texto pequeño enumerado.
**Prioridad:** P2, por afectar títulos auxiliares y controles del explorador de destinos.
**Estado de implementación:** corregida en `css/styles.css` con reglas limitadas a `.destinations`; el filtro seleccionado conserva su color existente.
**Estado de verificación:** contraste de estados inactivos y seleccionados medido en navegador; interacción de filtro comprobada. No se repitieron axe DevTools ni Lighthouse, por lo que no se atribuyen nuevos resultados a esas herramientas. Solo quedan las capturas manuales indicadas abajo.

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
**Fuentes originales:** `docs/axe-dev-tools-base.json` y `docs/axe-dev-tools-completo.json` (exports idénticos; regla `color-contrast`, 60 instancias correspondientes a estas tres clases de elemento); `docs/lighthouse-reporte.json` y `docs/lighthouse-reporte.html` (hallazgos de contraste de la auditoría original).
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum), aplicable al texto pequeño de ubicación, descripción y enlace.
**Prioridad:** P2, por repetirse el mismo problema en las veinte tarjetas e incluir el enlace de acción.
**Estado de implementación:** corregida en `css/styles.css` mediante una regla acotada a `.destination-card`; se conserva el color del enlace al pasar el puntero.
**Estado de verificación:** mediciones renderizadas en navegador e inspección de estados normal y hover realizadas; capturas manuales pendientes. No se repitieron axe DevTools ni Lighthouse, por lo que no se atribuyen resultados posteriores a esas herramientas.

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
**Fuente original:** `docs/axe-dev-tools-base.json` y `docs/axe-dev-tools-completo.json` (exports idénticos; regla `color-contrast`, selector `.section-kicker-light > span:nth-child(1)`). Lighthouse no enumeró este selector entre sus nodos fallidos; la relación se conserva atribuida a axe.
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum).
**Prioridad:** P2; se trata de un texto pequeño aislado dentro del encabezado de una sección.
**Estado de implementación:** corregida en `css/styles.css` con una regla exclusiva de `.map-section`.
**Estado de verificación:** color y fondo renderizados inspeccionados en navegador; capturas manuales pendientes. axe DevTools y Lighthouse no se repitieron tras el cambio.

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
**Fuentes originales:** `docs/axe-dev-tools-base.json` y `docs/axe-dev-tools-completo.json` (exports idénticos; regla `color-contrast`, selectores de `.about-copy` y `.about-stats`); `docs/lighthouse-reporte.json` y `docs/lighthouse-reporte.html` (regla de contraste con seis nodos afectados).
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum).
**Prioridad:** P2, por afectar seis textos auxiliares del bloque de presentación.
**Estado de implementación:** corregida en `css/styles.css` mediante selectores limitados a `.about-copy` y `.about-stats`.
**Estado de verificación:** inspección y medición de colores renderizados en navegador; capturas manuales pendientes. axe DevTools y Lighthouse no se repitieron tras el cambio.

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
**Fuente original:** `docs/axe-dev-tools-base.json` y `docs/axe-dev-tools-completo.json` (exports idénticos; regla `advanced/text-contrast`, selector `.card-image-wrap > .image-fallback[role="img"]`).
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum), aplicable al texto visible de 18 px.
**Prioridad:** P2, porque el mensaje visible de reemplazo debe seguir siendo legible cuando falta una fotografía.
**Estado de implementación:** corregida en `css/styles.css`; el estilo compartido cubre el fallback de tarjeta y el del diálogo. La corrección fue comprometida en `9f53ffb`; esta regularización corrige el identificador ERR-A11Y-09 que se había consignado por error en el comentario y el informe anteriores, y la registra como F08/ERR-A11Y-08.
**Estado de verificación:** Playwright confirmó el fallback visible en una tarjeta y los ratios calculados en ambos extremos del degradado. No se abrió el diálogo para comprobar allí el fallback; esa prueba sigue pendiente. axe DevTools y Lighthouse no se repitieron.

### Código anterior y corrección

Archivo afectado: [`css/styles.css`](../css/styles.css).

El color histórico `#566a5d` se conserva en un comentario y ahora está identificado como ERR-A11Y-08. Se cambió a `#3f5147` sin modificar el degradado, el texto ni la generación del fallback. Contra los extremos del degradado (`#dce4d8` y `#b8c8b3`), el nuevo color obtiene **6,51:1** y **4,82:1**, respectivamente; ambos superan el mínimo de 4,5:1.

### Pruebas y estado

- **Fallback visible:** Playwright encontró «Fotografía no disponible en esta versión» en una tarjeta y confirmó el estilo activo.
- **Contraste:** cálculo sobre ambos extremos del degradado computado: **6,51:1** en `#dce4d8` y **4,82:1** en `#b8c8b3`.
- **Prueba pendiente:** abrir un lugar sin fotografía en el diálogo y comprobar la reserva visible y su contraste.
- **Regresión:** no se cambió `js/main.js`, el texto alternativo, el `role="img"` ni el comportamiento que muestra el fallback.
- **Auditorías globales:** axe DevTools y Lighthouse no se repitieron después de la corrección.
- **Evidencias manuales:** capturas pendientes. No se conservan capturas dirigidas D0 previas a este cambio; no se reconstruirán como si fueran originales.

No se declara conformidad global WCAG ni se afirma que el hallazgo haya desaparecido de una nueva ejecución de axe.

### Evidencias pendientes

1. **`F08-ERR-A11Y-08-codigo-antes.png`** — Regla original `#566a5d` recuperada con `git show 2750104:css/styles.css`.
2. **`F08-ERR-A11Y-08-codigo-despues.png`** — Regla activa `#3f5147` y comentario ERR-A11Y-08.
3. **`F08-ERR-A11Y-08-fallback-antes.png`** — Captura previa auténtica de Plaza de Banderas; si no existe, dejar constancia, sin reconstruirla.
4. **`F08-ERR-A11Y-08-fallback-despues.png`** — Fallback real en la tarjeta actual.
5. **`F08-ERR-A11Y-08-dialogo-despues.png`** — Fallback del diálogo al abrir un destino sin fotografía.
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

## Unidad F09 — Evaluación manual de encabezados y texto del mapa

**Hallazgos:** OBS-A11Y-09 (`.card-location`) y OBS-A11Y-10 (`.label-two`).
**Estado:** evaluación manual pendiente; no se ha confirmado una infracción ni un falso positivo definitivo. El plan no autoriza cambios antes de evaluar la función de ambos elementos.

- Para OBS-A11Y-09, axe marcó tres `.card-location` como posibles encabezados. La inspección estática muestra ubicaciones en párrafos y nombre del destino en `<h3>`, pero falta revisar la lista de encabezados y escuchar la lectura de las tarjetas con tecnologías de asistencia.
- Para OBS-A11Y-10, `.label-two` está dentro de `.map-art[aria-hidden="true"]`. Su función visual debe evaluarse antes de decidir si se conserva como texto informativo con contraste corregido o si es puramente ornamental.
- Un override de contraste en `.map-art .label-two` se había añadido en el commit `2750104` sin completar esta evaluación. Se retiró en esta regularización; el estilo activo vuelve al original. No debe contarse como una corrección de accesibilidad finalizada.
- **Sin cambios semánticos aprobados:** no modificar encabezados, `aria-hidden` ni el estilo del mapa hasta resolver la evaluación.
- **Evidencia pendiente:** lista de encabezados/árbol accesible, lectura de las tarjetas señaladas, vista de la ilustración en contexto y, si ayuda, detalle WAVE por elemento.

## Unidad F10 — Verificaciones manuales de Lighthouse

**Hallazgo:** VER-A11Y-11.
**Estado:** pendiente; Lighthouse enumera diez pruebas manuales, pero esos registros no son resultados de aprobado ni de fallido.

Pruebas pendientes: `custom-controls-labels`, `custom-controls-roles`, `focus-traps`, `focusable-controls`, `interactive-element-affordance`, `logical-tab-order`, `managed-focus`, `offscreen-content-hidden`, `use-landmarks` y `visual-order-follows-dom`.

Registrar cada resultado real al probar teclado y foco, menú móvil, diálogo, landmarks y orden visual/DOM. Si aparece un defecto, crear un hallazgo específico con su criterio WCAG y tratarlo en una unidad separada; no marcar esta verificación como superada por inspección estática.

## Unidad F11 — Completar evidencia de WAVE

**Hallazgo:** SRC-A11Y-12.
**Estado:** pendiente por limitación de la fuente. La captura de resumen disponible presenta contadores generales, pero no elementos, selectores ni valores de contraste.

Se necesita un informe/exportación detallado o capturas de WAVE por elemento para clasificar y deduplicar cada resultado. Después de F01–F08, también queda pendiente una nueva pasada completa de axe/Lighthouse y WAVE; no se han ejecutado tras esos cambios.

## Evidencias y límites pendientes

- Las capturas D0 dirigidas por componente no se tomaron antes de F01–F08. No presentar capturas del estado actual ni capturas reconstruidas desde CSS como si fueran evidencia visual anterior. Si se conserva una captura original auténtica, puede incorporarse; de lo contrario, documentar su ausencia y capturar D1.
- Las capturas D1 actuales y las de estados de interacción siguen pendientes, igual que los resultados de auditoría posterior.
- Las cinco fuentes originales de `docs` permanecen sin seguimiento en Git y no se incluyen en los commits.
- Los dos JSON de axe eran idénticos. La captura WAVE actual no permite atribuir sus contadores a componentes concretos.
- El informe registra ratios verificados localmente para algunos elementos, pero no una nueva auditoría automatizada, revisión completa de regresiones ni conformidad global WCAG.
