// Inicio: el collage de la portada se mueve levemente con el mouse.
(() => {
  const collage = document.querySelector("[data-parallax]");
  if (!collage || matchMedia("(prefers-reduced-motion: reduce)").matches || !matchMedia("(hover: hover)").matches) return;
  const capas = [...collage.querySelectorAll("[data-capa]")];
  const base = capas.map((c) => getComputedStyle(c).transform);
  let cuadro;
  document.addEventListener("mousemove", (e) => {
    cancelAnimationFrame(cuadro);
    cuadro = requestAnimationFrame(() => {
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      capas.forEach((c, i) => {
        const f = (i + 1) * 7;
        const previo = base[i] === "none" ? "" : base[i];
        c.style.transform = `${previo} translate(${(x * f).toFixed(1)}px, ${(y * f).toFixed(1)}px)`;
      });
    });
  });
})();
