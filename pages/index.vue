<template>
  <section class="section p-tb-min">
    <div class="level is-mobile ">
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
      <core-event-list :events="loadedEvents" />
    </div>
  </section>
</template>

<script>
// import Card from '~/components/Card'
import CoreEventList from '~/components/UI/CoreEventList'

export default {
  name: 'HomePage',
  auth: false,
  transition: "default",

  components: {
    CoreEventList
  },
  async fetch({ store }) {
    // dispatch action fetchAllEvents
    await store.dispatch("events/fetchAllEvents")
  },
  computed: {
    loadedEvents() {
      return this.$store.state.events.events
    }
  }
}
</script>
<style lang="css" scoped>
/* .m-b-min {
  margin-bottom: 0.75rem;
} */
</style>
