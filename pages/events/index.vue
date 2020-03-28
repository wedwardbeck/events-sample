<template>
  <section class="section">
    <div class="columns is-multiline is-desktop">
      <core-event-list :events="loadedEvents" />
    </div>
  </section>
</template>

<script>
import CoreEventList from '~/components/UI/CoreEventList'
export default {
  name: 'EventListingPage',
  auth: false,
  transition: "default",

  components: {
    CoreEventList
  },
  async fetch({ store }) {
    await store.dispatch("events/fetchAllEvents")
  },
  computed: {
    loadedEvents() {
      return this.$store.state.events.events
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
