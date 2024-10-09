import { defineStore } from 'pinia'
import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/api'

export const maderasStore = defineStore('maderasStore', {
  state: () => ({
    maderas: [
      { id: 'rob', nombre: 'roble' },
      { id: 'cao', nombre: 'caoba' }
    ],
  }),
  actions: {
    async obtenerTodasLasMaderas() {
        const response = await axios.get(SERVER + '/maderas')
        this.maderas = response.data
    },
    obtenerMaderaPorCodigo(id) {
      return this.maderas.find((madera) => madera.id == id)
    }
  }
})
