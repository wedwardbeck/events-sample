<template>
  <div>
    {{ event.title }}ff
    {{ event.subTitle }}ff
    <core-event-card
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
</template>

<script>
import CoreEventCard from '~/components/UI/CoreEventCard'

export default {
  name: 'EventDetail',
  auth: false,
  transition: "default",

  components: {
    CoreEventCard
  },
  async fetch({ store, params }) {
    await store.dispatch('vendors/fetchVendor', params.id)
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    vendor() {
      return this.$store.state.vendors.all.find(vendor => vendor.id === Number(this.id))
    }
  }  
}
</script>

<style lang="scss" scoped>
</style>
