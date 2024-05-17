<template>
  <div class="mt-3">
    <table>
      <thead style="background-color: #5f4522; color: white">
        <tr>
          <th
            v-for="(column, index) in titulosColumna"
            :key="index"
            :style="{ width: column.width }"
            class="columna"
          >
            {{ column.title }}
          </th>
          <th class="columna" style="width: 10%">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(filaData, rowIndex) in datosPagina"
          :key="rowIndex"
          class="tabla-fila"
          style="background-color: white; color: black"
        >
          <td v-for="(columna, colIndex) in filaData" :key="colIndex">{{ columna }}</td>
          <td>
            <button @click="accionFila(filaData)">Acción</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination d-flex justify-content-center align-items-center mt-2 gap-2">
      <button @click="paginaAnterior" :disabled="paginaActual === 1">Anterior</button>
      <span>{{ paginaActual }}</span>
      <button @click="paginaSiguiente" :disabled="paginaActual === totalPaginas">Siguiente</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulosColumna: Array,
    informacionTabla: Array
  },
  data() {
    return {
      paginaActual: 1,
      itemsPorPagina: 15
    }
  },
  computed: {
    totalPaginas() {
      return Math.ceil(this.informacionTabla.length / this.itemsPorPagina)
    },
    datosPagina() {
      const inicio = (this.paginaActual - 1) * this.itemsPorPagina
      const fin = this.paginaActual * this.itemsPorPagina
      return this.informacionTabla.slice(inicio, fin)
    }
  },
  methods: {
    paginaAnterior() {
      if (this.paginaActual > 1) {
        this.paginaActual--
      }
    },
    paginaSiguiente() {
      if (this.paginaActual < this.totalPaginas) {
        this.paginaActual++
      }
    },
    accionFila(filaData) {
      // Lógica para la acción en la fila específica
      console.log(`Acción en fila ${filaData.id}`)
      // Aquí puedes trabajar con toda la fila de datos
    },
    ajustarItemsPorPagina() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        this.itemsPorPagina = 5
      } else {
        this.itemsPorPagina = 15
      }
    }
  },
  mounted() {
    this.ajustarItemsPorPagina()
    window.addEventListener('resize', this.ajustarItemsPorPagina)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.ajustarItemsPorPagina)
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #929292;
  font-family: 'Open Sans', sans-serif;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #5f4522;
  color: white;
}

.columna {
  width: 150px; /* Ancho predeterminado */
}

.tabla-fila {
  height: 90px; /* Altura fija para las filas */
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #5f4522;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.pagination button:hover:not(:disabled) {
  background-color: #5f4522;
}
</style>
