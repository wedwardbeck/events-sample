<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <!-- eslint-disable vue/multiline-html-element-content-newline -->
  <div class="columns">
    <div class="column is-one-third-widescreen is-full-tabletcard">
      <div class="column card-content">
        <div class="columns">
          <div class="column column is-three-fifths is-marginless has-background-warning">
            <img src="https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ">
          </div>
          <div class="column has-background-success">
            <p class="title">
              <b-icon
                pack="fas"
                icon="flag"
                size="is-small"
              />
              19 Apr </p>
            <p class="sub-title">
              <b-icon
                pack="fas"
                icon="flag"
                size="is-small"
              />
              12 Apr </p>
          </div>
        </div>
        <div class="column has-background-grey">Content3</div>
        <div class="column has-background-success">Content too 4</div>
        <div class="columns">
          <div class="column">
            <div class="module-card-wrap">
              <div class="module-card">
                <div class="card">card 1</div>
                <div class="card">card 2</div>
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false
}
</script>

<style lang="scss" scoped>
</style>
