<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  libro: {
    type: Object,
    required: true
  }
})

defineEmits(['eliminar'])
</script>

<template>
  <div class="card-libro">
    <h4>{{ libro.titulo }}</h4>
    <p class="autor"><strong>Autor:</strong> {{ libro.autor }}</p>
    <p class="categoria"><span class="badge">{{ libro.categoria }}</span></p>
    
    <p v-show="libro.descripcion" class="descripcion">
      {{ libro.descripcion }}
    </p>

    <div class="card-acciones">
      <router-link :to="`/libros/${libro.id}`" class="btn-detalle">
        Ver Detalle
      </router-link>
      <button class="btn-eliminar" @click="$emit('eliminar', libro.id)">
        Eliminar
      </button>
    </div>
  </div>
</template>

<style scoped>
.card-libro {
  border: 1px solid #cbd5e1;
  padding: 1.25rem;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.badge {
  background-color: #f1f5f9;
  color: #1e293b;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}
.descripcion {
  font-style: italic;
  font-size: 0.85rem;
  color: #64748b;
  margin: 0.5rem 0;
}
.card-acciones {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-detalle {
  text-decoration: none;
  color: #8b5cf6;
  font-weight: 600;
  font-size: 0.9rem;
}
.btn-eliminar {
  background-color: #8b5cf6;
  color: white;
  border: none;
  padding: 0.35rem 0.7rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}
</style>