<template>
  <!-- eslint-disable vue/singleline-html-element-content-newline -->
  <!-- eslint-disable vue/multiline-html-element-content-newline -->
  <div class="columns">
    <div class="column card is-one-third-widescreen is-full-tabletcard">
      <div class="column card-content">
        <div class="columns">
          <div class="column column is-three-fifths is-marginless">
            <img src="https://images.unsplash.com/photo-1564415315882-6ed9429af831?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ">
          </div>
          <div class="column">
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
        <div class="column ">
          <div class="module-card-wrap">
            <div class="module-card">
              <!-- <div class="card"> -->
              <div class="content">
                <p class="title is-4">Grapplefest Dallas 2020</p>
                <p class="subtitle is-6">Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!</p>
              </div>
              <!-- </div> -->
              <!-- <div class="card"> -->
              <span class=" columns is-mobile p-t-none">
                <div class="column is-1">
                  <b-icon
                    pack="fas"
                    icon="map-marker-alt"
                    size="is-small"
                  />
                </div>
                <div class="column pull-left">
                  Kay Bailey Hutchison Convention Center<br>
                  650 S Griffin St<br>
                  Dallas, TX 75202 USA
                </div>
              </span>
              <span class=" columns is-mobile is-paddingless">
                <div class="column is-1">
                  <b-icon
                    pack="fas"
                    icon="phone"
                    size="is-small"
                  />
                </div>
                <div class="column pull-left">
                  469-555-1212
                </div>
              </span>
              <span class=" columns is-mobile is-paddingless">
                <div class="column is-1">
                  <b-icon
                    pack="fas"
                    icon="envelope"
                    size="is-small"
                  />
                </div>
                <div class="column pull-left">
                  joe@no.com
                </div>
              </span>
              <!-- </div> -->
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
.p-blr-none {
  padding-bottom: 0.25em;
  padding-left: 0.25em;
  padding-right: 0.25em;
}
.p-t-none {
  padding-top: 0.25em;
}
.p-t-title {
  padding-top: 1rem;
}
</style>
