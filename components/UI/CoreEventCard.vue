<template>
  <div class="column is-one-third-widescreen is-full-tabletcard">
    <nuxt-link :to="{ name: 'events-id', params: { id:id } }">
      <div class="card bm--card-equal-height">
        <div class="column card-content ">
          <div class="columns m-b-min">
            <div class="column column is-three-fifths is-marginless">
              <v-lazy-image :src="imageURL" />
            </div>
            <div class="column">
              <p
                v-if="eventStartDate"
                class="subtitle is-6 is-italic "
              >
                Event Date
              </p>
              <p class="title is-5 m-b-min">
                {{ eventStartDate | FormatDate('d MMM yyyy') }}
              </p>
              <p class="subtitle is-7">
                {{ eventStartDate | FromNow() }}
              </p>
              <hr
                v-if="registrationStartDate"
                class="is-marginless"
              >
              <p
                v-if="registrationStartDate"
                class="subtitle is-6 is-italic "
              >
                Registration
              </p>
              <p class="title is-5">
                {{ registrationStartDate | FormatDate('d MMM yyyy') }}
              </p>
              <p class="subtitle is-7">
                {{ registrationStartDate | FromNow() }}
              </p>
            </div>
          </div>
          <div class="column ">
            <div class="module-card-wrap">
              <div class="module-card">
                <div class="content">
                  <p class="title is-4">
                    {{ title }}
                  </p>
                  <p class="subtitle is-6">
                    {{ subTitle }}
                  </p>
                </div>
                <span class=" columns is-mobile p-t-none">
                  <div class="column is-1 p-tb-icon">
                    <b-icon
                      pack="fas"
                      icon="map-marker-alt"
                      size="is-small"
                    />
                  </div>
                  <div class="column pull-left p-tb-min p-l-min">
                    {{ locationName }}<br>
                    <span v-if="address1">{{ address1 }}<span v-if="address2">, {{ address2 }}</span><br></span>
                    <span v-if="city">{{ city }}, </span>{{ region }} {{ postcode }} {{ country }}
                  </div>
                </span>
                <div class="columns is-mobile is-paddingless">
                  <div class="column">
                    <span class=" columns is-mobile is-paddingless">
                      <div
                        v-if="phone"
                        class="column is-1 p-tb-icon"
                      >
                        <b-icon
                          pack="fas"
                          icon="phone"
                          size="is-small"
                        />
                      </div>
                      <div class="column pull-left p-tb-min">
                        {{ phone }}
                      </div>
                    </span>
                  </div>
                  <div class="column">
                    <span class=" columns is-mobile is-paddingless">
                      <div
                        v-if="email"
                        class="column is-1 p-tb-icon"
                      >
                        <b-icon
                          pack="fas"
                          icon="envelope"
                          size="is-small"
                        />
                      </div>
                      <div class="column pull-left p-tb-min">
                        {{ email }}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    imageURL: {
      // type: URL,
      required: false,
      default: ''
    },
    locationName: {
      type: String,
      required: true
    },
    address1: {
      type: String,
      required: false,
      default: ''
    },
    address2: {
      type: String,
      required: false,
      default: ''
    },
    city: {
      type: String,
      required: false,
      default: ''
    },
    region: {
      type: String,
      required: false,
      default: ''
    },
    postcode: {
      type: String,
      required: false,
      default: ''
    },
    country: {
      type: String,
      required: false,
      default: ''
    },
    phone: {
      type: String,
      required: false,
      default: ''
    },
    email: {
      type: String,
      required: false,
      default: ''
    },
    eventStartDate: {
      type: String,
      required: false,
      default: null
    },
    eventEndDate: {
      type: String,
      required: false,
      default: null
    },
    earlyRegistrationStartDate: {
      type: String,
      required: false,
      default: null
    },
    registrationStartDate: {
      type: String,
      required: false,
      default: null
    },
    registrationEndDate: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
  }
}
</script>

<style lang="css" scoped>
</style>
