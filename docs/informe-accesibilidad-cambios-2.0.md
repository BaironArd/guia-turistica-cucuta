# Informe de accesibilidad — cambios 2.0

## Propósito y alcance

Este informe registra las correcciones implementadas en unidades pequeñas, sus criterios de accesibilidad relacionados y la evidencia necesaria para verificar cada resultado. El registro distingue entre cambios aplicados, pruebas ejecutadas y comprobaciones aún pendientes. No constituye una certificación de conformidad WCAG.

**Proyecto:** Guía Turística de Cúcuta
**Rama de trabajo:** `develop`
**Versión base del informe:** auditorías iniciales guardadas en `docs/`
**Estado del documento:** F01 y F02 implementadas; verificaciones automáticas posteriores y evidencias visuales pendientes.

## Unidad F01 — Coincidencia del nombre accesible de la marca

### Hallazgo y origen

**ID interno:** ERR-A11Y-01
**Problema:** los enlaces de marca de la cabecera y del pie muestran el texto visible «Descubre Cúcuta», pero el atributo `aria-label` anterior comenzaba por «Guía Turística de Cúcuta» y omitía «Descubre».
**Fuentes originales:** `docs/lighthouse-reporte.json` (Lighthouse 13.4.1, captura del 17 de octubre de 2026 a las 20:30:57Z) y `docs/lighthouse-reporte.html` (Lighthouse 13.4.1, captura del 17 de octubre de 2026 a las 20:48:53Z). Ambas auditorías reportaron dos elementos en `label-content-name-mismatch`: la marca de cabecera y la marca del pie.
**Criterio relacionado:** WCAG 2.2, [2.5.3 Etiqueta en el nombre, nivel A](https://www.w3.org/TR/WCAG22/#label-in-name). El criterio es pertinente porque los enlaces tienen texto visible y un nombre accesible personalizado que debe incluirlo.
**Prioridad:** P1 según el plan de trabajo, por afectar dos enlaces prominentes de navegación.
**Estado de implementación:** corregida en el código fuente.
**Estado de verificación WCAG:** pendiente; aún no se ha repetido axe DevTools, Lighthouse ni una inspección del árbol de accesibilidad después del cambio.

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
- **axe DevTools:** pendiente de ejecutar tras el cambio; debe comprobarse que `label-content-name-mismatch` ya no identifique estos dos enlaces.
- **Lighthouse:** pendiente de ejecutar tras el cambio; registrar el resultado de `label-content-name-mismatch`. El puntaje general por sí solo no demuestra que el criterio se cumpla.
- **Árbol de accesibilidad/lector de pantalla:** pendiente de inspección para confirmar el nombre expuesto en ambas ubicaciones.

La corrección está implementada, pero el criterio WCAG no se declara verificado hasta completar las pruebas pendientes y revisar sus resultados.

### Evidencias manuales requeridas

Tomar capturas reales del mismo navegador, viewport y contenido para comparar cabecera con cabecera y pie con pie. No sustituir las capturas pendientes por imágenes recreadas ni marcar los marcadores de posición como evidencia.

1. **`F01-ERR-A11Y-01-codigo-antes.png`** — Abrir la versión base con `git show 5e92065:index.html` en un editor y capturar los dos `aria-label` anteriores, incluyendo contexto suficiente para identificar cabecera y pie.
2. **`F01-ERR-A11Y-01-codigo-despues.png`** — Capturar en el editor los dos `aria-label` activos corregidos en el `index.html` actual, con contexto que permita ver las ubicaciones.
3. **`F01-ERR-A11Y-01-nombre-accesible-antes.png`** — Capturar el hallazgo original de Lighthouse o el árbol de accesibilidad anterior donde se vea el nombre de cada enlace y la discrepancia con «Descubre Cúcuta». Si la evidencia original no está disponible, indicarlo; no reconstruirla.
4. **`F01-ERR-A11Y-01-nombre-accesible-despues.png`** — Después de ejecutar la auditoría o inspeccionar el árbol de accesibilidad actualizado, mostrar el nombre accesible de las marcas de cabecera y pie, y el resultado real de la regla `label-content-name-mismatch`.

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F01-ERR-A11Y-01-codigo-antes.png` aquí. Debe mostrar los atributos originales de cabecera y pie.

> **Pendiente:** insertar `F01-ERR-A11Y-01-codigo-despues.png` aquí. Debe mostrar los atributos activos y los comentarios históricos asociados.

> **Pendiente:** insertar `F01-ERR-A11Y-01-nombre-accesible-antes.png` aquí. Debe mostrar evidencia auténtica del hallazgo original.

> **Pendiente:** insertar `F01-ERR-A11Y-01-nombre-accesible-despues.png` aquí. Debe mostrar el resultado posterior real; tomarla tras ejecutar la verificación correspondiente.

## Unidad F02 — Contraste del texto de marca en cabecera

### Hallazgo y origen

**ID interno:** ERR-A11Y-02
**Problema:** el rótulo «Cúcuta» de la marca superior tenía contraste 4,49:1 sobre el fondo `#fbfaf7`, inferior al mínimo de 4,5:1 indicado para texto normal.
**Fuentes originales:** `docs/axe-dev-tools-base.json` y `docs/axe-dev-tools-completo.json` (exports idénticos, axe DevTools 4.13.0, 17 de octubre de 2026 a las 21:16:36Z); `docs/lighthouse-reporte.json` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:30:57Z); `docs/lighthouse-reporte.html` (Lighthouse 13.4.1, 17 de octubre de 2026 a las 20:48:53Z). Las herramientas señalan el texto de marca de cabecera y reportan 4,49:1.
**Criterio relacionado:** WCAG 2.2, [1.4.3 Contraste (mínimo), nivel AA](https://www.w3.org/TR/WCAG22/#contrast-minimum). El texto es pequeño y no se identifica como texto incidental ni como logotipo.
**Prioridad:** P2, por ser una instancia localizada de texto en la cabecera.
**Estado de implementación:** corregida en `css/styles.css` con una regla específica para la marca de cabecera.
**Estado de verificación WCAG:** el color renderizado se inspeccionó en navegador y dio 4,70:1; axe DevTools y Lighthouse todavía deben volver a ejecutarse. No se declara el criterio verificado hasta revisar esas auditorías.

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

El nuevo color calculado contra `#fbfaf7` produce 4,70:1 y supera el umbral numérico de 4,5:1. La regla solo afecta a la marca dentro del encabezado; no cambia el color de la marca del pie ni otros usos de `--muted`. Es necesario confirmar en navegador que el fondo renderizado y el estado auditado coinciden con la combinación calculada.

### Pruebas y estado

- **Revisión de código:** se confirmó que el color anterior procede de `--muted` (`#697770`) y que la sobrescritura nueva se limita a `.header-inner .brand-copy > span`.
- **Inspección en navegador:** Playwright obtuvo el color de texto renderizado `rgb(102, 116, 108)`, el fondo de cabecera `rgba(251, 250, 247, 0.96)` y el fondo de página `rgb(251, 250, 247)`. Al componer el fondo, la relación calculada fue **4,70:1** (texto normal, umbral 4,5:1).
- **Regresión de otras marcas:** la regla nueva está acotada al encabezado; el estilo existente del pie permanece sin cambios.
- **axe DevTools y Lighthouse:** pendientes de ejecutar después del cambio; comprobar que el elemento de cabecera ya no aparece en `color-contrast`.
- **Capturas visuales de evidencia:** pendientes; se requieren para el informe, pero no se han inventado ni guardado.

La implementación está aplicada y se comprobó el contraste del color renderizado en esta vista. WCAG no se declara verificado hasta completar las auditorías automáticas pendientes y revisar la evidencia final.

### Evidencias manuales requeridas

Capturar el mismo navegador, viewport y estado de la cabecera antes y después. Las capturas no sustituyen la medición del ratio ni la auditoría automática.

1. **`F02-ERR-A11Y-02-codigo-antes.png`** — Mostrar la regla de la marca en la versión previa al cambio, obtenida con `git show 4271513:css/styles.css`; debe verse que el texto heredaba `var(--muted)`.
2. **`F02-ERR-A11Y-02-codigo-despues.png`** — Mostrar la regla específica `.header-inner .brand-copy > span` y el comentario `ERR-A11Y-02` en el archivo actual.
3. **`F02-ERR-A11Y-02-marca-antes.png`** — Capturar en el navegador el rótulo «Cúcuta» en la cabecera antes del cambio, con la marca y su fondo visibles. Usar una captura previa real; no reconstruirla. Si no existe, indicarlo.
4. **`F02-ERR-A11Y-02-marca-despues.png`** — Capturar la misma cabecera tras el cambio, con viewport equivalente y el mismo contenido.
5. **`F02-ERR-A11Y-02-contraste-despues.png`** — Capturar una medición posterior del color de primer plano y fondo efectivamente renderizados (mínimo 4,5:1) junto con el resultado de axe/Lighthouse para el elemento.

#### Marcadores para incorporar las capturas

> **Pendiente:** insertar `F02-ERR-A11Y-02-codigo-antes.png` aquí. Debe mostrar la regla de color anterior recuperada del commit base de F02.

> **Pendiente:** insertar `F02-ERR-A11Y-02-codigo-despues.png` aquí. Debe mostrar la regla limitada a la cabecera y el comentario histórico.

> **Pendiente:** insertar `F02-ERR-A11Y-02-marca-antes.png` aquí. Debe ser una captura previa real de «Cúcuta» en la marca superior.

> **Pendiente:** insertar `F02-ERR-A11Y-02-marca-despues.png` aquí. Debe mostrar el mismo componente tras el cambio.

> **Pendiente:** insertar `F02-ERR-A11Y-02-contraste-despues.png` aquí. Debe mostrar la medición real posterior y el resultado de la regla `color-contrast`.

## Unidades pendientes

Las unidades posteriores a F02 del plan de correcciones no se han iniciado. Se documentarán por separado después de su autorización e implementación.
