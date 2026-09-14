# De a Dos — tienda Shopify

Estado al 14/09/2026. **Nada está publicado.** Todo vive en un tema duplicado.

- Tienda: `vigewd-ny.myshopify.com` (plan **trial** — hay que pasar a un plan pago antes de poder vender)
- Tema publicado: **Dawn** (intacto, no lo toqué — Shopify bloquea escrituras sobre el tema vivo)
- Tema de trabajo: **"De a Dos — v1 (borrador)"**, id `189767254318`, estado *unpublished*

Para verlo: Shopify admin → Tienda online → Temas → "De a Dos — v1 (borrador)" → **Vista previa**.

---

## Qué NO pude consultar

El proyecto de Claude Cowork **"Cartas - Análisis de mercado"**. En esta sesión no hay
ninguna herramienta que lea proyectos de Cowork, así que no lo usé y no inventé nada
atribuido a él.

Lo que sí usé como base estratégica real:

1. `roadmap/cartas-tematicas-de-parejas.md` de este repo (investigación de mercado
   argentino con fuentes verificables).
2. El contenido real de los 3 productos ya cargados en Shopify.
3. La identidad visual real que ya existía en `sections/announcement-bar.liquid` del
   tema vivo (ver más abajo).

---

## Decisiones y de dónde salen

| Decisión | De dónde sale |
|---|---|
| Mobile primero, sticky add-to-cart, cuotas visibles arriba del botón | 79,5% de las compras online AR 2025 son por celular |
| Sección de **niveles** justo después del insight, antes de los productos | La progresión visible es lo que hizo grande a WNRS: no vendió preguntas, vendió tres niveles |
| Combo destacado y en el centro de la grilla | Ticket promedio Tiendanube $90.396 vs. mazo $39.900 → el combo es lo que sube el ticket |
| Precio $39.900 sin tocar | Referencia local (En Palabras) $34.000–$42.000. Con producto superior se para arriba, no se compite por precio |
| Copy en argentino, sin psicologismo ni español neutro | El avatar no se mueve con terapia ni con preguntas traducidas. Es la ventaja imposible de copiar |
| Se evitan "conexión", "vínculo", "conocerse de verdad" en titulares | Territorio saturado en el nicho |
| Hero: "No es un juego de preguntas. Es un plan para esta noche." | 38% del target elige experiencias por sobre objetos → se vende la noche, no el mazo |
| Sección de prueba social **desactivada** | No hay testimonios reales todavía. Inventarlos quema la marca |
| Sin urgencia falsa ni contadores | Pedido explícito: sin dark patterns |

### Conflicto con el brief que me pasaste

Tu prompt describe el producto 1 como *"SIN VUELTAS — 58 cartas, clásico"* y el 2 como
*"SIN VUELTAS Edición 2 / HOT"*. En la tienda real es al revés:

- **Morite de amor** — 58 cartas, +16, $39.900 (el clásico)
- **Sin vueltas** — 48 cartas, +18, $39.990 (el picante)
- **El combo entero** — 106 cartas, $64.900

Prioricé lo que está cargado en Shopify. Si el naming del prompt es el definitivo, hay
que renombrar productos y handles antes de publicar.

---

## Identidad visual

Encontré que `sections/announcement-bar.liquid` del tema vivo **había sido pisado** por
un hero custom ("Hero De a Dos") de trabajo anterior — por eso la barra de anuncios no
funcionaba. De ahí saqué la paleta y tipografía reales, y las usé en vez de inventar:

| Rol | Color |
|---|---|
| Papel | `#F7F3EE` |
| Tinta / titulares | `#4A183F` |
| Acento de marca | `#C87869` |
| Trama | `#B8A4B8` |

Tipografía: **DM Serif Display** (titulares) + **Manrope** (cuerpo). Ambas existen en la
librería de Shopify y quedaron configuradas en el tema.

**Un ajuste:** `#C87869` sobre `#F7F3EE` da 2,5:1 de contraste — ilegible en texto chico
(bajadas, etiquetas). Para esos usos puse `#A8523F`, que es el mismo color oscurecido y
llega a 4,7:1. El `#C87869` original quedó para rellenos y para la sección de cierre
sobre fondo oscuro. Es editable por sección desde el editor de temas.

Esquemas de color del tema:

- `scheme-1` papel · `scheme-2` papel profundo · `scheme-3` tinta (badges)
- `scheme-4` tinta profunda `#2E0D27` · `scheme-5` vino `#3A0F22` (+18)

---

## Arquitectura de la Home

Embudo: reconocimiento → comprensión → deseo → oferta → refuerzo → objeciones → cierre.

1. **Hero** — qué es, para quién, por qué importa. CTA "Elegir mi mazo".
2. **Insight** — cuatro momentos reconocibles + el giro: *"Falta la excusa, no las ganas."*
3. **Niveles** — los cinco momentos del mazo con barra de intensidad. El diferenciador.
4. **Cómo se juega** — tres pasos, sin manual.
5. **Productos** — los tres SKU, combo destacado al centro, cuotas y anclaje de precio.
6. **Qué puede pasar** — carrusel con forma de carta (63×88).
7. **Diferenciadores** — seis, todos sostenibles con el producto real.
8. **Prueba social** — *desactivada* hasta tener testimonios reales.
9. **FAQ** — nueve objeciones + datos estructurados FAQPage.
10. **Cierre** — "Todavía no sabés todo de mí." sobre fondo oscuro.

## Página de producto

`main-product` con el orden: marca → título → precio → **cuotas + envío** → comprar →
tira de confianza (envío, regalo, pago, origen) → **cross-sell al combo con el ahorro
calculado** → descripción → compartir.

Debajo: barra de compra fija (mobile), cómo se juega, qué puede pasar, diferenciadores,
FAQ y productos relacionados.

El cross-sell y las cuotas están hechos con bloques `custom_liquid` de Dawn: no toqué
`main-product.liquid`, así que el tema sigue siendo actualizable.

---

## Cambios en datos de la tienda (afectan también al tema publicado)

- **Combo**: corregí un error de cuentas. Decía *"Sueltos suman $77.800"*; 39.900 + 39.990
  = **$79.890**. Puse el precio de comparación en $79.890, así el ahorro real ($14.990)
  se muestra solo.
- **SEO**: títulos y meta descripciones en los tres productos (antes estaban vacíos).

---

## Qué falta

1. **Contenido de las páginas** — la navegación ya está bien (menú en español, colección
   `los-mazos` con los 3 productos, y las páginas *Cómo se juega*, *Qué es De a Dos*,
   *Preguntas frecuentes*, *Envíos y cambios* y *Contacto* existen y están publicadas).
   No revisé qué dice adentro de cada una: vale la pena chequear que el contenido esté
   al nivel del resto y que *Envíos y cambios* diga plazos y costos reales.
2. **Logo** — no hay. Subirlo en Tema → Configuración → Logo.
3. **Imagen del hero** — apunta a una de las imágenes de producto. Son renders generados,
   no fotos reales del packaging. Cuando tengas fotos reales, reemplazala.
4. **Cuotas** — puse 6 como valor por defecto en tres lugares. Ajustalo a lo que
   realmente ofrecés (editor de temas, campo "Mostrar cuotas").
5. **Textos de "Qué puede pasar"** — son descripciones de resultados, no frases textuales
   del mazo. Cuando quieras, reemplazalos por cartas reales: es el formato que mejor
   rinde en Reels.
6. **Prueba social** — activar la sección cuando haya testimonios reales con foto.
7. **Analítica** — Shopify ya emite `view_item`, `add_to_cart`, `begin_checkout` y
   `purchase` vía Customer Events cuando conectás GA4 / Meta / TikTok. No instalé apps.
8. **Restos del tema anterior** — `sections/Hero-de-a-dos.liquid` y `sections/pruebba.liquid`
   quedaron sin usar en el borrador. Se pueden borrar.
9. **QA visual** — no pude abrir la tienda desde acá (la red de esta sesión bloquea
   `myshopify.com` y `cdn.shopify.com`). Hay que mirar la vista previa en desktop y en
   390 px antes de publicar.

---

## Estructura de este directorio

`tienda/sections/` y `tienda/assets/` son copia del código custom que está en el tema
borrador. Los `templates/*.json`, `config/settings_data.json` y `sections/*-group.json`
los maneja el editor de temas y viven solo en Shopify.
