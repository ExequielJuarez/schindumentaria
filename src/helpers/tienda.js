// Datos de la tienda que salen en las páginas legales, el pie de página y el
// comprobante. Se completan en el .env (ver .env.example). Los vacíos no se muestran.
function limpiarWhatsapp(numero) {
  const digitos = String(numero || "").replace(/\D/g, "");
  return digitos ? `https://wa.me/${digitos}` : "";
}

module.exports = function datosTienda() {
  const e = process.env;
  return {
    nombre: "SCH Indumentaria",
    usuario: "@schindumentaria.sgo",
    razonSocial: e.TIENDA_RAZON_SOCIAL || "",
    cuit: e.TIENDA_CUIT || "",
    direccion: e.TIENDA_DIRECCION || "La Plata 189, Santiago del Estero",
    telefono: e.TIENDA_TELEFONO || "",
    email: e.TIENDA_EMAIL || "",
    whatsapp: limpiarWhatsapp(e.TIENDA_WHATSAPP),
    instagram: e.TIENDA_INSTAGRAM || "https://www.instagram.com/schindumentaria.sgo/",
    mapa: e.TIENDA_MAPA_URL || "https://maps.app.goo.gl/9vVBNpbeBPQEKGS27",
    horarios: e.TIENDA_HORARIOS || "Lun a Sáb · 9 a 13 y 18 a 22 hs",
    facebook: e.TIENDA_FACEBOOK || "",
    tiktok: e.TIENDA_TIKTOK || "",
    // Link del formulario 960 "Data fiscal" que da ARCA (ex AFIP)
    dataFiscal: e.TIENDA_DATA_FISCAL_URL || "",
    web: (e.APP_URL || "").replace(/^https?:\/\//, "").replace(/\/$/, ""),
  };
};
