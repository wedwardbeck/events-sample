export const state = () => ({
  events: [
        {
          id: "1",
          title: "Grapplefest Dallas 2020",
          subTitle: "Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!",
          imageURL: "https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ",
          locationName: "Bonnie Yard",
          address1: "132 Main St.",
          address2: "",
          city: "McKinney",
          region: "TX",
          postcode: "75202",
          country: "USA",
          phone: "540-555-1212",
          email: ""
        },
        {
          id: "2",
          title: "Grapplefest Dallas 2020",
          subTitle: "Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!",
          imageURL: "https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ",
          locationName: "Bonnie Yard",
          address1: "132 Main St.",
          address2: "",
          city: "McKinney",
          region: "TX",
          postcode: "75202",
          country: "USA",
          phone: "540-555-1212",
          email: ""
        },
        {
          id: "3",
          title: "Grapplefest Dallas 2020",
          subTitle: "Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!",
          imageURL: "https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ",
          locationName: "Bonnie Yard",
          address1: "132 Main St.",
          address2: "",
          city: "McKinney",
          region: "TX",
          postcode: "75202",
          country: "USA",
          phone: "540-555-1212",
          email: ""
        },
        {
          id: "4",
          title: "Grapplefest Dallas 2020",
          subTitle: "Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!",
          imageURL: "https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ",
          locationName: "Bonnie Yard",
          address1: "132 Main St.",
          address2: "",
          city: "McKinney",
          region: "TX",
          postcode: "75202",
          country: "USA",
          phone: "540-555-1212",
          email: ""
        },
        {
          id: "5",
          title: "Grapplefest Dallas 2020",
          subTitle: "Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!",
          imageURL: "https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ",
          locationName: "Bonnie Yard",
          address1: "132 Main St.",
          address2: "",
          city: "McKinney",
          region: "TX",
          postcode: "75202",
          country: "USA",
          phone: "540-555-1212",
          email: ""
        }
      ]
})

export const actions = {
  async fetchAllEvents ({ commit }) {
    const events = await this.$axios.$get('data.json').then('@static/data.json')
    commit('setEvents', events)
  },

  async fetchEvent ({ commit }, id) {
    const Event = await this.$axios.$get(`events/${id}`)
    commit('setEvent', Event)
  }
}

export const mutations = {
  setEvent (state, Event) {
    state.all.push(Event)
  },
  setEvents (state, Events) {
    state.all = Events
  }
}
