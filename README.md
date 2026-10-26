# SCH Indumentaria — tienda online

Ecommerce de **SCH Indumentaria** ([@schindumentaria.sgo](https://www.instagram.com/schindumentaria.sgo/)), ropa de calle
en Santiago del Estero (La Plata 189). Express 5 + EJS + Sequelize/MySQL.

La estructura de carpetas, la lógica del servidor (carrito, checkout, pagos con Mercado Pago, panel de administración,
notificaciones, botón de arrepentimiento) viene de `project1`. **Todas las vistas, el CSS y el JS del front son nuevos.**

## Probarla en tu compu

```bash
npm install
cp .env.example .env          # completá DB_USER / DB_PASSWORD
npm run db:instalar           # crea la base "tienda_sch" con datos de prueba
npm run dev                   # http://localhost:3000
```

### Verla desde el celular (misma red Wi-Fi)

La app ya escucha en toda la red (`HOST=0.0.0.0`), así que no hay que configurar nada más:

1. Encendé la tienda en la compu: `npm run dev`. Al arrancar muestra algo así:
   ```
   💻 En esta compu:  http://localhost:3000
   📱 Desde el celular (mismo Wi-Fi): http://192.168.0.15:3000
   ```
   (`npm run celular` vuelve a mostrar esa dirección sin encender nada.)
2. Conectá el celular **al mismo Wi-Fi** (no a datos móviles) y abrí esa dirección en el navegador.

Si no abre:
- **Windows**: la primera vez aparece un aviso del firewall para `node.exe`; marcá **Redes privadas** y permití. Si ya lo cerraste, activalo en *Firewall de Windows → Permitir una aplicación*.
- **Router**: algunos Wi-Fi de invitados o de oficina tienen "aislamiento de clientes" y bloquean la conexión entre dispositivos. Usá la red principal.
- **Linux**: `sudo ufw allow 3000/tcp`.
- Para dejar la tienda **solo en esta compu**: poné `HOST=127.0.0.1` en el `.env`.

Tené en cuenta que, mientras probás por IP, el pago real con Mercado Pago y "Continuar con Google" necesitan una dirección pública con https
(ver `PAGOS.md` y `ACCESO.md`); los modos demo funcionan igual desde el celular.

Usuarios de prueba: `demo@tienda.com / Demo1234` (cliente), `admin@tienda.com / Admin1234`, `super@tienda.com / Super1234`
(superadmin: además edita la página de inicio). El resto (Mercado Pago, emails, Google) funciona en modo demo hasta que
completes el `.env` (ver `ACCESO.md`, `PAGOS.md`, `DEPLOY.md`).

## Qué cambió respecto de project1

- **Talles**: `productos.talles` (ej. `S,M,L,XL`) y `pedido_items.talle`. El cliente elige talle en la ficha y queda en el
  carrito y el pedido. La base existente se actualiza sola al arrancar (o `database/migraciones/009-talles.sql`).
- Datos de prueba de ropa (`database/datos-prueba.sql`) con las categorías Remeras, Bermudas, Camisas y Pantalones.
- Contenido editable del inicio rehecho (`src/data/inicioEditable.js`).
- Panel: el formulario de producto edita talles, colores nuevos, resumen, descripción y fotos con vista previa.

## Diseño

Ver [`design-system/sch/MASTER.md`](design-system/sch/MASTER.md).

## Pendiente / a tener en cuenta

- **Fotos**: las del catálogo y del inicio son recortes de capturas del Instagram (baja resolución). Reemplazarlas desde
  Panel → Productos y Panel → Página de inicio.
- **Stock por talle**: el stock es un solo número por producto (no por talle).
- Categorías Sastreros, Zapas y Feria (las historias del Instagram) no están cargadas: se crean desde Panel → Categorías.
- Completar en `.env`: razón social, CUIT, email, WhatsApp, plazo de cambios (`TIENDA_PLAZO_CAMBIOS`), datos de transferencia.
