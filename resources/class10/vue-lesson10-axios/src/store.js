import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    stations: []
  },
  getters: {
    getMessage: state => {
      let selectedStations = state.stations.map(elem => elem.fields)
      console.log(selectedStations)
      return selectedStations
    }
  },
  mutations: {
    SET_LOADING_STATUS(state) {
      state.isLoading = !state.isLoading
      console.log(state.isLoading)
    },
    SET_STATIONS(state, stations) {
      state.stations = stations
      console.log(state.stations)
    }
  },
  actions: {
    fetchStations(context) {
      context.commit('SET_LOADING_STATUS')

      axios
        .get(
          'https://data.sbb.ch/api/records/1.0/search/?dataset=kontaktadressen&facet=service&rows=10&start=0'
        )
        .then(response => {
          let rows = response.data.nhits
          let path = `https://data.sbb.ch/api/records/1.0/search/?dataset=kontaktadressen&facet=service&rows=${rows}&start=0`
          axios
            .get(path)
            .then(response => {
              context.commit('SET_LOADING_STATUS')
              context.commit('SET_STATIONS', response.data.records)
            })
            .catch(error => {
              // Handle state in a correct way
              console.log('There was an error:', error.response)
            })
        })
        .catch(error => {
          // Handle state in a correct way
          console.log('There was an error:', error.response)
        })
    }
  }
})
