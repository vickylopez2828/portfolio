[![Deployment pipeline](https://github.com/vickylopez2828/portfolio/actions/workflows/pipeline.yml/badge.svg)](https://github.com/vickylopez2828/portfolio/actions/workflows/pipeline.yml)


# 🌐 Portfolio – Victoria López

Este proyecto es mi **portfolio personal**, desarrollado con **React + Vite**, donde presento mis proyectos, habilidades y experiencia como desarrolladora Frontend.  
Incluye un diseño moderno, animaciones sutiles, navegación fluida y un pipeline de **CI/CD automatizado con GitHub Actions** para despliegue continuo.

---

## 🚀 Tecnologías principales

- ⚛️ **React 18**
- ⚡ **Vite** (para desarrollo rápido y build optimizado)
- 🎨 **Tailwind CSS** (con animaciones personalizadas)
- 🔄 **React Router DOM** (navegación SPA)
- ✨ **Heroicons & React Icons** (íconos vectoriales)
- 📧 **EmailJS** (envío de formularios de contacto)
- 🧾 **React Hook Form** (manejo y validación de formularios)
- 🧈 **React Toastify** (notificaciones)
- 🎠 **React Slick** (carrousel de proyectos)
- 🌀 **tailwind-scrollbar** (scroll personalizado)
- 🪄 **tailwindcss-animated** (animaciones suaves con utilidades Tailwind)

---

## ⚙️ Integración continua (CI/CD)

Este proyecto utiliza **GitHub Actions** para automatizar el proceso de despliegue:

- Cada vez que se hace un `push` a la rama `main`, se ejecuta un workflow definido en [`pipeline.yml`](.github/workflows/pipeline.yml).
- El pipeline incluye:
  - Instalación de dependencias
  - Build del proyecto
  - Deploy automático (por ejemplo, a GitHub Pages, Vercel o Netlify según la configuración elegida)

---

## 🧩 Instalación y uso local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/vickylopez2828/portfolio.git
   cd portfolio
   ```
2. **Instalar dependencias:**
   ```bash
   npm install
   ```
3. **Levantar el entorno de desarrollo:**
   ```bash
   npm run dev
   ```
4. **Compilar para producción:**
   ```bash
   npm run build
   ```

## 📂 Estructura principal del proyecto

```bash
portfolio/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/           # Páginas principales del portfolio
│   ├── assets/          # Imágenes y recursos
│   ├── hooks/           # Custom Hooks (si aplica)
│   ├── styles/          # Configuración global de Tailwind
│   └── main.tsx         # Punto de entrada de la app
├── public/              # Archivos públicos
├── .github/workflows/   # Pipeline de GitHub Actions
└── vite.config.ts       # Configuración de Vite
```

🌍 Deploy

El despliegue está automatizado mediante GitHub Actions, pero también puede realizarse manualmente en plataformas como:
Netlify

👩‍💻 Autor

Victoria López
Desarrolladora Web Frontend especializada en React + TypeScript.
💼 Portfolio Online

📧 Contacto: vickylopez2828@gmail.com

