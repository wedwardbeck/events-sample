<template>
  <section class="section">
    <div class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Events</p>
          <p class="title">3,456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">This Week</p>
          <p class="title">123</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Followers</p>
          <p class="title">456K</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
    </div>
    <div class="columns is-multiline is-desktop">
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
      <core-event-card />
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

  components: {
    Card,
    CoreEventCard
  }
}
</script>
