<script setup>
import { ref, onMounted } from 'vue'

const usuarioActivo = ref('Invitado')

const cargarUsuario = () => {
  usuarioActivo.value = localStorage.getItem('usuario_activo') || 'Invitado'
}

onMounted(() => {
  cargarUsuario()
  // Escucha cambios en LocalStorage para actualizar el nombre si se cambia de usuario
  window.addEventListener('storage', cargarUsuario)
})
</script>

<template>
  <header class="sitio-header">
    <div class="logo-container">
      <span class="subtitulo-head">EDITORIAL NOVA</span>
      <h1 class="logo-titulo">BookList SPA</h1>
    </div>

    <nav class="nav-links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/libros">Catálogo de Libros</router-link>
    </nav>

    <!-- SECCIÓN DE PERFIL / USUARIO EN EL HEADER -->
    <div class="perfil-header">
      <div class="badge-perfil">
        <span class="icono-user">👤</span>
        <span class="nombre-user">{{ usuarioActivo }}</span>
      </div>
      <router-link to="/usuarios" class="btn-cambiar-perfil">
        Perfil
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.sitio-header {
  background: linear-gradient(135deg, #1e1b4b, #312e81);
  color: #ffffff;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
  gap: 1rem;
}

.subtitulo-head {
  color: #c084fc;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  display: block;
}

.logo-titulo {
  margin: 0;
  font-size: 1.6rem;
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 1.2rem;
  align-items: center;
}

.nav-links a {
  color: #e0e7ff;
  text-decoration: none;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-links a.router-link-exact-active {
  background-color: #7e22ce;
  color: #ffffff;
}

.link-rota {
  color: #fca5a5 !important;
}

/* --- ESTILOS AÑADIDOS PARA EL PERFIL DE USUARIO --- */
.perfil-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.badge-perfil {
  background-color: rgba(255, 255, 255, 0.12);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  border: 1px solid rgba(192, 132, 252, 0.3); /* Borde acentuado con el púrpura #c084fc */
}

.icono-user {
  font-size: 0.9rem;
}

.nombre-user {
  font-weight: 600;
  color: #ffffff;
}

.btn-cambiar-perfil {
  background-color: #7e22ce;
  color: #ffffff;
  text-decoration: none;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-cambiar-perfil:hover {
  background-color: #a855f7;
}

.btn-cambiar-perfil.router-link-exact-active {
  background-color: #c084fc;
  color: #1e1b4b;
}
</style>