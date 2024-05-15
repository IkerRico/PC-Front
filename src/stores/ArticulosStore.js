import { defineStore } from 'pinia'
import axios from 'axios'

const SERVER = 'http://localhost:3000'

export const articuloStore = defineStore('articuloStore', {
  state: () => ({
    articulos: []
  }),
  actions: {
    async obtenerTodosLosArticulos() {
      try {
        const response = await axios.get(SERVER + '/articulos')
        this.articulos = response.data
      } catch (error) {
        this.addMessaje('Error en la carga de los articulos: ' + error)
      }
    }
  }
})
