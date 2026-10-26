// Direcciones por las que se puede abrir la tienda desde otros dispositivos
// de la misma red (por ejemplo, el celular conectado al mismo Wi-Fi).
const os = require("os");

// IPv4 de la red local, sin las de loopback ni las virtuales más comunes (Docker, VPN)
function direccionesLocales() {
  const virtual = /^(docker|br-|veth|virbr|vmnet|vboxnet|utun|tun|tap|zt|tailscale)/i;
  const lista = [];
  for (const [nombre, interfaces] of Object.entries(os.networkInterfaces())) {
    if (virtual.test(nombre)) continue;
    for (const i of interfaces || []) {
      if (i.family === "IPv4" && !i.internal) lista.push({ nombre, ip: i.address });
    }
  }
  return lista;
}

// Líneas listas para mostrar en la consola al arrancar
function avisoDeArranque(puerto, host) {
  const lineas = [`   💻 En esta compu:  http://localhost:${puerto}`];
  if (host === "127.0.0.1" || host === "localhost") {
    lineas.push("   📵 Solo esta compu (HOST=127.0.0.1). Sacá HOST del .env para abrirla desde el celular.");
    return lineas;
  }
  const redes = direccionesLocales();
  if (redes.length) {
    for (const r of redes) lineas.push(`   📱 Desde el celular (mismo Wi-Fi): http://${r.ip}:${puerto}${redes.length > 1 ? `   (${r.nombre})` : ""}`);
  } else {
    lineas.push("   📱 No se detectó una red local: conectá la compu al Wi-Fi para abrirla desde el celular.");
  }
  return lineas;
}

module.exports = { direccionesLocales, avisoDeArranque };
