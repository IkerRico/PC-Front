import { defineStore } from 'pinia'
import axios from 'axios'

const SERVER = 'http://localhost:3000'

export const maderasStore = defineStore('maderasStore', {
  state: () => ({
    maderas: [
      { id: 'rob', nombre: 'roble' },
      { id: 'cao', nombre: 'caoba' }
    ],
    datosCargados: false
  }),
  actions: {
    async obtenerTodasLasMaderas() {
      this.datosCargados = true
      const response = await axios.get(SERVER + '/maderas')
      this.maderas = response.data
    },
    obtenerMaderaPorCodigo(id) {
      return this.maderas.find((madera) => madera.id == id)
    }
  }
})
