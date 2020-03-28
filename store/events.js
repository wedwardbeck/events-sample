export const state = () => ({
  events: []
})

export const actions = {
  async fetchAllEvents ({ commit }) {
    const events = await this.$axios.$get('events/')
    commit('setEvents', events)
  },

  async fetchEvent ({ commit }, id) {
    const event = await this.$axios.$get(`events/${id}`)
    commit('setEvent', event)
  }
}

export const mutations = {
  setEvent (state, event) {
    state.events.push(event)
  },
  setEvents (state, events) {
    state.events = events
  }
}
// export const getters = {
//   loadedEvents(state) {
//     return state.events.events
//   }
// }
