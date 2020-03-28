<template>
  <div>
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
        :eventStartDate="event.eventStartDate"
        :eventEndDate="event.eventEndDate"
        :EarlyRegistrationStartDate="event.EarlyRegistrationStartDate"
        :registrationStartDate="event.registrationStartDate"
        :registrationEndDate="event.registrationEndDate"
      />
    </div>
  </div>
</template>

<script>
import CoreEventCard from '~/components/UI/CoreEventCard'

export default {
  components: {
    CoreEventCard
  },
  props: {
    events: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
