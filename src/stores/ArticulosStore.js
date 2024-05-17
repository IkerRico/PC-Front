import { defineStore } from 'pinia'
import axios from 'axios'

const SERVER = 'http://localhost:3000'

export const articuloStore = defineStore('articuloStore', {
  state: () => ({
    articulos: [
      { id: 1, descripcion: 'Artículo de prueba 1', alto: 2500, ancho: 825, grueso: 66 },
      { id: 2, descripcion: 'Artículo de prueba 2', alto: 2500, ancho: 825, grueso: 66 }
    ]
  }),
  actions: {
    async obtenerTodosLosArticulos() {
      const response = await axios.get(SERVER + '/articulos')
      this.articulos = response.data
    }
  }
})
