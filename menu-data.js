/* ============================================================
   MONTPELLIER RESTOBAR — DATOS DEL MENÚ
   ============================================================

   CÓMO EDITAR:
   - Cada apartado tiene su lista de "items"
   - Por cada plato puedes cambiar:
       name:      Nombre del plato
       desc:      Descripción breve (1-2 líneas)
       price:     Precio  ej. "$45.000"
       tags:      Etiquetas: "Chef", "Popular", "Vegano"  (o [])
       allergens: Ingredientes alérgenos (o "Ninguno")
       img:       Ruta de la foto  ej. "img/nombre.jpg"
                  o URL externa    ej. "https://..."

   CÓMO AGREGAR UN PLATO:
   Copia uno de los bloques { } dentro de items y pégalo.

   CÓMO AGREGAR UN APARTADO EXTRA:
   Al final del archivo hay una sección "extra" desactivada.
   Descomenta el bloque y ponle nombre, platos, etc.
   ============================================================ */

const MENU_DATA = {

  /* ──────────────────────────────────────────
     1. para comenzar 
     ────────────────────────────────────────── */
  Bienvenidos: {
    title: "Para Comenzar",
    tagline: "Para comenzar el viaje",
    items: [
      {
        name: "La trilogia de Montpellier",//#1
        desc: " 3 Unidades de pan brioche mini rellenos de camarón y carne de jaiba en cremosa salsa bisque, terminados con queso mozzarella, alioli y cilantro fresco.",
        price: "$43.500",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Nachos de Carne y Jalapeños",//#1
        desc: "Totopos crocantes bañados en carne de res artesanal molida, queso mozzarella gratinado, jalapeños y cebollas encurtidas, acompañados de guacamole y suero costeño. ",
        price: "$38.500",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Empanaditas Pork Belly",//#1
        desc: "5 Crujientes empanadas rellenas de bondiola ahumada y queso mozzarella,acompañadas de salsa citrus y suero picante.",
        price: "$35.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Patacones Poseidon",//#1
        desc: "3 Unidades de Patacones crocantes coronados con mix de mariscos en salsa cóctel, terminados con langostinos salteados.",
        price: "$40.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Tostaditas Trufadas",//#1
        desc: "3 Tostadas de maíz crocantes con solomito trufado, terminadas con maicitos, queso parmesano y cebollin.",
        price: "$38.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      /* ← Para agregar más entradas, pega un bloque aquí antes del ] */
    ]
  }, 
     Para_Compartir: {
    title: "Para Compartir",
    tagline: "Para alimentar el grupo",
    items: [
      {
        name: "Parrilla Mar",//#1
        desc: "Exquisita parrillada de mariscos con cola de langosta, langostinos, camarones, mejillones, mazorquitas, calamares salteados en salsa rocoto y chimichurri. Acompañados de patacones y suero costeño.",
        price: "$125.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Parrilla TIERRA",//#2
        desc: "Pechuga de pollo asada, churrasco al fuego, bondiola y solomito de res acompañados con croquetas de yuca frita, chimichurri y suero costeño.",
        price: "$85.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: "https://images.unsplash.com/photo-1608039755401-742074f0548d"
      },
      
      /* ← Para agregar más entradas, pega un bloque aquí antes del ] */
    ]
  },

  /* ──────────────────────────────────────────
     2. PLATO FUERTE
     ────────────────────────────────────────── */
  Hamburguesas: {
    title: "Hamburguesas",
    tagline: "La Explocion Del Sabor",
    items: [
      {
        name: "La Classique",
        desc: "Pan brioche con 150gr carne de res artesanal, lechuga crespa, tomate fresco, alioli y queso mozzarella crocante.",
        price: "$35.000",
        tags: ["Chef", "Popular"],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Smash Magestuosa",
        desc: "Pan brioche con 200gr de carne de res artesanal Smash, cebolla caramelizada, tocineta crocante, BBQ ahumada y queso mozzarella crocante.",
        price: "$35.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Crispy Queen",
        desc: "Pan brioche con 200gr de pechuga de pollo apanada y caramelizada en BBQ coreana, alioli y queso mozzarella crocante.",
        price: "$45.000",
        tags: ["Popular"],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Dos Naciones",
        desc: "Pan brioche con 150gr de carne de res artesanal, 150gr de pechuga de pollo a la parrilla, anillos de cebolla crocante, migas de chorizo, alioli y queso mozzarella crocante.",
        price: "$46.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Mares de MontPellier",
        desc: "Pan brioche con 150gr de carne de res artesanal, camarones crocantes, cebolla caramelizada, alioli de pimientos ahumados y queso mozzarella crocante. Acompañada con papas a la francesa.",
        price: "$43.000",
        tags: [""],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "La Montecarlo",
        desc: "Pan brioche con 150gr de carne de res artesanal, langostinos bañados en BBQ ahumada, cebolla rostizada y queso mozzarella gratinado.",
        price: "$48.000",
        tags: [""],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Calamar Crunch",
        desc: "Pan brioche con 150gr de carne de res artesanal, anillos de calamar crocantes, tomate fresco, alioli de sriracha y queso mozzarella crocante.",
        price: "$46.000",
        tags: [""],
        allergens: "Ninguno",
        img: ""
      },      /* ← Para agregar más platos fuertes, pega un bloque aquí antes del ] */
    ]
  },

  /* ──────────────────────────────────────────
     3. POSTRES
     ────────────────────────────────────────── */
  Platos_Fuertes: {
    title: "Platos Fuertes",
    tagline: "Lo Fuerte de MontPellier",
    items: [
      {
        name: "Churrasco al Fuego",
        desc: "300gr de Jugoso churrasco a la parrilla con chimichurri, acompañado de papas casco con parmesano, migas de chorizo y alioli",
        price: "$58.000",
        tags: [""],
        allergens: "",
        img: ""
      },
      {
        name: "Pollito Coreano",
        desc: "Cubos de pollo apanado y cubiertos en BBQ coreana,terminados con semillas de ajonjolí y cebollin, servidos sobre una cama de queso mozarella y cremoso puré de papa.",
        price: "$42.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Costillas ST. Louis",
        desc: "Costillas de cerdo caramelizadas en BBQ ahumada, acompañadas de papas a la francesa crocantes con alioli y queso costeño.",
        price: "$70.000",
        tags: ["Chef"],
        allergens: "Ninguno",
        img: ""
      },
      {
        name: "Brisas de MontPellier",
        desc: "Filete de pesca blanca a la plancha en salsa al ajillo, acompañado de puré trufado con parmesano",
        price: "$70.000",
        tags: ["Vegano"],
        allergens: "Ninguno",
        img: ""
      }
      /* ← Para agregar más postres, pega un bloque aquí antes del ] */
    ]
  },
  Picadas: {
    title: "Picadas",
    tagline: "La Mejor Convinacion de sabores",
    items: [
      {
        name: "La Consentida",
        desc: "Pechuga de pollo, chorizo santarrosano, cebolla caramelizada, papas casco, alioli de pimientos, queso gratinado, cebollín y tocineta.",
        price: "$47.000",
        tags: [""],
        allergens: "",
        img: ""
      },
      {
        name: "La Emblematica",
        desc: "Chicharrón, chorizo santarrosano, dados de queso crocante, papas a la francesa, cubitos de piña asada, alioli de pimientos y salsa de la casa.",
        price: "$49.000",
        tags: [""],
        allergens: "",
        img: ""
      },
      {
        name: "La Patrona",
        desc: "Churrasco, chicharrón, chorizo santarrosano, dados de queso crocante, ripio de patacón, chimichurri, alioli y papas a la francesa.",
        price: "$52.000",
        tags: [""],
        allergens: "",
        img: ""
      },
    ]
  },
      Recomendado: {
    title: "Recomendado",
    tagline: "Lo Mejor de lo Mejor",
    items: [
      {
        name: "Perrito de Pollo y Tocineta",
        desc: "Pan brioche, pechuga de pollo cubierta con mermelada de tocineta y cebollín.",
        price: "$36.000",
        tags: [""],
        allergens: "",
        img: ""
      },
    ]
  },
      Postres: {
    title: "Postres",
    tagline: "Lo fuerte de Nosotros",
    items: [
      {
        name: "Wonder Brawnie",
        desc: "Melcochudo brownie de Milo cubierto con crema de pistacho de la casa, crumble de galleta y acompañado de helado de vainilla",
        price: "$25.000",
        tags: [""],
        allergens: "",
        img: ""
      },
            {
        name: "Volcan de Arequipe",
        desc: "Bizcocho de arequipe con notas de amaretto acompañado con helado de vainilla.",
        price: "$24.900",
        tags: [""],
        allergens: "",
        img: ""
      },
            {
        name: "Klim Cookie",
        desc: "Galleta crujiente con relleno melcochudo de leche klim acompañado con helado de vainilla",
        price: "$23.000",
        tags: [""],
        allergens: "",
        img: ""
      },
    ]
  },
Cocteleria: {
  title: "Coctelería",
  tagline: "Nuestra selección de cócteles",

  items: [
    {
      type: "section",
      title: "Cocteleria Tradicional"
    },
    {
      name: "Margarita",
      desc: "",
      price: "$22.000",
      img: "https://i.ibb.co/ZRssMyXv/Captura-de-pantalla-2026-06-15-a-la-s-4-46-36-p-m.png"
    },
    {
      name: "Mojito",
      desc: "",
      price: "$22.000",
      img: "https://i.ibb.co/ycFSZHPP/Captura-de-pantalla-2026-06-15-a-la-s-4-47-31-p-m.png"
    },
    {
      name: "Moscow Mule",
      desc: "",
      price: "$22.000",
      img: "https://i.ibb.co/Mkn0F80V/Captura-de-pantalla-2026-06-15-a-la-s-4-48-34-p-m.png"
    },
    {
      name: "Piña Colada",
      desc: "",
      price: "$26.000",
      img: "https://i.ibb.co/fzY1ttXZ/Captura-de-pantalla-2026-06-15-a-la-s-4-49-36-p-m.png"
    },
    {
      name: "Sex On The Beach",
      desc: "",
      price: "$22.000",
      img: "https://i.ibb.co/Mk0nWQqc/Captura-de-pantalla-2026-06-15-a-la-s-4-50-35-p-m.png"
    },
    {
      name: "Caipiroska de Jamaica",
      desc: "",
      price: "$22.000",
      img: "https://i.ibb.co/pBCXddh2/Captura-de-pantalla-2026-06-15-a-la-s-4-52-31-p-m.png"
    },
    {
      name: "Bramble",
      desc: "",
      price: "$22.000",
      img: "https://i.ibb.co/ccTRFnRx/Captura-de-pantalla-2026-06-15-a-la-s-4-53-18-p-m.png"
    },
    {
      name: "Caipirinha",
      desc: "",
      price: "$22.000",
      img: "https://i.ibb.co/wFmrYY3w/Captura-de-pantalla-2026-06-15-a-la-s-4-53-55-p-m.png"
    },
    {
      name: "Fiero Spritz",
      desc: "",
      price: "$25.000",
      img: "https://i.ibb.co/HTnjctQr/Captura-de-pantalla-2026-06-15-a-la-s-4-54-37-p-m.png"
    },
    {
      type: "section",
      title: "Cocteleria de Autor"
    },

    {
      name: "Morenaza",
      desc: "Tequila, mezcal, sirope de vainilla, gulupa y sirope de masmelo.",
      price: "$30.000",
      img: ""
    },
    {
      name: "El Jardín Secreto",
      desc: "Ginebra de frambuesa, zumo de limón, mermelada de mora, sirope de especias.",
      price: "$30.000",
      img: ""
    },
    {
      name: "Piñita Piscosa",
      desc: "Tequila de chile de árbol, zumo de piña, zumo de maracuyá, zumo de limón y miel de agave.",
      price: "$30.000",
      img: ""
    },
    {
      name: "Costeñita Premium",
      desc: "Vodka, limón, maracuyá, cítricos y costeñita.",
      price: "$30.000",
      img: ""
    }
  ]
},


  /* ──────────────────────────────────────────
     4. BEBIDAS
     ────────────────────────────────────────── */
  bebidas: {
    title: "Bebidas",
    tagline: "Para acompañar",
    items: [
       {
      type: "section",
      title: "Bebidas con Alcohol"
    },
      {
        name: "Coronita",
        desc: "",
        price: "$8.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/ZpTkDBdp/Captura-de-pantalla-2026-06-15-a-la-s-2-46-18-p-m.png"
      },
            {
        name: "Club Colombia",
        desc: "",
        price: "$11.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/R4bjD0f7/Captura-de-pantalla-2026-06-15-a-la-s-2-48-31-p-m.png"
      },
            {
        name: "Stella Arcotois",
        desc: "",
        price: "$15.900",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/gLQWBvWS/Captura-de-pantalla-2026-06-15-a-la-s-2-50-40-p-m.png"
      },
            {
        name: "Costeñita",
        desc: "",
        price: "$6.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/FbpzJtd4/Captura-de-pantalla-2026-06-15-a-la-s-2-52-38-p-m.png"
      },
            {
        name: "Sangria",
        desc: "",
        price: "$24.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/XkYrnT4B/Captura-de-pantalla-2026-06-15-a-la-s-2-56-19-p-m.png"
      },
            {
        name: "Vino Espumoso",
        desc: "",
        price: "$24.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/VYMkSwmH/Captura-de-pantalla-2026-06-15-a-la-s-2-57-43-p-m.png"
      },
            {
      type: "section",
      title: "Bebidas sin Alcohol"
      },
            {
        name: "Agua sin Gas",
        desc: "",
        price: "$5.000",
        tags: [],
        allergens: "Ninguno",
        img: ""
      },
            {
        name: "Schweeppes",
        desc: "",
        price: "$7.500",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/0p8nb266/Captura-de-pantalla-2026-06-15-a-la-s-3-00-15-p-m.png"
      },
            {
        name: "Sprite",
        desc: "",
        price: "$7.500",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/MkZJY8Ry/Captura-de-pantalla-2026-06-15-a-la-s-3-01-44-p-m.png"
      },
            {
        name: "Coca Cola",
        desc: "",
        price: "$8.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/SwXmGGmn/Captura-de-pantalla-2026-06-15-a-la-s-2-59-09-p-m.png"
      },
            {
        name: "Soda Hatsu",
        desc: "",
        price: "$8.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/cSY5rZF2/Captura-de-pantalla-2026-06-15-a-la-s-3-02-39-p-m.png"
      },
            {
        name: "Te Hatsu",
        desc: "",
        price: "$10.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/MkptgQML/Captura-de-pantalla-2026-06-15-a-la-s-3-04-03-p-m.png"
      },
            {
        name: "Limonada de Coco",
        desc: "",
        price: "$18.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/zT3G0jK8/Captura-de-pantalla-2026-06-15-a-la-s-3-05-43-p-m.png"
      },
            {
        name: "Limonada Cerezada",
        desc: "",
        price: "$13.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/FQ441mq/Captura-de-pantalla-2026-06-15-a-la-s-3-08-11-p-m.png"
      },
            {
        name: "Limonada Natural",
        desc: "",
        price: "$10.000",
        tags: [],
        allergens: "Ninguno",
        img: "https://i.ibb.co/BV4ktwTV/Captura-de-pantalla-2026-06-15-a-la-s-3-06-20-p-m.png"
      },
      /* ← Para agregar más bebidas, pega un bloque aquí antes del ] */
    ]
  },

  /* ──────────────────────────────────────────
     5. CÓCTELES
     ────────────────────────────────────────── */
  botellas: {
    title: "Botellas",
    tagline: "Las Mejores Botellas ",
    items: [
      {
        name: "Tequila Jose Cuervo Especial",
        desc: "",
        shot: "$9.600",
        bottle: "$134.000",
        img: "https://i.ibb.co/hJ3sx0w3/Captura-de-pantalla-2026-06-15-a-la-s-4-56-37-p-m.png"
      },
            {
        name: "Ron Viejo Caldas",
        desc: "",
        shot: "$5.000",
        bottle: "$65.000",
        img: "https://i.ibb.co/Y7N5d88K/Captura-de-pantalla-2026-06-15-a-la-s-5-05-39-p-m.png"
      },
            {
        name: "Gordon Dry Gin",
        desc: "",
        shot: "$8.000",
        bottle: "$110.000",
        img: "https://i.ibb.co/S4QGqQfn/Captura-de-pantalla-2026-06-15-a-la-s-5-09-04-p-m.png"
      },
            {
        name: "Gordon Pink Gin",
        desc: "",
        shot: "$11.000",
        bottle: "$155.000",
        img: "https://i.ibb.co/gMqLmt5z/Captura-de-pantalla-2026-06-15-a-la-s-5-10-45-p-m.png"
      },
            {
        name: "Martin Fierro",
        desc: "",
        shot: "$10.000",
        bottle: "$123.000",
        img: "https://i.ibb.co/ynRr6hZD/Captura-de-pantalla-2026-06-15-a-la-s-5-17-44-p-m.png"
      },
            {
        name: "Aguardiente",
        desc: "",
        shot: "$5.500",
        bottle: "$76.00",
        img: "https://i.ibb.co/6cJHDh1N/Captura-de-pantalla-2026-06-15-a-la-s-5-17-09-p-m.png"
      },
            {
        name: "Smirnoff Vodka",
        desc: "",
        shot: "$9.500",
        bottle: "$128.500",
        img: "https://i.ibb.co/QvW4zxSt/Captura-de-pantalla-2026-06-15-a-la-s-5-03-29-p-m.png"
      },
            {
        name: "Vino Blanco",
        desc: "",
        bottle: "$142.000",
        img: "https://i.ibb.co/HTx1Pmdk/Captura-de-pantalla-2026-06-15-a-la-s-5-19-07-p-m.png"
      },
            {
        name: "Vino rosaleda",
        desc: "",
        bottle: "$33.000",
        img: "https://i.ibb.co/BHZG9RGM/Captura-de-pantalla-2026-06-15-a-la-s-5-19-46-p-m.png"
      },
            {
        name: "Sangria",
        desc: "",
        bottle: "112.000",
        img: "https://i.ibb.co/cKfFTRD9/Captura-de-pantalla-2026-06-15-a-la-s-5-20-36-p-m.png"
      },
    ]
  }

  /* ══════════════════════════════════════════════
     APARTADO EXTRA — DESCOMENTA PARA ACTIVARLO
     (quita los  /*  y  * /  de este bloque)
     ══════════════════════════════════════════════

  ,
  extra: {
    title: "Especiales",          ← Cambia el nombre del apartado
    tagline: "Solo por hoy",      ← Cambia el subtítulo
    items: [
      {
        name: "Nombre del plato",
        desc: "Descripción breve.",
        price: "$00.000",
        tags: ["Chef"],
        allergens: "Ninguno",
        img: "img/especial-1.jpg"
      }
    ]
  }

     ══════════════════════════════════════════════ */

};

/* ── LEYENDA DE ETIQUETAS ────────────────────────
   "Chef"    → Recomendación del chef
   "Popular" → Plato más pedido
   "Vegano"  → Opción vegetariana / vegana
   ─────────────────────────────────────────────── */
