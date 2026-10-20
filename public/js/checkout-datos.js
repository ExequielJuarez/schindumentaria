// Datos del checkout: muestra/oculta domicilio y factura A, y marca errores sin recargar.
(() => {
  const { $, $$ } = window.SCH;
  const form = $("#formDatos");
  if (!form) return;

  const domicilio = $("#camposDomicilio");
  const factura = $("#camposFactura");
  const sync = () => {
    const retiro = form.entrega.value === "retiro";
    domicilio.hidden = retiro;
    factura.hidden = form.facturacion.value !== "facturaA";
  };
  $$('input[name="entrega"], input[name="facturacion"]').forEach((i) => i.addEventListener("change", sync));
  sync();

  // Solo números en DNI, código postal y CUIT
  const soloNum = (sel, extra = "") => $(sel)?.addEventListener("input", (e) => (e.target.value = e.target.value.replace(new RegExp(`[^0-9${extra}]`, "g"), "")));
  soloNum("#c-dni"); soloNum("#c-codigoPostal"); soloNum("#c-cuit", "-");

  // El aviso de error se va apenas el cliente corrige el campo
  form.addEventListener("input", (e) => e.target.closest(".campo--error")?.classList.remove("campo--error"));

  // Evita enviar con los campos obligatorios vacíos y lleva al primero con error
  form.addEventListener("submit", (e) => {
    $$(".campo--error", form).forEach((c) => c.classList.remove("campo--error"));
    const retiro = form.entrega.value === "retiro";
    const obligatorios = ["email", "nombre", "apellido", "telefono", "dni"].concat(retiro ? [] : ["calle", "numero", "codigoPostal", "ciudad", "provincia"]);
    const vacios = obligatorios.filter((n) => !form[n].value.trim());
    if (vacios.length) {
      e.preventDefault();
      vacios.forEach((n) => form[n].closest(".campo").classList.add("campo--error"));
      form[vacios[0]].focus();
      window.SCH.toast("Completá los campos marcados", "error");
    }
  });
})();
