import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    stations: []
  },
  mutations: {
    SET_LOADING_STATUS(state) {
      state.isLoading = !state.isLoading
    },
    SET_STATIONS(state, stations) {
      state.stations = stations
    }
  },
  actions: {
    fetchStations(context) {
      context.commit('SET_LOADING_STATUS')
      axios.get('https://data.sbb.ch/api/records/1.0/search').then(response => {
        context.commit('SET_LOADING_STATUS')
        context.commit('SET_STATIONS', response.data)
      })
    }
  }
})
