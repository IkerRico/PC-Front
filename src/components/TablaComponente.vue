<template>
  <div>
    <table>
      <thead style="background-color: #5f4522; color: white">
        <tr>
          <th v-for="(columnTitle, index) in titulosColumna" :key="index" class="columna">
            {{ columnTitle }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(filaData, rowIndex) in datosPagina"
          :key="rowIndex"
          style="background-color: white; color: black"
        >
          <td v-for="(columna, colIndex) in filaData" :key="colIndex">{{ columna }}</td>
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
      itemsPorPagina: 18
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
    }
  }
}
</script>

<style scoped>
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
  width: 150px;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #4caf50;
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
  background-color: #45a049;
}
</style>
