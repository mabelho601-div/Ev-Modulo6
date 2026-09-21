<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const usuarios = ref([])
const nuevoNombre = ref('')
const usuarioActivo = ref('')

onMounted(() => {
  usuarios.value = JSON.parse(localStorage.getItem('lista_usuarios')) || ['Invitado']
  usuarioActivo.value = localStorage.getItem('usuario_activo') || usuarios.value[0]
})

const crearUsuario = () => {
  const nombre = nuevoNombre.value.trim()
  if (!nombre) return

  if (!usuarios.value.includes(nombre)) {
    usuarios.value.push(nombre)
    localStorage.setItem('lista_usuarios', JSON.stringify(usuarios.value))
  }

  seleccionarUsuario(nombre)
  nuevoNombre.value = ''
}

const seleccionarUsuario = (nombre) => {
  usuarioActivo.value = nombre
  localStorage.setItem('usuario_activo', nombre)
}

const irAlCatalogo = () => {
  router.push('/libros')
}
</script>

<template>
  <div class="vista-usuarios">
    <div class="header-usuarios">
      <h2>Gestión de Perfiles</h2>
      <p>Crea o selecciona un usuario para gestionar tu biblioteca personal.</p>
    </div>

    <div class="card-crear">
      <h3>Crear nuevo usuario</h3>
      <div class="input-grupo">
        <input 
          v-model="nuevoNombre" 
          type="text" 
          placeholder="Ingresa un nombre..." 
          @keyup.enter="crearUsuario"
        />
        <button @click="crearUsuario">Crear Perfil</button>
      </div>
    </div>

    <div class="card-lista">
      <h3>Perfiles disponibles</h3>
      <ul>
        <li 
          v-for="u in usuarios" 
          :key="u" 
          :class="{ activo: u === usuarioActivo }"
          @click="seleccionarUsuario(u)"
        >
          <span>👤 {{ u }}</span>
          <span v-if="u === usuarioActivo" class="badge">Activo</span>
        </li>
      </ul>
    </div>

    <button @click="irAlCatalogo" class="btn-volver">
      Ir al Catálogo de Libros →
    </button>
  </div>
</template>

<style scoped>
.vista-usuarios {
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 1rem;
}

.header-usuarios h2 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #101010;
  margin: 0 0 0.5rem;
}

.header-usuarios p {
  color: #64748b;
  margin: 0;
}

.card-crear, .card-lista {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #cbd5e1;
}

.card-crear h3, .card-lista h3 {
  margin: 0 0 1rem;
  font-size: 1.1rem;
  color: #101010;
}

.input-grupo {
  display: flex;
  gap: 0.5rem;
}

.input-grupo input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
}

.input-grupo input:focus {
  border-color: #E4032E;
}

.input-grupo button {
  background-color: #101010;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.input-grupo button:hover {
  background-color: #E4032E;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 0.85rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
}

li:hover {
  border-color: #E4032E;
}

li.activo {
  border-color: #E4032E;
  background-color: #fff5f5;
  font-weight: 600;
}

.badge {
  background: #E4032E;
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
}

.btn-volver {
  background-color: #8b5cf6;
  color: #ffffff;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: center;
}

.btn-volver:hover {
  background-color: #b80225;
}
</style>