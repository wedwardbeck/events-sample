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
        title="Test 1"
        subTitle="yet another event"
        imageURL="https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ"
        locationName="Kay Bailey Hutchison Convention Center"
        address1="650 S Griffin St"
        address2=""
        city="Dallas"
        region="TX"
        postcode="75202"
        country="USA"
        phone="469-555-1212"
        email="fsadfasfd@sdflskf.com"
      />
      <core-event-card
        title="Grapplefest Dallas 2020"
        subTitle="Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!"
        imageURL="https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ"
        locationName="Bonnie Yard"
        city="Dallas"
        region="TX"
        postcode="75202"
        country="USA"
        phone="469-555-1212"
        email="fsadfasfd@sdflskf.com"
      />
      <core-event-card
        title="Grapplefest Dallas 2020"
        subTitle="Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!"
        imageURL="https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ"
        locationName="Bonnie Yard"
        address1=""
        address2=""
        city=""
        region="TX"
        postcode="75202"
        country="USA"
        phone=""
        email=""
      />
      <core-event-card
        title="Grapplefest Dallas 2020"
        subTitle="Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!"
        imageURL="https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ"
        locationName="Bonnie Yard"
        address1=""
        address2=""
        city="McKinney"
        region="TX"
        postcode="75202"
        country="USA"
        phone=""
        email=""
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
