<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { librosIniciales } from '@/data/autores'
import LibroCard from '@/components/LibroCard.vue'
import FormularioLibro from '@/components/FormularioLibro.vue'

// --- USUARIO ACTIVO (Cargado desde LocalStorage) ---
const usuarioActivo = ref(localStorage.getItem('usuario_activo') || 'Invitado')

onMounted(() => {
  usuarioActivo.value = localStorage.getItem('usuario_activo') || 'Invitado'
})

// --- CARGA Y PERSISTENCIA (LOCALSTORAGE) ---
const librosGuardados = JSON.parse(localStorage.getItem('libros_data'))

const libros = ref(
  librosGuardados || librosIniciales.map(l => ({ ...l, usuario: 'Invitado' }))
)

watch(libros, (nuevosLibros) => {
  localStorage.setItem('libros_data', JSON.stringify(nuevosLibros))
}, { deep: true })

// --- BÚSQUEDA Y FILTRADO POR USUARIO ---
const busqueda = ref('')

const librosFiltrados = computed(() => {
  let resultado = libros.value.filter(libro => !libro.usuario || libro.usuario === usuarioActivo.value)

  if (busqueda.value && busqueda.value.trim()) {
    const termino = busqueda.value.toLowerCase().trim()
    resultado = resultado.filter(libro => 
      libro.titulo.toLowerCase().includes(termino) ||
      libro.autor.toLowerCase().includes(termino) ||
      libro.categoria.toLowerCase().includes(termino)
    )
  }

  return resultado
})

// --- AGREGAR LIBRO ASOCIADO AL USUARIO ---
const agregarLibro = (nuevoLibro) => {
  libros.value.unshift({
    id: Date.now(),
    titulo: nuevoLibro.titulo,
    autor: nuevoLibro.autor,
    categoria: nuevoLibro.categoria,
    descripcion: nuevoLibro.descripcion || 'Sin descripción disponible.',
    usuario: usuarioActivo.value
  })
}
</script>

<template>
  <div class="vista-catalogo">
    <div class="banner-catalogo">
      <img 
        src="@/assets/img/bannerlibros.jpg" 
        alt="Banner Catálogo" 
        class="banner-imagen" 
      />
      <div class="banner-overlay">
        <span class="subtitulo-banner">CATÁLOGO COMPLETO</span>
        <h1>Explora nuestra biblioteca</h1>
        <p>Descubre historias únicas, autores fascinantes y añade nuevas lecturas a la colección.</p>
      </div>
    </div>

    <!-- SECCIÓN DE BÚSQUEDA (El bloque de usuario arriba de esta sección ya fue quitado) -->
    <div class="seccion-busqueda">
      <div class="input-contenedor">
        <input 
          v-model="busqueda" 
          type="text" 
          placeholder="Buscar libro por título, autor o categoría..." 
          class="input-busqueda"
        />
        <button class="btn-buscar">Buscar</button>
      </div>
    </div>

    <div class="contenido-catalogo">
      <aside class="columna-formulario">
        <FormularioLibro @agregar-libro="agregarLibro" />
      </aside>

      <section class="columna-libros">
        <div v-if="librosFiltrados.length > 0" class="grid-libros">
          <LibroCard 
            v-for="libro in librosFiltrados" 
            :key="libro.id" 
            :libro="libro" 
          />
        </div>

        <div v-else class="estado-vacio">
          <p v-if="busqueda">
            No se encontraron libros que coincidan con "<strong>{{ busqueda }}</strong>" para el perfil <strong>{{ usuarioActivo }}</strong>.
          </p>
          <p v-else>
            El perfil <strong>{{ usuarioActivo }}</strong> aún no tiene libros registrados.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.vista-catalogo {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.banner-catalogo {
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #1a1a2e;
}

.banner-imagen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4);
}

.banner-overlay {
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
  z-index: 1;
}

.subtitulo-banner {
  color: #f0f000;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.banner-overlay h1 {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}

.banner-overlay p {
  color: #d1d5db;
  font-size: 0.95rem;
  margin: 0;
}

.seccion-busqueda {
  width: 100%;
}

.input-contenedor {
  display: flex;
  gap: 0.5rem;
}

.input-busqueda {
  flex: 1;
  padding: 0.85rem 1.25rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-busqueda:focus {
  border-color: #E4032E;
}

.btn-buscar {
  background-color: #101010;
  color: #ffffff;
  border: none;
  padding: 0 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-buscar:hover {
  background-color: #E4032E;
}

/* Distribución del contenido */
.contenido-catalogo {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  align-items: start;
}

.grid-libros {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
}

.estado-vacio {
  background: #ffffff;
  padding: 3rem;
  text-align: center;
  border-radius: 8px;
  color: #64748b;
  border: 1px solid #f1f5f9;
}

/* Adaptación responsive */
@media (max-width: 850px) {
  .contenido-catalogo {
    grid-template-columns: 1fr;
  }
  .banner-catalogo {
    height: 200px;
  }
  .banner-overlay {
    padding: 1.5rem 1.25rem;
  }
  .banner-overlay h1 {
    font-size: 1.5rem;
  }
  .banner-overlay p {
    font-size: 0.85rem;
  }
}
</style>