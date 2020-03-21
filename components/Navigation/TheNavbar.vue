<template>
  <b-navbar type="is-dark">
    <template slot="brand">
      <b-navbar-item
        tag="nuxt-link"
        :to="{ path: '/' }"
      >
        <img src="~/assets/buefy.png">
      </b-navbar-item>
    </template>
    <template
      v-if="this.$store.state.auth.loggedIn"
      slot="start"
    >
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown
        label="Core Data"
        hoverable
      >
        <b-navbar-item
          tag="nuxt-link"
          :to="{ name: 'home' }"
        >
          Clients
        </b-navbar-item>

        <hr class="navbar-divider">
        <b-navbar-item
          tag="nuxt-link"
          :to="{ name: 'home' }"
        >
          New XXX
        </b-navbar-item>
        <b-navbar-item
          tag="nuxt-link"
          :to="{ name: 'home' }"
        >
          New XXX
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown
        label="Stuff"
        hoverable
      >
        <b-navbar-item
          tag="nuxt-link"
          :to="{ name: 'home' }"
        >
          Assignments
        </b-navbar-item>
      </b-navbar-dropdown>

      <b-navbar-dropdown
        label="Admin"
        hoverable
      >
        <b-navbar-item
          tag="nuxt-link"
          :to="{ name: 'home' }"
        >
          User Management
        </b-navbar-item>
        <b-navbar-item
          tag="nuxt-link"
          :to="{ name: 'home' }"
        >
          Site Admin
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template slot="end">
      <b-navbar-dropdown
        v-if="this.$store.state.auth.loggedIn"
        hoverable
        :label="this.$store.state.auth.user.first_name"
      >
        <b-navbar-item
          tag="nuxt-link"
          :to="{ name: 'profile' }"
        >
          My Profile
        </b-navbar-item>
        <b-navbar-item @click="$auth.logout()">
          Logout
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template
      v-if="!this.$store.state.auth.loggedIn"
      slot="end"
    >
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button
            tag="nuxt-link"
            :to="{ name: 'auth-register' }"
            type="is-link"
            class="button is-light"
          >
            Sign Up
          </b-button>
          <b-button
            tag="nuxt-link"
            :to="{ name: 'auth-login' }"
            type="is-link"
            class="button is-light"
          >
            Log in
          </b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>

<style scoped>
</style>
