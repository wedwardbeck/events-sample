export default function ({ $axios }) {
  // $axios.setHeader('AUTHORIZATION', 'Bearer ', ${token})
  $axios.onRequest((config) => {
    // console.log('Making request to ' + config.url)
    config.xsrfCookieName = 'csrftoken'
    config.xsrfHeaderName = 'X-CSRFToken'
    // ...
    // Refresh JWT token if needed
    // ...
    // config.headers['Authorization'] = `Bearer ${token}`
    // this.$axios.setToken(userAccessToken, 'Token')
    return config
  })
}
