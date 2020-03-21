<template>
  <div>
    Hello user {{ $route.params.uid }} with token {{ $route.params.token }}
  </div>
</template>

<script>
export default {
  auth: false,
  middleware: 'guest',
  created() {
    this.activate()
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    async activate() {
      const formData = new FormData()
      formData.append('uid', this.$route.params.uid)
      formData.append('token', this.$route.params.token)
      try {
        await this.$axios.$post("/auth/users/activation/", formData)
        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
