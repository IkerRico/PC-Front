import { defineStore } from 'pinia'
import axios from 'axios'

const SERVER = 'http://localhost:3000'

export const articuloStore = defineStore('articuloStore', {
  state: () => ({
    articulos: [
      { id: 1, descripcion: 'Artículo de prueba 1', alto: 2500, ancho: 825, grueso: 66 },
      { id: 2, descripcion: 'Artículo de prueba 2', alto: 2500, ancho: 825, grueso: 66 }
    ],
    datosCargados: false
  }),
  actions: {
    async obtenerTodosLosArticulos() {
      this.datosCargados = true
      const response = await axios.get(SERVER + '/articulos')
      this.articulos = response.data
    },
    obtenerArticuloPorCodigo(id) {
      return this.articulos.find((articulo) => articulo.id == id)
    }
  }
})
