// npm run celular → muestra la dirección para abrir la tienda desde el celular
require("dotenv").config({ quiet: true });
const puerto = Number(process.env.PORT) || 3000;
console.log("\nCon la tienda encendida (npm run dev), abrila desde el celular conectado al mismo Wi-Fi:\n");
require("./red").avisoDeArranque(puerto, process.env.HOST || "0.0.0.0").forEach((l) => console.log(l));
console.log("\nSi no abre: revisá que el celular esté en el mismo Wi-Fi (no en datos móviles) y que el firewall permita el puerto " + puerto + ".\n");
