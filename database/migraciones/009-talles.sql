-- ==========================================================
-- 009 — Talles de la ropa
-- productos.talles guarda los talles en venta ("S,M,L,XL"; vacío = sin talle)
-- pedido_items.talle guarda el talle que eligió el cliente
-- (La app también lo agrega sola al arrancar; esto es para hacerlo a mano.)
--   mysql -u root -p tienda_sch < database/migraciones/009-talles.sql
-- ==========================================================
USE tienda_sch;
ALTER TABLE productos     ADD COLUMN talles VARCHAR(80) NULL AFTER stock;
ALTER TABLE pedido_items  ADD COLUMN talle  VARCHAR(10) NULL AFTER color;
