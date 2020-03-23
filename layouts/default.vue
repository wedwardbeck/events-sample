<template>
  <div>
    <TheNavbar />

    <section class="main-content columns has-background-light">
      <div class="container column is-12 ">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import TheNavbar from '@/components/Navigation/TheNavbar'

export default {
  components: {
    TheNavbar
  },
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
<style lang="css">
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
