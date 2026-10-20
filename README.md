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

Usuarios de prueba: `demo@tienda.com / Demo1234` (cliente), `admin@tienda.com / Admin1234`, `super@tienda.com / Super1234`
(superadmin: además edita la página de inicio). El resto (Mercado Pago, emails, Google) funciona en modo demo hasta que
completes el `.env` (ver `ACCESO.md`, `PAGOS.md`, `DEPLOY.md`).

## Qué cambió respecto de project1

- **Talles**: `productos.talles` (ej. `S,M,L,XL`) y `pedido_items.talle`. El cliente elige talle en la ficha y queda en el
  carrito y el pedido. La base existente se actualiza sola al arrancar (o `database/migraciones/009-talles.sql`).
- Datos de prueba de ropa (`database/datos-prueba.sql`) con las categorías Remeras, Bermudas, Camisas y Pantalones.
- Contenido editable del inicio rehecho (`src/data/inicioEditable.js`).
- Panel: el formulario de producto edita talles, colores nuevos, resumen, descripción y fotos con vista previa.

## Diseño (rama `v2`: blanco y negro)

Ver [`design-system/sch/MASTER.md`](design-system/sch/MASTER.md).

## Pendiente / a tener en cuenta

- **Fotos**: las del catálogo y del inicio son recortes de capturas del Instagram (baja resolución). Reemplazarlas desde
  Panel → Productos y Panel → Página de inicio.
- **Stock por talle**: el stock es un solo número por producto (no por talle).
- Categorías Sastreros, Zapas y Feria (las historias del Instagram) no están cargadas: se crean desde Panel → Categorías.
- Completar en `.env`: razón social, CUIT, email, WhatsApp, plazo de cambios (`TIENDA_PLAZO_CAMBIOS`), datos de transferencia.
