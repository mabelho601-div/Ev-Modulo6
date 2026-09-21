<script setup>
import { computed, defineProps } from 'vue'
import { librosIniciales } from '../data/autores.js'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const libro = computed(() => {
  return librosIniciales.find(l => l.id === Number(props.id))
})
</script>

<template>
  <div class="vista-detalle">
    <div v-if="libro" class="detalle-card">
      <h2>{{ libro.titulo }}</h2>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
      <hr />
      <p><strong>Descripción:</strong> {{ libro.descripcion }}</p>

      <router-link to="/libros" class="btn-volver">&larr; Volver al catálogo</router-link>
    </div>
    <div v-else class="error-card">
      <h3>El libro no existe o fue eliminado.</h3>
      <router-link to="/libros" class="btn-volver">Volver al catálogo</router-link>
    </div>
  </div>
</template>

<style scoped>
.detalle-card {
  padding: 1.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background-color: #ffffff;
}
.btn-volver {
  display: inline-block;
  margin-top: 1rem;
  color: #8b5cf6;
  font-weight: 600;
  text-decoration: none;
}
</style>