<script setup>
import { computed } from 'vue'
import { autores } from '@/data/autores'

const listaAutores = computed(() => {
  if (!autores) return []
  return Object.entries(autores).map(([id, datos]) => ({
    id,
    nombre: datos.nombre,
    cantidadLibros: datos.libros ? datos.libros.length : 0
  }))
})

const librosRecomendados = computed(() => {
  if (!autores) return []
  return Object.entries(autores).map(([id, datos]) => {
    const primerLibro = datos.libros && datos.libros[0] ? datos.libros[0] : { titulo: 'Sin título', categoria: 'Novela' }
    return {
      autorId: id,
      autorNombre: datos.nombre,
      titulo: primerLibro.titulo,
      categoria: primerLibro.categoria || 'Novela'
    }
  })
})
</script>

<template>
  <div class="vista-inicio">
    <div class="hero-container">
      <img src="@/assets/img/bannerautores.jpg" alt="Banner Autores" class="hero-imagen" />
      <div class="hero-texto">
        <span class="subtitulo-hero">CATÁLOGO DE AUTORES</span>
        <h1>Historias que se quedan contigo</h1>
        <p>Explora la vida y obra de tus autores favoritos, en un solo lugar.</p>
      </div>
    </div>

    <section class="seccion-inicio">
      <h2>Autores destacados</h2>
      <div class="grid-autores">
        <router-link 
          v-for="autor in listaAutores" 
          :key="autor.id" 
          :to="`/autor/${autor.id}`" 
          class="card-autor"
        >
          <h3>{{ autor.nombre }}</h3>
          <p>{{ autor.cantidadLibros }} {{ autor.cantidadLibros === 1 ? 'libro' : 'libros' }}</p>
        </router-link>
      </div>
    </section>

    <section class="seccion-inicio">
      <h2>Libros recomendados</h2>
      <div class="lista-libros-recomendados">
        <div 
          v-for="libro in librosRecomendados" 
          :key="libro.titulo" 
          class="card-libro-recomendado"
        >
          <div class="info-libro">
            <h4>{{ libro.titulo }}</h4>
            <p class="autor-sub">de {{ libro.autorNombre }}</p>
          </div>
          <span class="badge-categoria">{{ libro.categoria }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.vista-inicio {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.hero-container {
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #1a1a2e;
}

.hero-imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4);
}

.hero-texto {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.subtitulo-hero {
  color: #f0f000;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.hero-texto h1 {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}

.hero-texto p {
  color: #d1d5db;
  font-size: 0.95rem;
  margin: 0;
}

/* Resto de estilos */
.seccion-inicio h2 {
  font-size: 1.35rem;
  font-weight: 700;
  color: #101010;
  margin-bottom: 1rem;
}

.grid-autores {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.card-autor {
  background: #ffffff;
  border-radius: 8px;
  padding: 1.25rem;
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-autor:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.card-autor h3 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  color: #101010;
  font-weight: 700;
}

.card-autor p {
  margin: 0;
  font-size: 0.85rem;
  color: #64748b;
}

.lista-libros-recomendados {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.card-libro-recomendado {
  background: #ffffff;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
}

.info-libro h4 {
  margin: 0 0 0.2rem;
  font-size: 0.95rem;
  color: #101010;
  font-weight: 700;
}

.autor-sub {
  margin: 0;
  font-size: 0.825rem;
  color: #8b5cf6;
}

.badge-categoria {
  font-size: 0.75rem;
  color: #8b5cf6;
  font-weight: 600;
}

@media (max-width: 600px) {
  .hero-texto {
    padding: 1.5rem 1.25rem;
  }
  .hero-texto h1 {
    font-size: 1.5rem;
  }
  .hero-texto p {
    font-size: 0.85rem;
  }
}
</style>