<template>
  <div class="mt-3">
    <div class="table-container">
      <table>
        <thead style="background-color: #5f4522; color: white">
          <tr>
            <th
              v-for="(column, index) in titulosColumna"
              :key="index"
              :style="{ width: column.width, textAlign: column.align }"
              :class="'columna column-' + index"
            >
              {{ column.title }}
            </th>
            <th class="columna" style="width: 3%; text-align: center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(filaData, rowIndex) in datosPagina"
            :key="rowIndex"
            class="tabla-fila"
            style="background-color: white; color: black"
          >
            <td
              v-for="(columna, colIndex) in filaData"
              :key="colIndex"
              :style="{ textAlign: this.titulosColumna[getColIndex(colIndex)].align }"
            >
              {{ columna }}
            </td>
            <td class="botones-acciones">
              <div class="d-flex justify-content-center gap-3">
                <button class="btn btn-brown" @click="emitirAccion('ver', filaData)">
                  <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-warning" @click="emitirAccion('editar', filaData)">
                  <i class="bi bi-pencil"></i>
                </button>
                <button
                  class="btn btn-danger"
                  @click="emitirAccion('eliminar', filaData)"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination d-flex justify-content-center align-items-center mt-2 gap-2">
      <button @click="paginaAnterior" :disabled="paginaActual === 1">Anterior</button>
      <span>{{ paginaActual }}</span>
      <button @click="paginaSiguiente" :disabled="paginaActual === totalPaginas">
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulosColumna: Array,
    informacionTabla: Array,
  },
  data() {
    return {
      paginaActual: 1,
      itemsPorPagina: 10,
    };
  },
  computed: {
    totalPaginas() {
      return Math.ceil(this.informacionTabla.length / this.itemsPorPagina);
    },
    datosPagina() {
      const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
      const fin = this.paginaActual * this.itemsPorPagina;
      return this.informacionTabla.slice(inicio, fin);
    },
  },
  methods: {
    emitirAccion(accion, filaData) {
      this.$emit("accion", { accion, filaData });
    },
    paginaAnterior() {
      if (this.paginaActual > 1) {
        this.paginaActual--;
      }
    },
    paginaSiguiente() {
      if (this.paginaActual < this.totalPaginas) {
        this.paginaActual++;
      }
    },
    accionFila(filaData) {
      console.log(`Acción en fila ${filaData.id}`);
    },
    ajustarItemsPorPagina() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        this.itemsPorPagina = 5;
      } else {
        this.itemsPorPagina = 14;
      }
    },
    getColIndex(colIndex) {
      return this.titulosColumna.findIndex(
        (column) => column.title.toLowerCase() === colIndex
      );
    },
  },
  mounted() {
    this.ajustarItemsPorPagina();
    window.addEventListener("resize", this.ajustarItemsPorPagina);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.ajustarItemsPorPagina);
  },
};
</script>

<style scoped>
.btn-brown {
  background-color: #5f4522;
  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  border: 1px solid black;
  padding-left: 10px;
}

th {
  background-color: #5f4522;
  color: white;
  border: 1px solid black;
  padding: 10px;
}

.columna {
  width: 150px;
}

.tabla-fila {
  height: 50px;
}

.pagination {
  margin-top: 20px;
  text-align: center;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
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

.table-container {
  overflow-x: auto;
  width: 100%;
}

@media (max-width: 768px) {
  .tabla-fila {
    min-height: 40px;
  }
  td {
    border: 1px solid black;
    padding: 10px;
  }

  th {
    background-color: #5f4522;
    color: white;
    border: 1px solid black;
    padding: 10px;
  }
}
</style>
