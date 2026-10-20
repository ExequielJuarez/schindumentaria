// Inicio: el carril del lookbook se arrastra con el mouse (en el celular se desliza con el dedo).
(() => {
  // Lookbook: arrastrar con el mouse
  const carril = document.querySelector(".carril");
  if (carril && matchMedia("(hover: hover)").matches) {
    let abajo = false, x = 0, s = 0;
    carril.addEventListener("mousedown", (e) => { abajo = true; x = e.pageX; s = carril.scrollLeft; carril.style.scrollSnapType = "none"; carril.style.cursor = "grabbing"; });
    window.addEventListener("mouseup", () => { abajo = false; carril.style.scrollSnapType = ""; carril.style.cursor = ""; });
    carril.addEventListener("mousemove", (e) => { if (!abajo) return; e.preventDefault(); carril.scrollLeft = s - (e.pageX - x); });
  }
})();
