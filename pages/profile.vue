<template>
  <section class="section">
    <div class="container">
      <h2 class="title">
        My Profile
      </h2>
      <div class="content">
        <p>
          <strong>UserID:</strong>
          {{ this.$store.state.auth.user.id }}
        </p>
        <p>
          <strong>Email:</strong>
          <!-- {{ loggedInUser.email }} -->
          {{ this.$store.state.auth.user.email }}
        </p>
        <p>
          <strong>Joined:</strong>
          {{ this.$store.state.auth.user.date_joined | date('DD MMM YYYY h:mm a') }}
        </p>
        <p>
          <strong>Last Login:</strong>
          {{ this.$store.state.auth.user.last_login | date('DD MMM YYYY h:mm a') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  computed: {
    // ...mapGetters(['loggedInUser'])
  },
  middleware: 'auth'
}
</script>
