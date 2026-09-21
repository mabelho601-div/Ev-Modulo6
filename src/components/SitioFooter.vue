<template>
  <footer class="sitio-footer">
    <div class="footer-grid">
      <div class="columna">
        <h4>EDITORIAL NOVA</h4>
        <p>Tu plataforma favorita de libros e historias que se quedan contigo.</p>
      </div>
      <div class="columna">
        <h4>CATÁLOGO</h4>
        <ul>
          <li><router-link to="/libros">Libros Recomendados</router-link></li>
          <li><router-link to="/">Autores Destacados</router-link></li>
        </ul>
      </div>
      <div class="columna">
        <h4>BOLETÍN</h4>
        <p>Suscríbete para recibir ofertas y promociones:</p>
        <div class="form-suscripcion">
          <input type="email" placeholder="Email..." readonly />
          <button type="button">Recibir ofertas</button>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <p>&copy; 2026 Editorial Nova - Desarrollo Frontend con Vue 3</p>
    </div>
  </footer>
</template>

<style scoped>
.sitio-footer {
  background-color: #0f172a;
  color: #94a3b8;
  padding: 2.5rem 2rem 1.5rem;
  border-radius: 0 0 8px 8px;
  margin-top: 3rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  border-bottom: 1px solid #334155;
  padding-bottom: 2rem;
}

.columna h4 {
  color: #ffffff;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.columna ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.columna ul li {
  margin-bottom: 0.5rem;
}

.columna a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.9rem;
}

.form-suscripcion {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.form-suscripcion input {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #475569;
  background-color: #1e293b;
  color: white;
  width: 100%;
}

.form-suscripcion button {
  background-color: #7e22ce;
  color: white;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}

.footer-copy {
  text-align: center;
  padding-top: 1.5rem;
  font-size: 0.85rem;
}
</style>