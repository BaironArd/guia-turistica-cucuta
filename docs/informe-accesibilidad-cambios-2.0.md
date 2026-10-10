# Informe de accesibilidad — cambios 2.0

## Propósito y alcance

Este informe registra las correcciones implementadas en unidades pequeñas, sus criterios de accesibilidad relacionados y la evidencia necesaria para verificar cada resultado. El registro distingue entre cambios aplicados, pruebas ejecutadas y comprobaciones aún pendientes. No constituye una certificación de conformidad WCAG.

**Proyecto:** Guía Turística de Cúcuta
**Rama de trabajo:** `develop`
**Versión base del informe:** auditorías iniciales guardadas en `docs/`
**Estado del documento:** F01 implementada; verificación automática posterior y evidencias visuales pendientes.

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

## Unidades pendientes

Las unidades posteriores del plan de correcciones no se han iniciado. Se documentarán por separado después de su autorización e implementación.
