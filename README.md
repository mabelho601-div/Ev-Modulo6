# BookList SPA - Editorial Nova

BookList SPA es una aplicación web interactiva desarrollada con Vue 3 y Vue Router 4 que permite explorar, buscar, ver detalles y gestionar un catálogo de libros mediante perfiles de usuario dinámicos. Toda la información se persiste localmente en el navegador mediante localStorage y se gestiona con un estado global.

---

## Características Principales

- Catálogo Interactivo: Visualiza y explora la lista de libros disponibles.
- Buscador en Tiempo Real: Filtra libros instantáneamente por título, autor o categoría.
- Vista de Detalle (DetalleLibro): Consulta la información completa e individual de cada libro registrado.
- Gestión de Perfiles/Usuarios:
  - Vista dedicada (/usuarios) para crear y seleccionar diferentes perfiles.
  - Componente SelectorUsuario para un cambio rápido de perfil.
  - Indicador de usuario activo en el encabezado (SitioHeader).
  - Filtrado de contenido según el perfil seleccionado.
- Control de Rutas No Encontradas (NotFound): Manejo de errores 404 para URLs no válidas.
- Registro de Libros: Formulario dinámico para agregar nuevos libros asignándolos automáticamente al usuario activo.
- Persistencia de Datos y Estado Global: Integración de centralización de datos (store) y almacenamiento en localStorage.
- Interfaz Completa: Incluye encabezado (SitioHeader) y pie de página (SitioFooter).

---

## Tecnologías Utilizadas

- Framework Front-end: Vue.js 3 (Composition API)
- Enrutamiento: Vue Router 4
- Gestión de Estado: Vuex / Pinia (Store)
- Herramienta de Construcción: Vue CLI (Webpack)
- Estilos: CSS3 / CSS Scoped (Diseño personalizado)
- Persistencia: LocalStorage API

---

## Estructura del Proyecto

```text
src/
├── assets/                 # Recursos multimedia
│   ├── img/                # Imágenes de la aplicación
│   │   ├── bannerlibros.jpg
│   │   ├── libreria1.jpg
│   │   └── logo.png
│   └── main.css            # Estilos globales
├── components/             # Componentes reutilizables
│   ├── FormularioLibro.vue
│   ├── LibroCard.vue
│   ├── SelectorUsuario.vue # Selector rápido de perfil
│   ├── SitioFooter.vue     # Pie de página global
│   └── SitioHeader.vue     # Encabezado y navegación global
├── data/                   # Datos iniciales base
│   └── autores.js
├── router/                 # Configuración de rutas
│   └── index.js
├── store/                  # Estado global de la aplicación
├── views/                  # Vistas de la aplicación
│   ├── DetalleLibro.vue    # Vista detallada de un libro
│   ├── InicioView.vue      # Página principal
│   ├── ListaLibros.vue     # Catálogo principal y búsqueda
│   ├── NotFound.vue        # Página de error 404
│   └── UsuariosView.vue    # Gestión de usuarios
├── App.vue                 # Componente principal
└── main.js                 # Punto de entrada
