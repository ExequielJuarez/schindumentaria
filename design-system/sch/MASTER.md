# SCH Indumentaria — sistema de diseño (v2, blanco y negro)

Tokens en `public/css/base.css` (`:root`). Referencia de composición: tiendas de ropa a sangre, fotos grandes y mucho negro;
no es una copia, cambia la tipografía, el tríptico de portada, el carril de lookbook y el bloque invertido del local.

## Decisiones tomadas con la skill `ui-ux-pro-max`

| Consulta a la skill | Resultado aplicado |
|---|---|
| Estilo `Minimalism & Swiss Style` + `Brutalism` | Grilla, `#000`/`#FFF`, líneas de 1 px, esquinas rectas, **sin sombras ni degradés decorativos**, hover de 200–250 ms |
| Tipografía `Kinetic Motion` (Syncopate + Space Mono) | **Syncopate** (ancha) en botones y menú, **Space Mono** en etiquetas; los títulos usan **Archivo expandida** (wdth 125) para que acompañe al logo |
| Patrón `Hero-Centric` | Portada a sangre con un único CTA principal; sin autoplay (no hay carrusel) |
| UX: contraste, táctil, formularios | Botones/íconos de 44 px, separación ≥ 8 px, inputs de 16 px en celular, `inputmode`, foco visible, `prefers-reduced-motion` |

## Color

| Token | Valor | Uso |
|---|---|---|
| `--tinta` | `#000` | Fondo |
| `--papel` | `#fff` | Texto, botón principal, bloque invertido |
| `--apagado` | `#8c8c8c` | Texto secundario (≥ 4.5:1 sobre negro) |
| `--linea` / `--linea-fuerte` | `#242424` / `#4d4d4d` | Bordes |
| `--acento` | `#3d5bff` | **Único color**: relleno de botones al tocar (texto blanco: 5.1:1) |
| `--acento-texto` | `#8ea1ff` | Acento como texto sobre negro (7.4:1) |
| `--rojo` `--verde` `--ambar` | — | Solo estados |

## Reglas

- Las fotos van a color, sin filtros: el blanco y negro es solo la interfaz (en portada, categorías y local se oscurecen apenas para que el texto se lea).
- Los títulos resaltan con **contorno** (`<em>`), no con color.
- Logo SCH: `partials/logo.ejs` (SVG). `animado` lo traza al cargar (portada, pantalla de entrada); `vivo` lo redibuja letra por letra al pasar el mouse. El pie lo muestra gigante.
- Pantalla de entrada una vez por visita; el tríptico de portada se abre en cortina.
