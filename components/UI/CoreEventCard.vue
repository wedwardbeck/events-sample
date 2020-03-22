<template>
  <div class="column is-one-third-widescreen is-full-tablet">
    <div class="card">
      <div class="card-content">
        <div class="columns">
          <div class="media column is-three-fifths is-marginless">
            <div class="media-left ">
              <figure>
                <img
                  src="~/static/img/txbjj.png"
                  alt="Event image"
                >
              </figure>
            </div>

          </div>
          <div class="column ">
            <div class="card-content level-item is-pulled-left p-blr-none">
              <b-icon
                pack="fas"
                icon="flag"
                size="is-small"
              />
              <span class="title is-5 level-item is-pulled-right">
                &nbsp; 19 Apr
              </span>
            </div>
            <div class="card-content level-item is-paddingless is-pulled-left">
              <b-icon
                pack="fas"
                icon="hourglass-half"
                size="is-small"
                type="is-secondary"
              />
              <span class="sub-title is-6 is-pulled-right level-item">
                &nbsp; 12 Apr
              </span>
            </div>
          </div>
        </div>
        <div class="content">
          <p class="title is-4">Grapplefest Dallas 2020</p>
          <p class="subtitle is-6">Adults Gi & No-Gi, Kids & Teens Gi & No-Gi Tournament April 19th, 2020!</p>
        </div>
        <div class="card-content columns">
          <div class="column is-paddingless">
            <div class="columns">
              <div class="column is-1 is-mobile p-blr-none level-left">
                <b-icon
                  pack="fas"
                  icon="map-marker-alt"
                  size="is-small"
                />
              </div>
              <div class="column is-mobile level-right">
                <span class="content ">
                  Kay Bailey Hutchison Convention Center<br>
                  650 S Griffin St<br>
                  Dallas, TX 75202 USA
                </span>
              </div>
            </div>

          </div>
          <div class="column is-paddingless">
            <div class="columns">
              <div class="column is-1 is-mobile ">
                <b-icon
                  pack="fas"
                  icon="phone"
                  size="is-small"
                />
              </div>
              <div class="column is-mobile ">
                <span class="content ">
                  469-555-1212
                </span>
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

}
</script>

<style lang="css" scoped>
.p-blr-none {
  padding-bottom: 0.25em;
  padding-left: 0.25em;
  padding-right: 0.25em;
}
.p-t-none {
  padding-top: 0.25em;
}
</style>
