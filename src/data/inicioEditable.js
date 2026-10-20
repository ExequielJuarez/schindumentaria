// ==========================================================
// Qué se puede editar del inicio desde el panel (Admin → Inicio)
// y el valor original de cada cosa.
//
// Este esquema arma solo el formulario del panel, limpia lo que
// se guarda y completa lo que falta. Para sumar un campo nuevo
// alcanza con agregarlo acá y usarlo en views/inicio.ejs.
//
// Tipos: texto (una línea) · lineas (varios renglones) · parrafo
//        numero · link · imagen · opciones · lista (fija o variable)
// En los textos, *palabra* se resalta.
// ==========================================================

const FONDOS = { oscuro: "Oscuro", medio: "Gris", claro: "Claro" };

const texto = (etiqueta, defecto, max = 80, extra = {}) => ({ tipo: "texto", etiqueta, defecto, max, ...extra });
const parrafo = (etiqueta, defecto, max = 300, extra = {}) => ({ tipo: "parrafo", etiqueta, defecto, max, ...extra });
const link = (etiqueta, defecto, extra = {}) => ({ tipo: "link", etiqueta, defecto, max: 255, ancho: "medio", ...extra });
const imagen = (etiqueta, defecto, extra = {}) => ({ tipo: "imagen", etiqueta, defecto, ...extra });
const etiquetaSeccion = (defecto) => texto("Texto chico de arriba", defecto, 40);
const tituloSeccion = (defecto) =>
  texto("Título", defecto, 70, { ayuda: "Poné *entre asteriscos* la parte que queda resaltada." });

const SECCIONES = {
  portada: {
    titulo: "Portada",
    descripcion: "Lo primero que se ve al entrar: título gigante, botones y el collage de fotos.",
    siempreVisible: true,
    campos: {
      etiqueta: texto("Texto chico de arriba", "Santiago del Estero · Streetwear", 70),
      titulo: {
        tipo: "lineas",
        etiqueta: "Título grande",
        defecto: "Vestite\ncomo te\n*sale*.",
        max: 60,
        maxLineas: 3,
        ayuda: "Cada renglón entra con una animación. *Entre asteriscos* queda resaltado.",
      },
      bajada: parrafo(
        "Texto debajo del título",
        "Remeras, bermudas, camisas y pantalones oversize. Ropa de calle elegida en nuestro local de La Plata 189, ahora también online.",
        220
      ),
      botonTexto: texto("Botón principal", "Ver nuevos ingresos", 30, { ancho: "medio" }),
      botonLink: link("Link del botón principal", "#nuevos"),
      secundarioTexto: texto("Botón secundario", "Visitar el local", 30, { ancho: "medio" }),
      secundarioLink: link("A dónde lleva", "#local"),
      imagen: imagen("Foto principal", "/img/productos/pantalon-wide-leg-lavado-1.jpg", {
        ayuda: "Mejor una foto vertical, de cuerpo entero.",
        fondo: "oscuro",
      }),
      imagen2: imagen("Foto chica 1", "/img/productos/bermudas-oversize-algodon-1.jpg", { ancho: "medio" }),
      imagen3: imagen("Foto chica 2", "/img/productos/remera-new-day-crew-1.jpg", { ancho: "medio" }),
    },
  },

  cinta: {
    titulo: "Cinta en movimiento",
    descripcion: "La franja con palabras que se desplazan debajo de la portada.",
    campos: {
      palabras: {
        tipo: "lineas",
        etiqueta: "Palabras",
        defecto: "Oversize\n*Nuevos ingresos*\nLa Plata 189\n*Streetwear*\nSantiago del Estero\n*Envíos a todo el país*",
        max: 240,
        maxLineas: 10,
        ayuda: "Una por renglón. *Entre asteriscos* va resaltada.",
      },
    },
  },

  categorias: {
    titulo: "Categorías",
    descripcion: "Las cuatro tarjetas grandes que llevan a cada sección del catálogo.",
    campos: {
      etiqueta: etiquetaSeccion("Comprá por categoría"),
      titulo: tituloSeccion("Todo lo que *se usa*"),
      items: {
        tipo: "lista",
        etiqueta: "Tarjetas",
        item: "Categoría",
        cantidad: 4,
        campos: {
          nombre: texto("Nombre", "", 30, { ancho: "medio" }),
          link: link("Link", "", { ayuda: "Ej: /categoria/remeras abre esa sección; /categoria/bermudas?sub=jean, ya filtrada." }),
          frase: parrafo("Frase", "", 90),
          imagen: imagen("Foto", ""),
        },
        defecto: [
          { nombre: "Remeras", link: "/categoria/remeras", frase: "Boxy y oversize en algodón pesado.", imagen: "/img/productos/remera-new-day-crew-1.jpg" },
          { nombre: "Bermudas", link: "/categoria/bermudas", frase: "De jean, de algodón y deportivas.", imagen: "/img/productos/bermuda-jean-gastado-1.jpg" },
          { nombre: "Camisas", link: "/categoria/camisas", frase: "Bowling y rayadas, para usar abiertas.", imagen: "/img/productos/camisa-bowling-negra-1.jpg" },
          { nombre: "Pantalones", link: "/categoria/pantalones", frase: "Baggy y wide leg con lavados únicos.", imagen: "/img/productos/pantalon-wide-leg-lavado-1.jpg" },
        ],
      },
    },
  },

  nuevos: {
    titulo: "Nuevos ingresos",
    descripcion: "Fila de productos recién cargados (se arma sola con el catálogo).",
    campos: {
      etiqueta: etiquetaSeccion("Recién llegado"),
      titulo: tituloSeccion("Nuevos *ingresos*"),
      cantidad: { tipo: "numero", etiqueta: "Cuántos mostrar", defecto: 4, max: 8, ancho: "medio" },
      linkTexto: texto("Texto del link", "Ver todo el catálogo", 30, { ancho: "medio" }),
      linkUrl: link("A dónde lleva", "/categoria/remeras"),
    },
  },

  lookbook: {
    titulo: "Lookbook",
    descripcion: "Mosaico de fotos de la calle y del local.",
    campos: {
      etiqueta: etiquetaSeccion("En la calle"),
      titulo: tituloSeccion("Así se ve *SCH*"),
      redTexto: texto("Link a redes", "@schindumentaria.sgo", 30, { ancho: "medio" }),
      redLink: link("A dónde lleva", "https://www.instagram.com/schindumentaria.sgo/"),
      fotos: {
        tipo: "lista",
        etiqueta: "Fotos",
        item: "Foto",
        cantidad: 4,
        ayuda: "La 1 es la alta; las otras son cuadradas.",
        campos: {
          imagen: imagen("Foto", ""),
          texto: texto("Epígrafe", "", 30, { ancho: "medio" }),
        },
        defecto: [
          { imagen: "/img/productos/remera-valley-oversize-1.jpg", texto: "Valley" },
          { imagen: "/img/inicio/local-sch-1.jpg", texto: "En el local" },
          { imagen: "/img/productos/camisa-bowling-negra-1.jpg", texto: "Bowling" },
          { imagen: "/img/inicio/local-sch-2.jpg", texto: "Camiseta UTE" },
        ],
      },
    },
  },

  beneficios: {
    titulo: "Beneficios",
    descripcion: "Cuatro avisos cortos de envío, pago y retiro.",
    campos: {
      items: {
        tipo: "lista",
        etiqueta: "Avisos",
        item: "Aviso",
        cantidad: 4,
        campos: {
          titulo: texto("Título", "", 36),
          texto: parrafo("Texto", "", 110),
        },
        defecto: [
          { titulo: "Envío gratis", texto: "En compras desde $150.000 a todo el país." },
          { titulo: "10% off", texto: "Pagando por transferencia bancaria." },
          { titulo: "Hasta 6 cuotas", texto: "Con tarjeta de crédito, por Mercado Pago." },
          { titulo: "Retiro sin costo", texto: "En el local de La Plata 189, Santiago del Estero." },
        ],
      },
    },
  },

  local: {
    titulo: "El local",
    descripcion: "Dirección, horarios y mapa.",
    campos: {
      etiqueta: etiquetaSeccion("Visitanos"),
      titulo: tituloSeccion("Pasá por *La Plata 189*"),
      bajada: parrafo("Texto", "Probate todo en persona: remeras, bermudas, camisas, pantalones y zapas.", 200),
      direccion: texto("Dirección", "La Plata 189, Santiago del Estero", 60, { ancho: "medio" }),
      horarios: texto("Horarios", "Lunes a sábado · 9 a 13 y 18 a 22 hs", 60, { ancho: "medio" }),
      botonTexto: texto("Botón", "Cómo llegar", 30, { ancho: "medio" }),
      botonLink: link("Link del mapa", "https://maps.app.goo.gl/9vVBNpbeBPQEKGS27"),
      imagen: imagen("Foto del local", "/img/inicio/local-sch-1.jpg", { ayuda: "Mejor una foto vertical." }),
    },
  },

  cierre: {
    titulo: "Cierre",
    descripcion: "La invitación final antes del pie de página.",
    campos: {
      etiqueta: etiquetaSeccion("Siempre hay algo nuevo"),
      titulo: {
        tipo: "lineas",
        etiqueta: "Título",
        defecto: "Seguinos y\nenterate *primero*",
        max: 60,
        maxLineas: 3,
        ayuda: "*Entre asteriscos* queda resaltado.",
      },
      botonTexto: texto("Botón", "Ir al Instagram", 30, { ancho: "medio" }),
      botonLink: link("Link del botón", "https://www.instagram.com/schindumentaria.sgo/"),
      secundarioTexto: texto("Link secundario", "Ver el catálogo", 40, { ancho: "medio" }),
      secundarioLink: link("A dónde lleva", "/categoria/remeras"),
    },
  },
};

module.exports = { SECCIONES, FONDOS };
