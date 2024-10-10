import { defineStore } from 'pinia'
import axios from 'axios'

const SERVER = 'http://127.0.0.1:8000/api'

export const maderasStore = defineStore('maderasStore', {
  state: () => ({
    maderas: [
      { id: 'rob', nombre: 'roble' },
      { id: 'cao', nombre: 'caoba' }
    ],
    madera: ""
  }),
  actions: {
    async obtenerTodasLasMaderas() {
        const response = await axios.get(SERVER + '/maderas')
        this.maderas = response.data
    },
    async obtenerMaderaPorCodigo(id) {
      const response = await axios.get(SERVER + '/maderas/' + id)
      this.madera = response.data
    }
  }
})
