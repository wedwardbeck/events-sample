<template>
  <section class="section">
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

export default {
  name: 'HomePage',
  auth: false,

  components: {
    Card
  }
}
</script>
