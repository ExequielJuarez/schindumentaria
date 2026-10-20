// Pago: evita el doble clic al confirmar el pedido.
(() => {
  const form = document.getElementById("formPago");
  form?.addEventListener("submit", () => {
    const b = document.getElementById("btnConfirmar");
    b.classList.add("is-cargando");
    b.textContent = "Procesando…";
  });
})();
