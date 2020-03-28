<template>
  <div>
    <p class="title">
      {{ event.title }}
    </p>
    <p class="sub-title">
      {{ event.subTitle }}
    </p>
    <div class="column column is-one-third is-marginless">
      <v-lazy-image :src="event.imageURL" />
    </div>
    <span class=" columns is-mobile ">
      <div class="column is-1 p-tb-icon">
        <b-icon
          pack="fas"
          icon="map-marker-alt"
          size="is-small"
        />
      </div>
      <div class="column pull-left p-tb-min p-l-min">
        {{ event.locationName }}
        <br>
        <span v-if="event.address1">
          {{ event.address1 }}
          <span v-if="event.address2">, {{ event.address2 }}</span>
          <br>
        </span>
        <span v-if="event.city">{{ event.city }}, </span>
        {{ event.region }} {{ event.postcode }} {{ event.country }}
      </div>
    </span>
    {{ event.phone }}
    {{ event.email }}
    <p>
      {{ event.eventStartDate | FormatDate('d MMM yyyy') }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'EventDetail',
  auth: false,
  transition: "default",

  components: {
  },
  async fetch({ store, params }) {
    await store.dispatch('events/fetchEvent', params.id)
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    event() {
      return this.$store.state.events.events.find(event => event.id === Number(this.id))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
