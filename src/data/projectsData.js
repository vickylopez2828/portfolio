// title="Guitar LA"
//                 subtitle="Ecommerce de Guitarras"
//                 description="Ecommerce desarrollado con React, Tailwind y Use Reducers."
//                 images={["/screenguitar.png", "/guitar2.png", "/guitar3.png"]}

export const projects = [
    {
        id:0,
        category: "PWA",
        title: "EcoFirma",
        subtitle: "Gestión de órdenes de entrega",
        description: "Ecofirma es una PWA que digitaliza la entrega y recepción de repuestos entre proveedor, taller y aseguradora: registra entregas totales/parciales, captura firma digital y actualiza los estados de la orden de forma automática.",
        descriptionLarge: "Ecofirma es una PWA para gestionar órdenes de entrega de repuestos en siniestros, con roles de Proveedor, Taller, Aseguradora y Admin. La aseguradora define qué repuestos deben entregarse; el proveedor crea la orden, registra una o varias entregas parciales o totales, y el taller realiza la firma digital de cada entrega. La orden avanza automáticamente por los estados (pendiente → entrega_parcial/entregada → completada) según el progreso y la firma. La aseguradora puede ver las órdenes desde el inicio y el admin gestiona todo el ciclo. Técnicamente, implementé el front con React + TypeScript, manejo de estado con Zustand, formularios con React Hook Form y Yup, estilos Tailwind, navegación con React Router DOM y notificaciones Toastify y lo empaqueté como PWA (mobile-first). Integré el back existente en Supabase (Auth, Postgres, Storage), consumiendo RPCs y tablas provistas y ajustando la integración del lado del cliente. El resultado es una app instalable, rápida y con trazabilidad completa de cada orden y entrega.",
        images: ["/projects/ecofirma.png","/projects/ecofirma2.png", "/projects/ecofirma3.png", "/projects/ecofirma4.png"],
        skills: ["React Js", "TypeScript", "Tailwind"],
        demo: null,
        git: null
    },
    {
        id: 1,
        category: "Web",
        title: "Nyxa Solutions",
        subtitle: "Página institucional",
        description: "Sitio web corporativo desarrollado para Nyxa Solutions, con diseño UX/UI en Figma, desarrollo frontend en React y Tailwind, integración de formulario de contacto y optimización SEO básica.",
        descriptionLarge: "La página institucional de Nyxa Solutions fue desarrollada como un sitio web moderno y responsive para mostrar los servicios de la empresa. Realicé el diseño de UX/UI en Figma y lo implementé con React + Tailwind, cuidando la identidad visual y la experiencia del usuario. Integré un formulario de contacto conectado a un correo corporativo, configuré el dominio y hosting en Hostinger, y gestioné cuentas de email asociadas. También apliqué optimización SEO básica para mejorar la visibilidad en buscadores y desplegué el proyecto en producción. El resultado fue un sitio rápido, adaptable a distintos dispositivos y alineado con la imagen de la marca.",
        images: ["/projects/nyxa1.png", "/projects/nyxa2.png", "/projects/nyxa3.png", "/projects/nyxa4.png"],
        skills: ["React Js", "Tailwind", "Figma"],
        demo: "https://nyxasolutions.com",
        git: null
    },
    {
        id:2,
        category: "WebApp",
        title: "Parkify",
        subtitle: "Gestión de estacionamientos",
        description: "Aplicación web que conecta a conductores con estacionamientos privados en grandes ciudades, mostrando disponibilidad en tiempo real y permitiendo reservas anticipadas a través de WhatsApp.",
        descriptionLarge: "Parkify es una aplicación web que permite a los conductores encontrar estacionamientos privados en tiempo real y hacer reservas anticipadas. A su vez los dueños de parkings pueden resgistrar y administrar la disponibilidad de los mismos. En este proyecto desarrollé componentes interactivos y dinámicos con React. Utilicé Zustand para el manejo de estado y Material UI para el diseño de los componentes. Integré Google Maps API para la visualización de estacionamientos y la geolocalización. Además, conecté el frontEnd con el backEnd (Java con SpringBoot) utilizando Axios para las llamadas API, e implementé rutas con React Router DOM para la navegación. Realicé validaciones de formularios utilizando React Hook Form y Yup, y trabajé en la creación de pantallas a partir de prototipos de Figma. También implementé notificaciones con Toastify para mejorar la experiencia de usuario. Participé en reuniones diarias con el equipo, utilizando metodologías ágiles como Scrum y Kanban. El proyecto también implementa un flujo de trabajo con Git para control de versiones.",
        images: ["/projects/parkify.png","/projects/parkify-1.png", "/projects/parkify-2.png"],
        skills: ["React Js", "TypeScript", "Material UI"],
        demo: null,
        git: "https://github.com/vickylopez2828/parkify-front"
    },
    {
        id:3,
        category:"App FullStack",
        title:"Admin Productos",
        subtitle:"PERN",
        description:"Sistema completo para la gestión de productos, desarrollado con el stack PERN (PostgreSQL, Express, React, Node.js).",
        descriptionLarge: "Sistema completo para la gestión de productos. Backend: Desarrollado con Node.js y Express, utilizando Sequelize como ORM para la gestión de la base de datos en PostgreSQL. Se implementaron middlewares como cors, morgan y express-validator para la seguridad y el registro de solicitudes. La API está documentada con Swagger. Frontend: Construido con React y TypeScript, utilizando React Router DOM para la navegación y Tailwind CSS para el diseño. Pruebas: Se realizaron pruebas unitarias e integración con Jest para garantizar la estabilidad del sistema.",
        images:["/projects/admin1.png", "/projects/admin2.png"],
        skills:["React Js", "Node Js", "PostgreSQL"],
        demo: null,
        git:"https://github.com/vickylopez2828/adminProductsPERN"
    },
    {
        id:4,
        category:"App",
        title:"Admin Pacientes",
        subtitle:"Veterinaria",
        description:"Seguimiento de pacientes de veterinaria. Administrando el estado global con Zustand.",
        descriptionLarge: "Sistema de seguimiento de pacientes para veterinaria desarrollado con React. Se utilizó React Hook Form para la validación de campos, Zustand para la gestión del estado global y React Toastify para notificaciones. La interfaz está diseñada con Tailwind CSS, ofreciendo una experiencia moderna y fluida. Deployado en Netlify",
        images:["/projects/vete.png", "/projects/veterinariaMobile.png"],
        skills:["Zustand", "Tailwind", "React Hook Form",],
        demo: "https://66d2519d9886f0695e2f8c00--hilarious-pavlova-007ee7.netlify.app/",
        git:"https://github.com/vickylopez2828/administradorPacientesVeterinaria"
    },
      {
        id: 5,
        category: "App + IA",
        title: "Buscador de Bebidas",
        subtitle: "Búsqueda con IA y API externa",
        description: "Busca bebidas y genera recetas con IA en tiempo real.",
        descriptionLarge: "Aplicación en React + TypeScript que permite buscar recetas por ingrediente/categoría (API externa) y, además, generar recetas con IA usando streaming de texto. Al elegir una receta se abre un modal con Headless UI para ver detalles y guardarla como favorita. La navegación se gestiona con React Router DOM, el estado global con Zustand y el diseño con Tailwind CSS. La generación con IA se integra vía OpenRouter y `ai` (streamText) para respuesta progresiva. Deploy en Netlify.",
        images: ["/projects/bebidas.png","/projects/bebidas1.png","/projects/bebidas2.png","/projects/bebidas3.png"],
        skills: ["React", "TS", "OpenRouter", "AI Streaming"],
        demo: "https://thunderous-sunshine-e1ff96.netlify.app/",
        git: "https://github.com/vickylopez2828/apiBebidasReact"
    },
    {
        id:6,
        category:"App",
        title:"Guitar LA",
        subtitle:"Ecommerce de Guitarras",
        description:"Ecommerce desarrollado con React, Tailwind y Use Reducers.",
        descriptionLarge: "Carrito de compras para una tienda virtual de guitarras utilizando React. Implementación de diversos hooks, gestión del estado global con useReducer y almacenamiento de datos en LocalStorage para preservar la información del carrito. Para la interfaz, se empleó Tailwind CSS, logrando un diseño moderno y responsive. Deployado en GitHub Pages.",
        images:["/projects/guitarPc.png", "/projects/guitarMobile.png", "/projects/guitarTablet.png"],
        skills:["Use Reducer", "Tailwind", "React"],
        demo: "https://vickylopez2828.github.io/ecommerceGuitarras/",
        git:"https://github.com/vickylopez2828/ecommerceGuitarras"

    },
    {
        id:7,
        category:"App FullStack",
        title:"Planificador de Gastos",
        subtitle:"Aplicación web",
        description:"Aplicación web FullStack para gestionar y visualizar gastos de manera eficiente.",
        descriptionLarge: "Control de Gastos es una aplicación web para gestionar y visualizar gastos de manera eficiente, con un frontend en React y TypeScript, estilizado con Tailwind CSS, y un backend en Django con API REST para la persistencia de datos. Permite registrar, editar y eliminar gastos, filtrarlos por categoría y utilizar un modal interactivo (Headless UI) para la creación y modificación de los gastos. Además, incorpora React Hook Form para una validación optimizada, garantizando una experiencia fluida e intuitiva.",
        images:["/projects/gastos2.png", "/projects/gastos1.png", "/projects/gastosDjango.png", "/projects/gastos3.png", "/projects/gastos4.png", "/projects/gastos5.png","/projects/gastos6.png",],
        skills:["React", "Django", "Postgresql"],
        demo: null,
        git:"https://github.com/vickylopez2828/control-gastos-fullstack"

    },
    {
        id:8,
        category:"App FullStack",
        title:"Mundo Gaming",
        subtitle:"Angular",
        description:"Aplicación web que permite a los usuarios  explorar, seleccionar y comprar una amplia variedad de videojuegos.",
        descriptionLarge: "Aplicación web de ventas de videojuegos desarrollada con Angular para el frontend y una API en Node.js con Express para la gestión del backend. La plataforma permite a los usuarios explorar, seleccionar y comprar una amplia variedad de videojuegos de distintos géneros, como acción, aventura y estrategia. Entre sus principales funcionalidades, cuenta con un carrito de compras, registro e inicio de sesión de usuarios. Una vez autenticado, el usuario podrá acceder a un menú exclusivo llamado 'Mis Juegos', donde se listarán los títulos adquiridos. ",
        images:["/projects/angular1.png", "/projects/angular2.png", "/projects/angular4.png", "/projects/angular5.png", "/projects/angular6.png", "/projects/angular7.png","/projects/angular8.png",],
        skills:["Angular", "Node", "Postgresql"],
        demo: "https://stackblitz.com/~/github.com/vickylopez2828/AngularSeminario",
        git:"https://github.com/vickylopez2828/AngularSeminario"

    },
    {
        id:9,
        category:"App",
        title:"Cotizador Cripto",
        subtitle:"Aplicación web",
        description:"Cotizador de Criptomonedas, que permite consultar precios en tiempo real.",
        descriptionLarge: "Aplicación web desarrollada con React, TypeScript y Tailwind que permite consultar precios de cripto en tiempo real a través de una API externa. Utiliza Zustand para la gestión eficiente del estado y Zod para validaciones avanzadas de datos. Además, está desplegada en Netlify, garantizando accesibilidad y rendimiento óptimo. ",
        images:["/projects/cripto1.png", "/projects/cripto2.png"],
        skills:["React", "Tailwind", "Api"],
        demo: "https://67bf1d22248a8669b3a6340c--jazzy-cobbler-c5ce41.netlify.app/",
        git:"https://github.com/vickylopez2828/criptoApi"

    },
    
    {
        id:10,
        category:"App",
        title:"Buscador de Clima",
        subtitle:"Api del Clima",
        description:"Buscador de clima con React, Tailwind, TypeScript y Zod.",
        descriptionLarge: "Es una aplicación web que permite consultar el clima de cualquier ubicación a través de una API externa. Desarrollada con React, Tailwind y TypeScript, garantiza la seguridad y consistencia de los datos utilizando Zod para su validación. La interfaz es intuitiva y proporciona información detallada sobre las condiciones meteorológicas. Además, la aplicación ha sido deployada en Netlify",
        images:["/projects/clima1.png", "/projects/clima2.png", "/projects/clima3.png"],
        skills:["React Js", "API", "Zod"],
        demo: "https://bright-centaur-486f6e.netlify.app/",
        git:"https://github.com/vickylopez2828/apiWeather"

    }
]