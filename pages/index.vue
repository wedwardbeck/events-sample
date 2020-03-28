<template>
  <section class="section p-tb-mid">
    <div class="level is-mobile m-b-min">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            Events
          </p>
          <p class="title">
            3,456
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            New this Week
          </p>
          <p class="title">
            123
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            Followers
          </p>
          <p class="title">
            456K
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            Likes
          </p>
          <p class="title">
            789
          </p>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-desktop">
      <core-event-card
        v-for="event in events"
        :id="event.id"
        :key="event.id"
        :title="event.title"
        :subTitle="event.subTitle"
        :imageURL="event.imageURL"
        :locationName="event.locationName"
        :address1="event.address1"
        :address2="event.address2"
        :city="event.city"
        :region="event.region"
        :postcode="event.postcode"
        :country="event.country"
        :phone="event.phone"
        :email="event.email"
      />
    </div>
    <div class="columns is-mobile">
      <card
        title="Free"
        pack="fab"
        icon="github"
      >
        Open source on <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </card>
      <card
        title="Responsive"
        pack="fas"
        icon="desktop"
      >
        <b class="has-text-grey">
          Every
        </b> component is responsive
      </card>

      <card
        title="Modern"
        pack="fas"
        icon="glass-cheers"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js
        </a> and <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

      <card
        title="Lightweight"
        pack="fas"
        icon="balance-scale"
      >
        No other internal dependency
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import CoreEventCard from '~/components/UI/CoreEventCard'

export default {
  name: 'HomePage',
  auth: false,
  transition: "default",

  components: {
    Card,
    CoreEventCard
  },
  // data() {
  //   return {
  //     // events: []
  //   }
  // },
  async fetch({ store }) {
    // dispatch action fetchAllEvents
    await store.dispatch("events/fetchAllEvents")
  },
  computed: {
    events() {
      return this.$store.state.events.all
    }
  }
  // props: {
  //   events: {
  //     type: Array,
  //     required: true
  //   }
  // }
}
</script>
<style lang="css" scoped>
/* .m-b-min {
  margin-bottom: 0.75rem;
} */
</style>
