// Detalle del pedido: botones "Copiar" de los datos de la transferencia.
document.querySelectorAll("[data-copiar]").forEach((b) =>
  b.addEventListener("click", async () => {
    const valor = b.parentElement.querySelector("[data-copiar-valor]")?.dataset.copiarValor;
    try { await navigator.clipboard.writeText(valor); window.VELT.toast("Copiado ✓"); } catch { window.VELT.toast("No se pudo copiar", "error"); }
  })
);
