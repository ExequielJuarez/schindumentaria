# SCH Indumentaria — sistema de diseño

Fuente de verdad visual de la tienda. Los tokens viven en `public/css/base.css` (`:root`).

Generado con la skill **ui-ux-pro-max** (`--domain style` y `--domain typography` para streetwear) y ajustado a mano
a la marca: el generador automático devolvió una paleta verde y una tipografía de lujo que no encajan con el negocio, así
que se tomó de la skill solo lo verificado:

| Decisión | Origen en la skill |
|---|---|
| Estilo: **Dark Mode (OLED) + Brutalismo** → negro puro, bordes visibles de 2 px, esquinas casi rectas, sombras sólidas en hover | `styles.csv` → *Dark Mode (OLED)*, *Brutalism* |
| Tipografía: **Anton** (títulos, condensada y gritona) + **Epilogue** (texto) | `typography.csv` → *Gen Z Brutal* |
| Movimiento 150–300 ms, `prefers-reduced-motion` respetado, foco visible, contraste ≥ 4.5:1 | Checklist de la skill |

## Color

| Token | Valor | Uso |
|---|---|---|
| `--tinta` | `#0a0a0b` | Fondo (negro del logo) |
| `--tinta-2/3/4` | `#111113` `#19191c` `#232327` | Superficies |
| `--linea` / `--linea-fuerte` | `#2d2d33` / `#4a4a52` | Bordes |
| `--papel` | `#f3f1ec` | Texto y botón base (blanco del logo) |
| `--apagado` | `#9d9ba3` | Texto secundario |
| `--volt` | `#d9ff3f` | **Único acento**: acciones, precios destacados, estados activos |
| `--rojo` `--verde` `--ambar` | `#ff5a4f` `#46e08a` `#ffc247` | Solo estados (error, ok, alerta) |

## Reglas

- Un solo acento. Si todo es volt, nada lo es.
- Títulos siempre en Anton, mayúsculas; el texto resaltado va en `<em>` (se ve volt, sin cursiva).
- Interactivo = se levanta (`translate(-3px,-3px)` + sombra sólida del color contrario).
- Fotos de producto en proporción 4:5, sin recorte de cabeza ni etiquetas de Instagram.
- Logo: `partials/logo.ejs` (SVG propio). `animado` lo traza al aparecer, `vivo` hace glitch al pasar el mouse.
- Pantalla de entrada una vez por visita (`sessionStorage`), desactivada con `prefers-reduced-motion`.

## Componentes (en `base.css`)

`.btn` (+ `--volt` `--linea` `--peligro`) · `.campo` · `.opcion` · `.tilde` · `.chip` · `.estado` · `.tarjeta` ·
`.grilla-productos` · `.tabla` · `.aviso` · `.toast`. El panel (`admin.css`) reutiliza los mismos componentes.
