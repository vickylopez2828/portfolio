// title="Guitar LA"
//                 subtitle="Ecommerce de Guitarras"
//                 description="Ecommerce desarrollado con React, Tailwind y Use Reducers."
//                 images={["/screenguitar.png", "/guitar2.png", "/guitar3.png"]}

export const projects = [
    
    {
        id:1,
        category:"App FullStack",
        title:"Admin Productos",
        subtitle:"PERN",
        description:"Sistema completo para la gestión de productos, desarrollado con el stack PERN (PostgreSQL, Express, React, Node.js).",
        descriptionLarge: "Sistema completo para la gestión de productos. Backend: Desarrollado con Node.js y Express, utilizando Sequelize como ORM para la gestión de la base de datos en PostgreSQL. Se implementaron middlewares como cors, morgan y express-validator para la seguridad y el registro de solicitudes. La API está documentada con Swagger. Frontend: Construido con React y TypeScript, utilizando React Router DOM para la navegación y Tailwind CSS para el diseño. Pruebas: Se realizaron pruebas unitarias e integración con Jest para garantizar la estabilidad del sistema.",
        images:["/projects/admin1.png", "/projects/admin2.png"],
        skills:["React", "Node", "Express"],
        demo: null,
        git:"https://github.com/vickylopez2828/adminProductsPERN"
    },
    {
        id:2,
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
        id:3,
        category:"App",
        title:"Guitar LA",
        subtitle:"Ecommerce de Guitarras",
        description:"Ecommerce desarrollado con React, Tailwind y Use Reducers.",
        descriptionLarge: "Carrito de compras para una tienda virtual de guitarras utilizando React. Implementación de diversos hooks, gestión del estado global con useReducer y almacenamiento de datos en LocalStorage para preservar la información del carrito. Para la interfaz, se empleó Tailwind CSS, logrando un diseño moderno y responsive. Deployado en GitHub Pages.",
        images:["/projects/guitarPc.png", "/projects/guitarMobile.png", "/projects/guitarTablet.png"],
        skills:["Use Reducer", "Tailwind", "Local Storage"],
        demo: "https://vickylopez2828.github.io/ecommerceGuitarras/",
        git:"https://github.com/vickylopez2828/ecommerceGuitarras"

    },
    {
        id:4,
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
        id:5,
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
        id:6,
        category:"App",
        title:"Buscador de Bebidas",
        subtitle:"Bebidas y Recetas",
        description:"Buscador de bebidas y recetas con React Router DOM.",
        descriptionLarge: "Aplicación web en React y TypeScript que permite buscar recetas por ingrediente y categoría, consultando una API externa. Al seleccionar una receta, se abre un modal con Headless UI para ver los detalles y agregarla a favoritos. La navegación con React Router DOM permite explorar distintas secciones, y el diseño en Tailwind CSS ofrece una interfaz moderna y responsiva. Todo el sistema está optimizado con Zustand para el manejo de estado y desplegado en Netlify para un acceso rápido y fluido.",
        images:["/projects/bebidas.png","/projects/bebidas1.png", "/projects/bebidas2.png", "/projects/bebidas3.png"],
        skills:["React", "API", "Router"],
        demo: "https://67bf28ee248a8682ffa633ea--thunderous-sunshine-e1ff96.netlify.app/",
        git:"https://github.com/vickylopez2828/apiBebidasReact"

    },
    {
        id:7,
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
        id:8,
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